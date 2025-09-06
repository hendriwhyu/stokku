"use client";

import { useState } from "react";
import {
	useFetchDeleteCategory,
	useFetchListCategories,
} from "@/services/categories";
import { Button, Input, Table, Space, Modal, message } from "antd";
import {
	SearchOutlined,
	PlusOutlined,
	EditOutlined,
	DeleteOutlined,
} from "@ant-design/icons";
import CategoryForm from "@/features/dashboard/components/CategoryForm";
import type { TableProps } from "antd";
import { Category } from "@/types/category";

const Categories = () => {
	const [searchText, setSearchText] = useState("");
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [editingCategory, setEditingCategory] = useState<Category | null>(null);

	const {
		dataCategories: categories,
		isPendingCategories,
		refetch,
	} = useFetchListCategories();

    const { mutateDeleteCategory } = useFetchDeleteCategory();

	// Filter categories based on search text
	const filteredCategories = categories?.filter((category: Category) =>
		category.nama_kategori.toLowerCase().includes(searchText.toLowerCase())
	);

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

	const handleFormSuccess = () => {
		refetch();
		message.success(
			editingCategory
				? "Category berhasil diperbarui"
				: "Category berhasil ditambahkan"
		);
		handleCloseModal();
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

	const columns: TableProps<Category>["columns"] = [
		{
			title: "ID",
			dataIndex: "id_kategori",
			key: "id_kategori",
			width: "15%",
		},
		{
			title: "Nama Category",
			dataIndex: "nama_kategori",
			key: "nama_kategori",
			width: "60%",
		},
		{
			title: "Aksi",
			key: "action",
			width: "25%",
			render: (_, record) => (
				<Space size="middle">
					<Button
						type="primary"
						icon={<EditOutlined />}
						onClick={() => handleOpenEditModal(record)}
					>
						Edit
					</Button>
					<Button
						danger
						icon={<DeleteOutlined />}
						onClick={() => handleDeleteCategory(record)}
					>
						Hapus
					</Button>
				</Space>
			),
		},
	];

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

	return (
		<div className="p-6">
			<div className="flex justify-between items-center mb-6">
				<h1 className="text-2xl font-bold">Manajemen Category</h1>
				<Button
					type="primary"
					icon={<PlusOutlined />}
					onClick={handleOpenCreateModal}
				>
					Tambah Category
				</Button>
			</div>

			<div className="mb-4">
				<Input
					placeholder="Cari Category..."
					prefix={<SearchOutlined />}
					value={searchText}
					onChange={(e) => setSearchText(e.target.value)}
					style={{ width: 300 }}
				/>
			</div>

			<Table
				columns={columns}
				dataSource={filteredCategories}
				rowKey="id_Category"
				loading={isPendingCategories}
				pagination={{ pageSize: 10 }}
				bordered
			/>

			<Modal
				title={editingCategory ? "Edit Category" : "Tambah Category"}
				open={isModalOpen}
				onCancel={handleCloseModal}
				footer={null}
			>
				<CategoryForm
					category={editingCategory}
					onSuccess={handleFormSuccess}
					onCancel={handleCloseModal}
				/>
			</Modal>
		</div>
	);
};

export default Categories;
