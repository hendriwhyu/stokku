import { ChangeEvent, useMemo, useState } from "react";
import {
	useFetchCreateProduct,
	useFetchDeleteProduct,
	useFetchListProducts,
	useFetchUpdateProduct,
} from "@/services/products";
import { Product } from "@/types/product";
import { Form, message, Modal } from "antd";
import { RcFile } from "antd/es/upload";
import { UploadFile } from "antd/lib";

const useProducts = () => {
	const [form] = Form.useForm();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const [searchText, setSearchText] = useState("");
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [editingProduct, setEditingProduct] = useState<Product | null>(null);
	const [fileList, setFileList] = useState<UploadFile[]>([]);

	const { mutateCreateProduct, isPendingCreateProduct } =
		useFetchCreateProduct();
	const { mutateUpdateProduct, isPendingUpdateProduct } =
		useFetchUpdateProduct();

	const { dataProducts: products, refetch } = useFetchListProducts();

	const { mutateDeleteProduct } = useFetchDeleteProduct();

	// Filter products based on search text
	const filteredProducts = useMemo(
		() =>
			products?.filter(
				(product: Product) =>
					product.nama_produk
						.toLowerCase()
						.includes(searchText.toLowerCase()) ||
					product.kategori.nama_kategori
						.toLowerCase()
						.includes(searchText.toLowerCase())
			),
		[products, searchText]
	);

	const isLoading =
		isPendingCreateProduct || isPendingUpdateProduct || isSubmitting;

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchText(e.target.value);
	};

	const handleOpenCreateModal = () => {
		setEditingProduct(null);
		setFileList([]);
		setIsModalOpen(true);
	};

	const handleOpenEditModal = (product: Product) => {
		setEditingProduct(product);
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setEditingProduct(null);
		setFileList([]);
		form.resetFields();
	};

	// Convert file to base64 for preview
	const getBase64 = (file: RcFile): Promise<string> =>
		new Promise((resolve, reject) => {
			const reader = new FileReader();
			console.log(reader, file);
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result as string);
			reader.onerror = (error) => reject(error);
		});

	const handleSuccessForm = () => {
		handleCloseModal();
		refetch();
	};

	const onDeleteProduct = async (product: Product) => {
		try {
			await mutateDeleteProduct({ id: product.id_produk });
			refetch();
			message.success("Produk berhasil dihapus");
		} catch (error: any) {
			console.log(error);
			message.error("Gagal menghapus produk");
		}
	};

	const handleDeleteProduct = (product: Product) => {
		Modal.confirm({
			title: "Konfirmasi Hapus",
			content: `Apakah Anda yakin ingin menghapus produk "${product.nama_produk}"?`,
			okText: "Ya",
			okType: "danger",
			cancelText: "Tidak",
			onOk: () => onDeleteProduct(product),
		});
	};

	return {
		form,
		isLoading,
		isModalOpen,
		searchText,
		editingProduct,
		filteredProducts,
		fileList,
		setFileList,
		handleSearch,
		handleSuccessForm,
		handleOpenCreateModal,
		handleOpenEditModal,
		handleCloseModal,
		getBase64,
		onDeleteProduct,
		handleDeleteProduct,
	};
};

export default useProducts;
