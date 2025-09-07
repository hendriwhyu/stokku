"use client";

import { useFetchListCategories } from "@/services/categories";
import { Button, Input, Table, Space, Modal, Card, Typography } from "antd";
import {
	SearchOutlined,
	PlusOutlined,
	EditOutlined,
	DeleteOutlined,
} from "@ant-design/icons";
import CategoryForm from "@/features/dashboard/categories/CategoryForm";
import type { TableProps } from "antd";
import { Category } from "@/types/category";
import useCategories from "../hooks/useCategories";

const Categories = () => {
	const {
		isModalOpen,
		searchText,
		editingCategory,
		filteredCategories,
		handleSearch,
		handleOpenCreateModal,
		handleOpenEditModal,
		handleCloseModal,
		handleSuccessForm,
		handleDeleteCategory,
	} = useCategories();

	const { isPendingCategories } = useFetchListCategories();

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

	return (
		<Card className="m-4! md:m-6!">
			<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
				<Typography.Title level={3}>Manajemen Category</Typography.Title>
				<Button
					type="primary"
					icon={<PlusOutlined />}
					onClick={handleOpenCreateModal}
					size="large"
				>
					Tambah Category
				</Button>
			</div>

			<div className="mb-4">
				<Input
					placeholder="Cari Category..."
					prefix={<SearchOutlined />}
					value={searchText}
					onChange={handleSearch}
					className="w-full md:w-96"
					size="large"
				/>
			</div>

			<Table
				columns={columns}
				dataSource={filteredCategories}
				rowKey="id_kategori"
				loading={isPendingCategories}
				pagination={{
					pageSize: 10,
					showSizeChanger: true,
					showQuickJumper: true,
					showTotal: (total) => `Total ${total} kategori`,
					responsive: true,
				}}
				bordered
				scroll={{ x: 'max-content' }}
				size="middle"
			/>

			<Modal
				title={editingCategory ? "Edit Category" : "Tambah Category"}
				open={isModalOpen}
				onCancel={handleCloseModal}
				footer={null}
				width="90%"
				style={{ maxWidth: 600 }}
				destroyOnHidden
			>
				<CategoryForm category={editingCategory} onCancel={handleCloseModal} onSuccess={handleSuccessForm} />
			</Modal>
		</Card>
	);
};

export default Categories;
