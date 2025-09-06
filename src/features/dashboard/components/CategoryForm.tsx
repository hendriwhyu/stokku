"use client";

import { useState } from "react";
import { Form, Input, Button, message } from "antd";
import {
	useFetchCreateCategory,
	useFetchUpdateCategory,
} from "@/services/categories";
import type { Category } from "@/types/category";

interface CategoryFormProps {
	category: Category | null;
	onSuccess: () => void;
	onCancel: () => void;
}

const CategoryForm = ({ category, onSuccess, onCancel }: CategoryFormProps) => {
	const [form] = Form.useForm();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const { mutateCreateCategory, isPendingCreateCategory } =
		useFetchCreateCategory();
	const { mutateUpdateCategory, isPendingUpdateCategory } =
		useFetchUpdateCategory();

	const isLoading =
		isPendingCreateCategory || isPendingUpdateCategory || isSubmitting;

	const handleSubmit = async (values: Category) => {
		try {
			setIsSubmitting(true);

			if (category) {
				await mutateUpdateCategory({
					id: category.id_kategori,
					body: values,
				});
			} else {
				await mutateCreateCategory(values);
			}

			onSuccess();
		} catch (error) {
			message.error("Gagal menyimpan kategori");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<Form
			form={form}
			layout="vertical"
			initialValues={
				category
					? { nama_kategori: category.nama_kategori }
					: { nama_kategori: "" }
			}
			onFinish={handleSubmit}
		>
			<Form.Item
				name="nama_kategori"
				label="Nama Kategori"
				rules={[
					{ required: true, message: "Nama kategori tidak boleh kosong" },
					{ max: 200, message: "Nama kategori maksimal 200 karakter" },
				]}
			>
				<Input placeholder="Masukkan nama kategori" />
			</Form.Item>

			<div className="flex justify-end gap-2 mt-4">
				<Button onClick={onCancel}>Batal</Button>
				<Button type="primary" htmlType="submit" loading={isLoading}>
					{category ? "Perbarui" : "Simpan"}
				</Button>
			</div>
		</Form>
	);
};

export default CategoryForm;
