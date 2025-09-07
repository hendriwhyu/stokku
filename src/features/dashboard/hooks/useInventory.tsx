import { ChangeEvent, useMemo, useState } from "react";
import { useFetchListProducts } from "@/services/products";
import { useFetchListCategories } from "@/services/categories";
import { Product } from "@/types/product";

export interface InventoryStats {
	totalProducts: number;
	outOfStock: number;
	lowStock: number;
	normalStock: number;
}

const useInventory = () => {
	const { dataProducts, isPendingProducts, refetch } = useFetchListProducts();
	const { dataCategories: categories } = useFetchListCategories();

	// Modal state
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

	// Filter state - consolidated into single object
	const [filters, setFilters] = useState({
		keyword: "",
		category: "all",
		stock: "all",
	});

	// Handle stock adjustment
	const handleStockAdjustment = (product: Product) => {
		setSelectedProduct(product);
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setSelectedProduct(null);
	};

	const handleSuccessForm = () => {
		handleCloseModal();
		refetch();
	}

	// Filter products based on search, category, and stock status
	const filteredProducts = useMemo(() => {
		if (!dataProducts) return [];

		return dataProducts.filter((product) => {
			// Search filter
			const matchesSearch =
				filters.keyword === "" ||
				product.nama_produk.toLowerCase().includes(filters.keyword.toLowerCase()) ||
				product.kode_produk.toLowerCase().includes(filters.keyword.toLowerCase()) ||
				product.kategori.nama_kategori
					.toLowerCase()
					.includes(filters.keyword.toLowerCase());

			// Category filter - handle both string "all" and numeric category ID
			const matchesCategory =
				filters.category === "all" ||
				product.id_kategori === Number(filters.category);

			// Stock filter
			const matchesStock =
				filters.stock === "all" ||
				(filters.stock === "out_of_stock" &&
					product.stok.jumlah_barang === 0) ||
				(filters.stock === "low_stock" &&
					product.stok.jumlah_barang > 0 &&
					product.stok.jumlah_barang < 10) ||
				(filters.stock === "normal_stock" && product.stok.jumlah_barang >= 10);

			return matchesSearch && matchesCategory && matchesStock;
		});
	}, [dataProducts, filters.keyword, filters.category, filters.stock]);

	// Calculate inventory statistics
	const inventoryStats: InventoryStats = useMemo(() => {
		if (!dataProducts) {
			return {
				totalProducts: 0,
				outOfStock: 0,
				lowStock: 0,
				normalStock: 0,
			};
		}

		const totalProducts = dataProducts.length;
		const outOfStock = dataProducts.filter(p => p.stok?.jumlah_barang === 0).length;
		const lowStock = dataProducts.filter(p => p.stok?.jumlah_barang > 0 && p.stok?.jumlah_barang < 10).length;
		const normalStock = dataProducts.filter(p => p.stok?.jumlah_barang >= 10).length;

		return {
			totalProducts,
			outOfStock,
			lowStock,
			normalStock,
		};
	}, [dataProducts]);

	// Helper functions to update individual filter properties
	const setSearchTerm = (keyword: string) =>
		setFilters((prev) => ({ ...prev, keyword }));
	const setSelectedCategory = (category: string) =>
		setFilters((prev) => ({ ...prev, category }));
	const setStockFilter = (stock: string) =>
		setFilters((prev) => ({ ...prev, stock }));

	return {
		isModalOpen,
		selectedProduct,
		searchTerm: filters.keyword,
		selectedCategory: filters.category,
		stockFilter: filters.stock,
		categories,
		dataProducts,
		isPendingProducts,
		filteredProducts,
		inventoryStats,
		handleStockAdjustment,
		handleCloseModal,
		handleSuccessForm,
		setSearchTerm,
		setSelectedCategory,
		setStockFilter,
	};
};

export default useInventory;