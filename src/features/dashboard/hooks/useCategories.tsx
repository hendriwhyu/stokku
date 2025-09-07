import { ChangeEvent, useMemo, useState } from "react";
import {
	useFetchCreateCategory,
	useFetchDeleteCategory,
	useFetchListCategories,
	useFetchUpdateCategory,
} from "@/services/categories";
import { Category } from "@/types/category";
import { Form, message, Modal } from "antd";

const useCategories = () => {
	const [form] = Form.useForm();

	const [searchText, setSearchText] = useState("");
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [editingCategory, setEditingCategory] = useState<Category | null>(null);

	const { dataCategories: categories, refetch } = useFetchListCategories();

	const { mutateDeleteCategory } = useFetchDeleteCategory();

	// Filter categories based on search text
	const filteredCategories = useMemo(
		() =>
			categories?.filter((category: Category) =>
				category.nama_kategori.toLowerCase().includes(searchText.toLowerCase())
			),
		[categories, searchText]
	);

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchText(e.target.value);
	};

	const handleOpenCreateModal = () => {
		setEditingCategory(null);
		setIsModalOpen(true);
	};

	const handleOpenEditModal = (category: Category) => {
		setEditingCategory(category);
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setEditingCategory(null);
	};

	const onDeleteCategory = async (category: Category) => {
		try {
			await mutateDeleteCategory({ id: category.id_kategori });
			refetch();
			message.success("Category berhasil dihapus");
		} catch (error: any) {
			console.log(error);
			if (error.response?.status === 400) {
				message.error(
					"Category tidak dapat dihapus karena masih terkait dengan produk"
				);
			} else {
				message.error("Gagal menghapus Category");
			}
		}
	};

	const handleDeleteCategory = (category: Category) => {
		Modal.confirm({
			title: "Konfirmasi Hapus",
			content: `Apakah Anda yakin ingin menghapus Category "${category.nama_kategori}"?`,
			okText: "Ya",
			okType: "danger",
			cancelText: "Tidak",
			onOk: () => onDeleteCategory(category),
		});
	};

	const handleSuccessForm = () => {
		refetch();
		message.success(
			editingCategory
				? "Category berhasil diperbarui"
				: "Category berhasil ditambahkan"
		);
		handleCloseModal();
	};

	return {
		form,
		isModalOpen,
		searchText,
		editingCategory,
		filteredCategories,
		handleSearch,
		handleOpenCreateModal,
		handleOpenEditModal,
		handleCloseModal,
		onDeleteCategory,
		handleSuccessForm,
		handleDeleteCategory,
	};
};

export default useCategories;
