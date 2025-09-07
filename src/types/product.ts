import { Category } from "./category";
import { Stock } from "./stock";

export interface Product {
  id_produk: number;
  id_kategori: number;
  nama_produk: string;
  kode_produk: string;
  foto_produk: string[] | string;
  tgl_register: Date;
  kategori: Category;
  stok: Stock;
}