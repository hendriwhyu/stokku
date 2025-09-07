"use client";
import React from "react";
import { Row, Col, Typography, Table, Card, Statistic, Space } from "antd";
import {
	BookOutlined,
	ExclamationCircleOutlined,
	WarningOutlined,
	CheckCircleOutlined,
	FolderOutlined,
} from "@ant-design/icons";
import { Content } from "antd/es/layout/layout";
import useInventory from "./hooks/useInventory";
import { ColumnType } from "antd/es/table";
import { Product } from "@/types/product";

const { Title } = Typography;

/**
 * Dashboard component - Displays inventory statistics and product/category tables
 * 
 * @returns {React.FC} The Dashboard component
 */
const Dashboard: React.FC = () => {
	const {
		dataProducts,
		isPendingProducts,
		categories,
		inventoryStats,
	} = useInventory();

	// Product table columns (16 columns total)
	const productColumns = [
		{
			title: "Kode",
			dataIndex: "kode_produk",
			key: "kode_produk",
			width: 80,
			fixed: "left" as const,
		},
		{
			title: "Nama Produk",
			dataIndex: "nama_produk",
			key: "nama_produk",
			width: 150,
			fixed: "left" as const,
		},
		{
			title: "Kategori",
			dataIndex: ["kategori", "nama_kategori"],
			key: "kategori",
			width: 100,
		},
		{
			title: "Stok",
			dataIndex: ["stok", "jumlah_barang"],
			key: "stok",
			width: 70,
			render: (value: number) => (
				<span className={value === 0 ? "text-red-500" : value < 10 ? "text-orange-500" : "text-green-500"}>
					{value || 0}
				</span>
			),
		},
		{
			title: "Status",
			key: "status",
			width: 80,
			render: (_: any, record: any) => {
				const stok = record.stok?.jumlah_barang || 0;
				return (
					<span className={
						stok === 0 ? "text-red-500" : 
						stok < 10 ? "text-orange-500" : 
						"text-green-500"
					}>
						{stok === 0 ? "Habis" : stok < 10 ? "Rendah" : "Normal"}
					</span>
				);
			},
		},
		{
			title: "Dibuat",
			dataIndex: "tgl_register",
			key: "tgl_register",
			width: 100,
			render: (value: string) => new Date(value).toLocaleDateString('id-ID'),
		},
		{
			title: "Diupdate",
			dataIndex: ["stok", "tgl_update"],
			key: ["stok", "tgl_update"],
			width: 100,
			render: (value: string) => new Date(value).toLocaleDateString('id-ID'),
		},
	];

	// Category table columns (8 columns)
	const categoryColumns = [
		{
			title: "ID",
			dataIndex: "id_kategori",
			key: "id_kategori",
			width: 50,
		},
		{
			title: "Nama Kategori",
			dataIndex: "nama_kategori",
			key: "nama_kategori",
			width: 120,
		},
		{
			title: "Jumlah Produk",
			key: "jumlah_produk",
			width: 80,
			render: (_: any, category: any) => {
				const count = dataProducts?.filter(p => p.id_kategori === category.id_kategori).length || 0;
				return count;
			},
		},
		{
			title: "Stok Total",
			key: "stok_total",
			width: 80,
			render: (_: any, category: any) => {
				const productsInCategory = dataProducts?.filter(p => p.id_kategori === category.id_kategori);
				const totalStock = productsInCategory?.reduce((sum, p) => sum + (p.stok?.jumlah_barang || 0), 0) || 0;
				return totalStock;
			},
		},
	];

	return (
		<Content className="p-4 md:p-6">
			{/* Inventory Statistics */}
			<Title level={4} className="mb-4">
				Statistik Inventaris
			</Title>
			
			<Row gutter={[16, 16]} className="mb-6">
				<Col xs={24} sm={12} lg={6}>
					<Card>
						<Statistic
							title="Total Produk"
							value={inventoryStats.totalProducts}
							prefix={<BookOutlined className="text-blue-500" />}
							valueStyle={{ color: '#3f8600' }}
						/>
					</Card>
				</Col>
				<Col xs={24} sm={12} lg={6}>
					<Card>
						<Statistic
							title="Stok Habis"
							value={inventoryStats.outOfStock}
							prefix={<ExclamationCircleOutlined className="text-red-500" />}
							valueStyle={{ color: '#cf1322' }}
						/>
					</Card>
				</Col>
				<Col xs={24} sm={12} lg={6}>
					<Card>
						<Statistic
							title="Stok Rendah"
							value={inventoryStats.lowStock}
							prefix={<WarningOutlined className="text-orange-500" />}
							valueStyle={{ color: '#fa8c16' }}
						/>
					</Card>
				</Col>
				<Col xs={24} sm={12} lg={6}>
					<Card>
						<Statistic
							title="Stok Normal"
							value={inventoryStats.normalStock}
							prefix={<CheckCircleOutlined className="text-green-500" />}
							valueStyle={{ color: '#52c41a' }}
						/>
					</Card>
				</Col>
			</Row>

			{/* Products and Categories Tables */}
			<Row gutter={[16, 16]}>
				{/* Products Table - 16 columns (2/3 width) */}
				<Col xs={24} xl={16}>
					<Card 
						title={
							<Space>
								<BookOutlined />
								Daftar Produk
							</Space>
						}
						className="h-full"
					>
						<Table
							dataSource={dataProducts || []}
							columns={productColumns as ColumnType<Product>[]}
							loading={isPendingProducts}
							scroll={{ x: 1200 }}
							pagination={{
								pageSize: 10,
								showSizeChanger: true,
								showTotal: (total) => `Total ${total} produk`,
							}}
							rowKey="id_produk"
							size="small"
						/>
					</Card>
				</Col>

				{/* Categories Table - 8 columns (1/3 width) */}
				<Col xs={24} xl={8}>
					<Card 
						title={
							<Space>
								<FolderOutlined />
								Daftar Kategori
							</Space>
						}
						className="h-full"
					>
						<Table
							dataSource={categories || []}
							columns={categoryColumns}
							scroll={{ x: 600 }}
							pagination={{
								pageSize: 10,
								showSizeChanger: true,
								showTotal: (total) => `Total ${total} kategori`,
							}}
							rowKey="id_kategori"
							size="small"
						/>
					</Card>
				</Col>
			</Row>
		</Content>
	);
};

export default Dashboard;
