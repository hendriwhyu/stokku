import prisma from "@/helpers/lib/prisma";
import { NextResponse } from "next/server";

interface StockEditRequest {
  id_produk: number;
  jumlah_barang: number;
}

export async function POST(request: Request) {
  try {
    const body: StockEditRequest = await request.json();

    // Validasi input
    if (!body.id_produk || body.id_produk <= 0) {
      return NextResponse.json(
        { message: "Product ID is required and must be valid", success: false },
        { status: 400 }
      );
    }

    if (body.jumlah_barang === undefined || body.jumlah_barang < 0) {
      return NextResponse.json(
        { message: "Stock quantity must be a non-negative number", success: false },
        { status: 400 }
      );
    }

    // Gunakan transaction untuk memastikan atomicity
    const result = await prisma.$transaction(async (tx) => {
      // Cek apakah produk ada
      const product = await tx.produk.findUnique({
        where: { id_produk: body.id_produk },
        include: {
          kategori: true,
        },
      });

      if (!product) {
        throw new Error("Product not found");
      }

      // Ambil stok terbaru untuk referensi
      const latestStock = await tx.stok.findFirst({
        where: { id_produk: body.id_produk },
      });

      const previousStock = latestStock ? latestStock.jumlah_barang : 0;

      // Buat record stok baru dengan jumlah yang ditentukan
      const newStockRecord = await tx.stok.update({
        where: {
          id_stok: latestStock?.id_stok,
        },
        data: {
          jumlah_barang: body.jumlah_barang,
          tgl_update: new Date(),
        },
      });

      return {
        product,
        previousStock,
        newStock: body.jumlah_barang,
        stockRecord: newStockRecord,
      };
    });

    return NextResponse.json({
      message: "Stock updated successfully",
      data: result,
    });

  } catch (error: any) {
    console.error("Error updating stock:", error);
    
    // Handle specific error messages
    if (error.message === "Product not found") {
      return NextResponse.json(
        { message: error.message, success: false },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Error updating stock", success: false },
      { status: 500 }
    );
  }
}
