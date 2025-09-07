"use client";

import React from "react";
import {
	Row,
	Col,
	Input,
	Select,
	Typography,
	Empty,
	Card,
	Statistic,
	Button,
	Space,
} from "antd";
import {
	SearchOutlined,
	ShopOutlined,
	WarningOutlined,
	CheckCircleOutlined,
	FileExcelOutlined,
	FilePdfOutlined,
} from "@ant-design/icons";
import ProductCard from "./ProductCard";
import StockModal from "./StockModal";
import { exportToExcel, exportToPDF } from "@/helpers/utils/export";
import useInventory from "../hooks/useInventory";

const Inventories: React.FC = () => {
	const {
		isModalOpen,
		selectedProduct,
		searchTerm,
		selectedCategory,
		stockFilter,
		categories,
		filteredProducts,
		inventoryStats,
		handleStockAdjustment,
		handleSuccessForm,
		setSearchTerm,
		setSelectedCategory,
		setStockFilter,
	} = useInventory();

	return (
		<Card className="m-4! md:m-6!">
			{/* Header with Statistics */}
			<div className="mb-8">
				<div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
					<div>
						<Typography.Title level={3} className="mb-2">
							Manajemen Stok
						</Typography.Title>
						<Typography.Text className="text-gray-600">
							Kelola stok produk dengan mudah dan efisien
						</Typography.Text>
					</div>
				</div>

				{/* Statistics Cards */}
				<Row gutter={[16, 16]} className="mb-6">
					<Col xs={24} sm={12} md={6}>
						<Card>
							<Statistic
								title="Total Produk"
								value={inventoryStats.totalProducts}
								prefix={<ShopOutlined />}
								valueStyle={{ color: "#1890ff" }}
							/>
						</Card>
					</Col>
					<Col xs={24} sm={12} md={6}>
						<Card>
							<Statistic
								title="Stok Habis"
								value={inventoryStats.outOfStock}
								prefix={<WarningOutlined />}
								valueStyle={{ color: "#f5222d" }}
							/>
						</Card>
					</Col>
					<Col xs={24} sm={12} md={6}>
						<Card>
							<Statistic
								title="Stok Menipis"
								value={inventoryStats.lowStock}
								prefix={<WarningOutlined />}
								valueStyle={{ color: "#fa8c16" }}
							/>
						</Card>
					</Col>
					<Col xs={24} sm={12} md={6}>
						<Card>
							<Statistic
								title="Stok Normal"
								value={inventoryStats.normalStock}
								prefix={<CheckCircleOutlined />}
								valueStyle={{ color: "#52c41a" }}
							/>
						</Card>
					</Col>
				</Row>
			</div>

			{/* Filters */}
			<Card className="mb-6">
				<Row gutter={[16, 16]} align="middle">
					<Col xs={24} sm={12} md={8}>
						<Input
							placeholder="Cari produk, kode, atau kategori..."
							prefix={<SearchOutlined />}
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							allowClear
							size="large"
							className="w-full"
						/>
					</Col>
					<Col xs={24} sm={12} md={4}>
						<Select
							placeholder="Pilih Kategori"
							value={selectedCategory}
							onChange={setSelectedCategory}
							size="large"
							className="w-full"
						>
							<Select.Option value="all">Semua Kategori</Select.Option>
							{categories?.map((category) => (
								<Select.Option
									key={category.id_kategori}
									value={category.id_kategori}
								>
									{category.nama_kategori}
								</Select.Option>
							))}
						</Select>
					</Col>
					<Col xs={24} sm={12} md={4}>
						<Select
							placeholder="Filter Stok"
							value={stockFilter}
							onChange={setStockFilter}
							size="large"
							className="w-full"
						>
							<Select.Option value="all">Semua Stok</Select.Option>
							<Select.Option value="out_of_stock">Stok Habis</Select.Option>
							<Select.Option value="low_stock">
								Stok Menipis (&lt;10)
							</Select.Option>
							<Select.Option value="normal_stock">
								Stok Normal (≥10)
							</Select.Option>
						</Select>
					</Col>
					<Col xs={24} sm={24} md={8}>
						<div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4">
							<Typography.Text className="text-gray-600 order-2 sm:order-1">
								Menampilkan {filteredProducts.length} produk
							</Typography.Text>
							<div className="flex flex-wrap gap-2 order-1 sm:order-2">
								<Button
									type="primary"
									icon={<FileExcelOutlined />}
									onClick={() =>
										exportToExcel(filteredProducts, inventoryStats)
									}
									size="middle"
								>
									Export Excel
								</Button>
								<Button
									type="primary"
									danger
									icon={<FilePdfOutlined />}
									onClick={() => exportToPDF(filteredProducts, inventoryStats)}
									size="middle"
								>
									Export PDF
								</Button>
							</div>
						</div>
					</Col>
				</Row>
			</Card>

			{/* Products Grid */}
			{filteredProducts.length === 0 ? (
				<Empty
					description="Tidak ada produk yang sesuai dengan filter"
					image={Empty.PRESENTED_IMAGE_SIMPLE}
					className="py-8"
				/>
			) : (
				<Row gutter={[16, 16]} className="mt-6">
					{filteredProducts.map((product) => (
						<Col key={product.id_produk} xs={24} sm={12} lg={8}>
							<ProductCard
								product={product}
								onStockAdjustment={handleStockAdjustment}
							/>
						</Col>
					))}
				</Row>
			)}

			{/* Stock Adjustment Modal */}
			<StockModal
				isOpen={isModalOpen}
				onClose={handleSuccessForm}
				product={selectedProduct}
			/>
		</Card>
	);
};

export default Inventories;
