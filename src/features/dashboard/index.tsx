"use client";
import React from "react";
import { Row, Col, Typography, Table, Card } from "antd";
import {
	BookOutlined,
	ShoppingCartOutlined,
	TeamOutlined,
	DollarOutlined,
} from "@ant-design/icons";
import { StatCard } from "./components";
import { Content } from "antd/es/layout/layout";

const { Title } = Typography;

/**
 * Dashboard component - Main dashboard page
 *
 * @returns {React.FC} The Dashboard component
 */
const Dashboard: React.FC = () => {
	// Mock data for recent books
	const recentBooks = [
		{
			key: "1",
			title: "Harry Potter and the Philosopher's Stone",
			author: "J.K. Rowling",
			category: "Fiksi",
			stock: 15,
		},
		{
			key: "2",
			title: "To Kill a Mockingbird",
			author: "Harper Lee",
			category: "Fiksi Klasik",
			stock: 8,
		},
		{
			key: "3",
			title: "The Hobbit",
			author: "J.R.R. Tolkien",
			category: "Fantasi",
			stock: 12,
		},
		{
			key: "4",
			title: "Atomic Habits",
			author: "James Clear",
			category: "Pengembangan Diri",
			stock: 20,
		},
	];

	// Table columns for recent books
	const columns = [
		{
			title: "Judul Buku",
			dataIndex: "title",
			key: "title",
		},
		{
			title: "Penulis",
			dataIndex: "author",
			key: "author",
		},
		{
			title: "Kategori",
			dataIndex: "category",
			key: "category",
		},
		{
			title: "Stok",
			dataIndex: "stock",
			key: "stock",
		},
	];

	return (
		<Content className="p-6">
			{/* Stats Cards */}
			<Row gutter={[16, 16]} className="mb-6">
				<Col xs={24} sm={12} lg={6}>
					<StatCard
						title="Total Buku"
						value={1250}
						prefix={<BookOutlined />}
						change={5.2}
					/>
				</Col>
				<Col xs={24} sm={12} lg={6}>
					<StatCard
						title="Pesanan Baru"
						value={48}
						prefix={<ShoppingCartOutlined />}
						change={-2.5}
					/>
				</Col>
				<Col xs={24} sm={12} lg={6}>
					<StatCard
						title="Pelanggan"
						value={642}
						prefix={<TeamOutlined />}
						change={12.3}
					/>
				</Col>
				<Col xs={24} sm={12} lg={6}>
					<StatCard
						title="Pendapatan"
						value={15750000}
						prefix={<DollarOutlined />}
						suffix="Rp"
						change={8.1}
					/>
				</Col>
			</Row>

			{/* Recent Books */}
			<Card className="mb-6">
				<Title level={5} className="mb-4">
					Buku Terbaru
				</Title>
				<Table
					dataSource={recentBooks}
					columns={columns}
					pagination={false}
					size="small"
				/>
			</Card>

			{/* Additional Dashboard Content */}
			<Row gutter={[16, 16]}>
				<Col xs={24} lg={12}>
					<Card title="Kategori Buku Terpopuler">
						<p>Grafik kategori buku terpopuler akan ditampilkan di sini</p>
					</Card>
				</Col>
				<Col xs={24} lg={12}>
					<Card title="Penjualan Bulanan">
						<p>Grafik penjualan bulanan akan ditampilkan di sini</p>
					</Card>
				</Col>
			</Row>
		</Content>
	);
};

export default Dashboard;
