import { Product } from "./product";

export interface Stock {
  id_stok: number;
  id_produk: number;
  jumlah_barang: number;
  tgl_update: Date;
  produk: Product;
}

export interface InventoryStats {
  totalProducts: number;
  outOfStock: number;
  lowStock: number;
  normalStock: number;
}