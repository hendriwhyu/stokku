import { message } from "antd";
import { Product } from "@/types/product";
import dayjs from "dayjs";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { InventoryStats } from "@/types/stock";

/**
 * Export inventory data to Excel file
 * @param products - List of products to export
 * @param stats - Inventory statistics
 */
export const exportToExcel = (products: Product[], stats: InventoryStats) => {
  if (!products || products.length === 0) {
    message.error("Tidak ada data untuk diekspor");
    return;
  }

  try {
    // Persiapkan data untuk ekspor
    const exportData = products.map((product) => {
      const currentStock = product.stok?.jumlah_barang || 0;
      const lastUpdate = product.stok?.tgl_update;
      
      return {
        "ID": product.id_produk,
        "Kode Produk": product.kode_produk,
        "Nama Produk": product.nama_produk,
        "Kategori": product.kategori?.nama_kategori || "-",
        "Stok Terkini": currentStock,
        "Tanggal Register": dayjs(product.tgl_register).format("DD/MM/YYYY"),
        "Tanggal Update Stok": lastUpdate ? dayjs(lastUpdate).format("DD/MM/YYYY") : "-"
      };
    });

    // Buat workbook dan worksheet
    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Laporan Stok");

    // Tambahkan worksheet untuk statistik
    const statsData = [
      { "Statistik": "Total Produk", "Nilai": stats.totalProducts },
      { "Statistik": "Stok Habis", "Nilai": stats.outOfStock },
      { "Statistik": "Stok Menipis", "Nilai": stats.lowStock },
      { "Statistik": "Stok Normal", "Nilai": stats.normalStock },
    ];
    const statsWorksheet = XLSX.utils.json_to_sheet(statsData);
    XLSX.utils.book_append_sheet(workbook, statsWorksheet, "Statistik");

    // Ekspor ke file Excel
    const fileName = `Laporan_Stok_${dayjs().format("YYYY-MM-DD")}.xlsx`;
    XLSX.writeFile(workbook, fileName);

    message.success(`Berhasil mengekspor data ke ${fileName}`);
  } catch (error) {
    console.error("Error exporting to Excel:", error);
    message.error("Gagal mengekspor data ke Excel");
  }
};

/**
 * Export inventory data to PDF file
 * @param products - List of products to export
 * @param stats - Inventory statistics
 */
export const exportToPDF = (products: Product[], stats: InventoryStats) => {
  if (!products || products.length === 0) {
    message.error("Tidak ada data untuk diekspor");
    return;
  }

  try {
    // Inisialisasi dokumen PDF
    const doc = new jsPDF();
    const currentDate = dayjs().format("DD/MM/YYYY HH:mm");

    // Tambahkan judul dan informasi laporan
    doc.setFontSize(18);
    doc.text("Laporan Stok Produk", 14, 22);
    doc.setFontSize(10);
    doc.text(`Tanggal Laporan: ${currentDate}`, 14, 30);
    doc.text(`Total Produk: ${stats.totalProducts}`, 14, 35);
    doc.text(`Stok Habis: ${stats.outOfStock}`, 14, 40);
    doc.text(`Stok Menipis: ${stats.lowStock}`, 14, 45);
    doc.text(`Stok Normal: ${stats.normalStock}`, 14, 50);

    // Persiapkan data untuk tabel
    const tableColumn = ["ID", "Kode", "Nama", "Kategori", "Stok", "Tgl Register", "Tgl Update"];
    const tableRows = products.map((product: Product) => [
      product.id_produk,
      product.kode_produk,
      product.nama_produk,
      product.kategori?.nama_kategori || "-",
      product.stok.jumlah_barang || 0,
      dayjs(product.tgl_register).format("DD/MM/YYYY"),
      product.stok.tgl_update ? dayjs(product.stok.tgl_update).format("DD/MM/YYYY") : "-"
    ]);

    // Buat tabel
    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 65,
      theme: "grid",
      styles: { fontSize: 8 },
      headStyles: { fillColor: [41, 128, 185], textColor: 255 },
      alternateRowStyles: { fillColor: [240, 240, 240] }
    });

    // Ekspor ke file PDF
    const fileName = `Laporan_Stok_${dayjs().format("YYYY-MM-DD")}.pdf`;
    doc.save(fileName);

    message.success(`Berhasil mengekspor data ke ${fileName}`);
  } catch (error) {
    console.error("Error exporting to PDF:", error);
    message.error("Gagal mengekspor data ke PDF");
  }
};