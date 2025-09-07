"use client";

import { useFetchListProducts } from "@/services/products";
import { Button, Input, Table, Space, Modal, Card, Image } from "antd";
import {
	SearchOutlined,
	PlusOutlined,
	EditOutlined,
	DeleteOutlined,
} from "@ant-design/icons";
import ProductForm from "@/features/dashboard/products/ProductForm";
import type { TableProps } from "antd";
import { Product } from "@/types/product";
import useProducts from "../hooks/useProducts";

/**
 * Products - Halaman untuk menampilkan dan mengelola daftar produk
 *
 * @returns {React.FC} Komponen Products
 */
const Products = () => {
	const {
		isModalOpen,
		searchText,
		editingProduct,
		filteredProducts,
		handleSearch,
		handleOpenCreateModal,
		handleOpenEditModal,
		handleCloseModal,
		handleSuccessForm,
		handleDeleteProduct,
	} = useProducts();

	const { isPendingProducts } = useFetchListProducts();

	const columns: TableProps<Product>["columns"] = [
		{
			title: "ID",
			dataIndex: "id_produk",
			key: "id_produk",
			width: "10%",
		},
		{
			title: "Nama Produk",
			dataIndex: "nama_produk",
			key: "nama_produk",
			width: "25%",
		},
		{
			title: "Kode Produk",
			dataIndex: "kode_produk",
			key: "kode_produk",
			width: "15%",
		},
		{
			title: "Kategori",
			dataIndex: ["kategori", "nama_kategori"],
			key: "kategori",
			width: "15%",
			render: (_, record) => record.kategori?.nama_kategori || "-",
		},
		{
			title: "Foto",
			key: "foto_produk",
			width: "15%",
			render: (_, record) => {
				const images = Array.isArray(record.foto_produk) 
					? record.foto_produk 
					: record.foto_produk ? [record.foto_produk] : [];
				
				return (
					<Space size="small">
						{images.slice(0, 3).map((image, index) => (
							<Image
								key={index}
								src={image}
								alt={`${record.nama_produk} ${index + 1}`}
								width={40}
								height={40}
								style={{ objectFit: "cover", borderRadius: 4 }}
							/>
						))}
						{images.length > 3 && (
							<span style={{ fontSize: 12, color: '#666' }}>
								+{images.length - 3}
							</span>
						)}
						{images.length === 0 && <span>No Image</span>}
					</Space>
				);
			},
		},
		{
			title: "Aksi",
			key: "action",
			width: "15%",
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
						onClick={() => handleDeleteProduct(record)}
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
				<h1 className="text-2xl font-bold">Manajemen Produk</h1>
				<Button
					type="primary"
					icon={<PlusOutlined />}
					onClick={handleOpenCreateModal}
					size="large"
				>
					Tambah Produk
				</Button>
			</div>

			<div className="mb-4">
				<Input
					placeholder="Cari produk berdasarkan nama atau kategori..."
					prefix={<SearchOutlined />}
					value={searchText}
					onChange={handleSearch}
					size="large"
				/>
			</div>

			<Table
				columns={columns}
				dataSource={filteredProducts}
				rowKey="id_produk"
				loading={isPendingProducts}
				pagination={{
					pageSize: 10,
					showSizeChanger: true,
					showQuickJumper: true,
					showTotal: (total) => `Total ${total} produk`,
					responsive: true,
				}}
				bordered
				scroll={{ x: 'max-content' }}
				size="middle"
			/>

			<Modal
				title={editingProduct ? "Edit Produk" : "Tambah Produk"}
				open={isModalOpen}
				onCancel={handleCloseModal}
				footer={null}
				width="90%"
				style={{ maxWidth: 600 }}
			>
				<ProductForm product={editingProduct} onCancel={handleCloseModal} onSuccess={handleSuccessForm} />
			</Modal>
		</Card>
	);
};

export default Products;