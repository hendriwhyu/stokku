"use client";

import React, { useState } from "react";
import { Card, Typography, Tag, Button, Dropdown, Space, Badge } from "antd";
import {
	MoreOutlined,
	PlusOutlined,
	MinusOutlined,
	ShopOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Product } from "@/types/product";
import Image from "next/image";

const { Text, Title } = Typography;

interface ProductCardProps {
	product: Product;
	onStockAdjustment: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
	product,
	onStockAdjustment,
}) => {

	const getStockStatus = (stock: number) => {
		if (stock === 0) {
			return { color: "red", text: "Habis", status: "error" as const };
		} else if (stock < 10) {
			return {
				color: "orange",
				text: "Stok Menipis",
				status: "warning" as const,
			};
		} else if (stock < 50) {
			return { color: "blue", text: "Normal", status: "processing" as const };
		} else {
			return { color: "green", text: "Stok Bagus", status: "success" as const };
		}
	};

	const stockStatus = getStockStatus(product.stok?.jumlah_barang || 0);

	const formatDate = (date: Date | null) => {
		if (!date) return "Belum ada update";
		return new Date(date).toLocaleDateString("id-ID", {
			day: "numeric",
			month: "short",
			year: "numeric",
		});
	};

	return (
		<Card
			className="relative hover:shadow-lg transition-all duration-200 overflow-hidden group"
		>
			{/* Product Info */}
			<div className="space-y-2">
				<Title level={5} className="mb-1 line-clamp-2" style={{ margin: 0 }}>
					{product.nama_produk}
				</Title>

				<div className="flex justify-between items-center">
					<Text className="text-gray-500 text-sm">{product.kode_produk}</Text>
					<Tag color="blue" className="text-xs">
						{product.kategori.nama_kategori}
					</Tag>
				</div>

				{/* Stock Info */}
				<div className="flex items-center justify-between pt-2 border-t border-gray-100">
					<div className="flex items-center space-x-1">
						<ShopOutlined className="text-gray-400" />
						<Text className="text-sm text-gray-600">Stok:</Text>
					</div>
					<div className="text-right">
						<div className={`text-xl font-bold text-${stockStatus.color}-600`}>
							{product.stok?.jumlah_barang || 0}
						</div>
						<Text className="text-xs text-gray-400">
							Update: {formatDate(product.stok?.tgl_update)}
						</Text>
					</div>
				</div>
			</div>

			<Button
				type="primary"
				size="small"
				className="w-full!"
				onClick={(e) => {
					e.stopPropagation();
					onStockAdjustment(product);
				}}
			>
				Kelola
			</Button>
		</Card>
	);
};

export default ProductCard;
