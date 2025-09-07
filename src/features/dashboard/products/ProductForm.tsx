"use client";

import { useState, useEffect } from "react";
import { Form, Input, Button, Select, message } from "antd";
import { CloseOutlined, InboxOutlined, PlusOutlined } from "@ant-design/icons";
import type { Product } from "@/types/product";
import useProducts from "../hooks/useProducts";
import { useFetchListCategories } from "@/services/categories";
import { RcFile, UploadFile } from "antd/es/upload";
import { Category } from "@/types/category";
import Dragger from "antd/es/upload/Dragger";
import Image from "next/image";
import {
	useFetchCreateProduct,
	useFetchUpdateProduct,
} from "@/services/products";

interface ProductFormProps {
	product: Product | null;
	onCancel: () => void;
	onSuccess: () => void;
}

const UploadButton = () => {
	return (
		<div>
			<p className="ant-upload-drag-icon">
				<InboxOutlined />
			</p>
			<p className="ant-upload-text">
				Click or drag file to this area to upload
			</p>
			<p className="ant-upload-hint">
				Support for a single or bulk upload. Strictly prohibited from uploading
				company data or other banned files.
			</p>
		</div>
	);
};

const ProductForm = ({ product, onCancel, onSuccess }: ProductFormProps) => {
	const { form, isLoading, fileList, setFileList, getBase64 } = useProducts();
	const { dataCategories: categories } = useFetchListCategories();

	const { mutateCreateProduct } = useFetchCreateProduct();
	const { mutateUpdateProduct } = useFetchUpdateProduct();

	const [previewImage, setPreviewImage] = useState<string>("");
	const [previewOpen, setPreviewOpen] = useState<boolean>(false);
	const [previewTitle, setPreviewTitle] = useState<string>("");

	useEffect(() => {
		if (product) {
			form.setFieldsValue({
				nama_produk: product.nama_produk,
				id_kategori: product.id_kategori,
				kode_produk: product.kode_produk,
			});

			// Set file list from existing images
			let existingUrls: string[] = [];
			if (product.foto_produk && Array.isArray(product.foto_produk)) {
				existingUrls = product.foto_produk;
			} else if (product?.foto_produk) {
				existingUrls = [product.foto_produk as string];
			}

			if (existingUrls.length > 0) {
				const existingFiles = existingUrls.map(
					(url: string, index: number) => ({
						uid: `image-${index}`,
						name: `image-${index + 1}`,
						status: "done",
						url: url,
					})
				);
				setFileList(existingFiles as UploadFile[]);
			}
		} else {
			form.resetFields();
			setFileList([]);
		}
	}, [product, form]);

	const handlePreview = async (file: UploadFile) => {
		if (!file.url && !file.preview) {
			file.preview = await getBase64(file.originFileObj as RcFile);
		}

		setPreviewImage(file.url || (file.preview as string));
		setPreviewOpen(true);
		setPreviewTitle(
			file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1)
		);
	};

	const handleFileChange = ({ fileList }: { fileList: any[] }) => {
		setFileList(fileList);
	};

	const handleCancel = () => setPreviewOpen(false);

	const handleSubmit = async (formValues: {
		nama_produk: string;
		id_kategori: number;
		kode_produk: string;
		jumlah_barang?: number;
	}) => {
		try {
			const newFiles = fileList.filter((file) => file.originFileObj);
			const foto_produk_files: File[] = newFiles.map(
				(f) => f.originFileObj as File
			);

			// Collect existing images that remain (URLs from existing files)
			const existingImages = fileList
				.filter((file) => file.url && !file.originFileObj)
				.map((file) => file.url!);

			if (product) {
				const updatePayload: any = { ...formValues };
				updatePayload.foto_produk = foto_produk_files;
				updatePayload.existing_image_produk = existingImages;

				await mutateUpdateProduct({
					id: product.id_produk,
					body: updatePayload,
				});
			} else {
				// Create new product
				const createPayload: any = { ...formValues, tgl_register: new Date() };
				createPayload.foto_produk = foto_produk_files;

				await mutateCreateProduct(createPayload);
			}

			message.success(
				product ? "Produk berhasil diperbarui" : "Produk berhasil ditambahkan"
			);
			onSuccess();
		} catch (error) {
			console.log(error);
			message.error("Gagal menyimpan produk");
		}
	};

	return (
		<Form
			form={form}
			layout="vertical"
			initialValues={{
				nama_produk: product?.nama_produk || "",
				id_kategori: product?.id_kategori || undefined,
				kode_produk: product?.kode_produk || "",
			}}
			onFinish={handleSubmit}
		>
			<Form.Item
				name="nama_produk"
				label="Nama Produk"
				rules={[
					{ required: true, message: "Nama produk tidak boleh kosong" },
					{ max: 200, message: "Nama produk maksimal 200 karakter" },
				]}
			>
				<Input placeholder="Masukkan nama produk" />
			</Form.Item>

			<Form.Item
				name="id_kategori"
				label="Kategori"
				rules={[{ required: true, message: "Kategori tidak boleh kosong" }]}
			>
				<Select placeholder="Pilih kategori">
					{categories?.map((category: Category) => (
						<Select.Option
							key={category.id_kategori}
							value={category.id_kategori}
						>
							{category.nama_kategori}
						</Select.Option>
					))}
				</Select>
			</Form.Item>

			<Form.Item
				name="kode_produk"
				label="Kode Produk"
				rules={[
					{ required: true, message: "Kode produk tidak boleh kosong" },
					{ max: 50, message: "Kode produk maksimal 50 karakter" },
				]}
			>
				<Input placeholder="Masukkan kode produk" />
			</Form.Item>

			<Form.Item
				name="foto_produk"
				label="Foto Produk"
				rules={[
					{ required: !product, message: "Foto produk tidak boleh kosong" },
				]}
			>
				<Dragger
					listType="picture-card"
					fileList={fileList}
					onPreview={handlePreview}
					onChange={handleFileChange}
					maxCount={3}
					multiple
				>
					<UploadButton />
				</Dragger>
			</Form.Item>

			{/* Image Preview Modal */}
			{previewOpen && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
					<div className="bg-white p-4 rounded-lg max-w-3xl">
						<div className="flex justify-between items-center mb-4">
							<h3 className="text-lg">{previewTitle}</h3>
							<Button onClick={handleCancel}>
								<CloseOutlined />
							</Button>
						</div>
						<Image
							alt="Preview"
							style={{ maxWidth: "100%" }}
							width={500}
							height={500}
							src={previewImage}
						/>
					</div>
				</div>
			)}

			<div className="flex justify-end gap-2 mt-4">
				<Button onClick={onCancel}>Batal</Button>
				<Button type="primary" htmlType="submit" loading={isLoading}>
					{product ? "Perbarui" : "Simpan"}
				</Button>
			</div>
		</Form>
	);
};

export default ProductForm;
