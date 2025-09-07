"use client";

import { useState, useEffect } from "react";
import { Form, Input, Button, message } from "antd";
import {
	useFetchCreateCategory,
	useFetchUpdateCategory,
} from "@/services/categories";
import type { Category } from "@/types/category";
import useCategories from "../hooks/useCategories";

interface CategoryFormProps {
	category: Category | null;
	onCancel: () => void;
	onSuccess: () => void;
}

const CategoryForm = ({ category, onCancel, onSuccess }: CategoryFormProps) => {
	const { form } = useCategories();
	const { mutateCreateCategory, isPendingCreateCategory } =
		useFetchCreateCategory();
	const { mutateUpdateCategory, isPendingUpdateCategory } =
		useFetchUpdateCategory();

	const handleSubmit = async (value: Category) => {
		try {
			if (category) {
				await mutateUpdateCategory({
					id: category.id_kategori,
					body: value,
				});
			} else {
				await mutateCreateCategory(value);
			}

			onSuccess();
		} catch (error) {
			message.error("Gagal menyimpan kategori");
		}
	};

	const isLoading =
		isPendingCreateCategory || isPendingUpdateCategory;

	useEffect(() => {
		if (category) {
			form.setFieldsValue({ nama_kategori: category.nama_kategori });
		} else {
			form.resetFields();
		}
	}, [category, form]);

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
