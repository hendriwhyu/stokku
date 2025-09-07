"use client";

import React, { useState, useEffect } from "react";
import {
	Modal,
	Form,
	Input,
	Button,
	message,
	Typography,
	Space,
	Alert,
	InputNumber,
} from "antd";
import { useStockAdjustment } from "@/services/inventories";
import { Product } from "@/types/product";
import Image from "next/image";

const { Title, Text } = Typography;

interface StockModalProps {
	isOpen: boolean;
	onClose: () => void;
	product: Product | null;
}

const StockModal: React.FC<StockModalProps> = ({
	isOpen,
	onClose,
	product,
}) => {
	const [form] = Form.useForm();
	const { adjustStock, isAdjusting } = useStockAdjustment();

	useEffect(() => {
		if (!isOpen) {
			form.resetFields();
		} else if (product) {
			const currentStock = product.stok?.jumlah_barang || 0;
			form.setFieldValue("jumlah_barang", currentStock);
		}
	}, [isOpen, form, product]);

	const handleSubmit = async (values: { jumlah_barang: number }) => {
		if (!product) {
			message.error("Data produk tidak valid");
			return;
		}

		try {
			await adjustStock({
				id_produk: product.id_produk,
				jumlah_barang: values.jumlah_barang,
			});

			message.success("Stok berhasil diperbarui");
			onClose();
		} catch (error) {
			message.error("Gagal memperbarui stok");
		}
	};

	const getModalTitle = () => {
		return "Edit Stok Produk";
	};

	const getActionColor = () => {
		return "#1890ff";
	};

	const renderStockInfo = () => {
		if (!product) return null;

		return (
			<div className="mb-6 p-4 bg-gray-50 rounded-lg">
				<div>
					<Text className="text-gray-600 mb-2">Stok Saat Ini:</Text>
					<div className="text-3xl font-semibold text-blue-600">
						{product.stok.jumlah_barang}
					</div>
				</div>
			</div>
		);
	};

	return (
		<Modal
			title={
				<Title level={4} style={{ margin: 0, color: getActionColor() }}>
					{getModalTitle()}
				</Title>
			}
			open={isOpen}
			onCancel={onClose}
			footer={null}
			width={500}
		>
			{product && (
				<div className="mb-4">
					<div className="flex items-center space-x-3">
						{(() => {
							const images = Array.isArray(product.foto_produk)
								? product.foto_produk
								: [product.foto_produk];
							const validImages = images.filter(
								(img) => img && img.trim() !== ""
							);
							const displayImage =
								validImages.length > 0
									? validImages[0]
									: "https://placehold.co/600x400";

							return (
								<Image
									src={`${displayImage}`}
									alt={product.nama_produk}
									className="w-12 h-12 object-cover rounded-lg"
									width={48}
									height={48}
								/>
							);
						})()}
						<div>
							<Text strong className="text-lg">
								{product.nama_produk}
							</Text>
							<div className="text-gray-500">
								{product.kode_produk} • {product.kategori.nama_kategori}
							</div>
						</div>
					</div>
				</div>
			)}

			{renderStockInfo()}

			<Form
				form={form}
				layout="vertical"
				onFinish={handleSubmit}
				autoComplete="off"
			>
				<Form.Item
					name="jumlah_barang"
					label="Jumlah Barang"
					rules={[
						{ required: true, message: "Masukkan jumlah barang!" },
						{ type: "number", min: 0, message: "Jumlah harus angka positif!" },
					]}
				>
					<InputNumber
						placeholder="Masukkan jumlah"
						min={0}
						size="large"
						className="w-full!"
					/>
				</Form.Item>

				<Form.Item className="mb-0 flex justify-end">
					<Space>
						<Button onClick={onClose} disabled={isAdjusting}>
							Batal
						</Button>
						<Button
							type="primary"
							htmlType="submit"
							loading={isAdjusting}
							style={{ backgroundColor: getActionColor() }}
						>
							Simpan
						</Button>
					</Space>
				</Form.Item>
			</Form>
		</Modal>
	);
};

export default StockModal;
