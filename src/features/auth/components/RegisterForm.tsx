"use client";

import React, { useState } from "react";
import {
	Form,
	Input,
	Button,
	Checkbox,
	message,
	Typography,
	Flex,
} from "antd";
import {
	UserOutlined,
	LockOutlined,
	MailOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFetchRegister } from "@/services/auth";
import { IRequestRegister } from "@/types/auth";

/**
 * RegisterForm component - Handles user registration
 */
const RegisterForm: React.FC = () => {
	const [form] = Form.useForm();
	const [agreeTerms, setAgreeTerms] = useState(false);

	const router = useRouter();

	const { mutateRegister, isPendingRegister } = useFetchRegister();

	// Handle form submission
	const handleSubmit = async (values: IRequestRegister) => {
		if (!agreeTerms) {
			message.error("Anda harus menyetujui syarat dan ketentuan");
			return;
		}
		try {
			await mutateRegister(values);
			message.success("Berhasil mendaftar");
			form.resetFields();
			setAgreeTerms(false);

			setTimeout(() => {
				router.push("/auth/login");
			}, 1500);
		} catch (error: any) {
			message.error("Gagal mendaftar: Terjadi kesalahan pada server");
			console.error("Registration error:", error);
		}
	};

	return (
		<div className="w-full max-w-md">
			<Flex vertical>
				<Typography.Title>Buat akun</Typography.Title>
				<Typography.Text>Daftar untuk mulai memakai Stokku</Typography.Text>
			</Flex>

			<Form
				form={form}
				name="register"
				layout="vertical"
				onFinish={handleSubmit}
				autoComplete="off"
			>
				<Form.Item
					label="Nama Lengkap"
					name="name"
					rules={[
						{ required: true, message: "Mohon masukkan nama Anda!" },
						{ min: 3, message: "Nama minimal 3 karakter!" },
					]}
				>
					<Input
						prefix={<UserOutlined className="text-gray-400" />}
						placeholder="Nama lengkap"
						size="large"
					/>
				</Form.Item>

				<Form.Item
					label="Email"
					name="email"
					rules={[
						{ required: true, message: "Mohon masukkan email Anda!" },
						{ type: "email", message: "Format email tidak valid!" },
					]}
				>
					<Input
						prefix={<MailOutlined className="text-gray-400" />}
						placeholder="email@company.com"
						size="large"
					/>
				</Form.Item>

				<Form.Item
					label="Kata Sandi"
					name="password"
					rules={[
						{ required: true, message: "Mohon masukkan kata sandi Anda!" },
						{ min: 8, message: "Kata sandi minimal 8 karakter!" },
						{
							pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
							message:
								"Kata sandi harus mengandung huruf besar, huruf kecil, dan angka!",
						},
					]}
				>
					<Input.Password
						prefix={<LockOutlined className="text-gray-400" />}
						placeholder="••••••••"
						size="large"
					/>
				</Form.Item>

				<Form.Item
					label="Konfirmasi Kata Sandi"
					name="confirmPassword"
					dependencies={["password"]}
					rules={[
						{ required: true, message: "Mohon konfirmasi kata sandi Anda!" },
						({ getFieldValue }) => ({
							validator(_, value) {
								if (!value || getFieldValue("password") === value) {
									return Promise.resolve();
								}
								return Promise.reject(
									new Error("Konfirmasi kata sandi tidak cocok!")
								);
							},
						}),
					]}
				>
					<Input.Password
						prefix={<LockOutlined className="text-gray-400" />}
						placeholder="••••••••"
						size="large"
					/>
				</Form.Item>

				<Form.Item>
					<Checkbox
						checked={agreeTerms}
						onChange={(e) => setAgreeTerms(e.target.checked)}
					>
						Saya menyetujui{" "}
						<Link
							href="#"
							className="text-indigo-600 hover:text-indigo-700"
						>
							syarat dan ketentuan
						</Link>
					</Checkbox>
				</Form.Item>

				<Form.Item>
					<Button
						type="primary"
						htmlType="submit"
						className="w-full"
						size="large"
						loading={isPendingRegister}
						disabled={!agreeTerms}
					>
						Daftar
					</Button>
				</Form.Item>
				<div className="text-center mt-6">
					<span className="text-gray-600">
						Sudah punya akun?{" "}
						<Link
							href="/auth/login"
							className="text-indigo-600 hover:text-indigo-700"
						>
							Masuk
						</Link>
					</span>
				</div>
			</Form>
		</div>
	);
};

export default RegisterForm;
