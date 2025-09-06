"use client";

import React, { useState } from "react";
import { Form, Input, Button, Checkbox, message, Typography, Flex } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

/**
 * LoginForm component - Handles user authentication
 */
const LoginForm: React.FC = () => {
	const [form] = Form.useForm();
	const [rememberMe, setRememberMe] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const router = useRouter();

	// Handle form submission
	const handleSubmit = async (values: { email: string; password: string }) => {
		try {
			setIsLoading(true);
			const result = await signIn("credentials", {
				email: values.email,
				password: values.password,
				redirect: false,
			});

			if (result?.error) {
				message.error(result.error);
			} else if (result?.ok) {
				message.success("Login berhasil!");
				router.push("/dashboard");
			}
		} catch (error) {
			message.error("Gagal login: Terjadi kesalahan pada server");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="w-full max-w-md">
			<Flex vertical>
				<Typography.Title>Welcome back</Typography.Title>
				<Typography.Text className="text-gray-600">
					Masuk untuk mengakses dashboard Stokku
				</Typography.Text>
			</Flex>

			<Form
				form={form}
				name="login"
				layout="vertical"
				initialValues={{ remember: rememberMe }}
				onFinish={handleSubmit}
				autoComplete="off"
			>
				<Form.Item
					label="Email"
					name="email"
					rules={[
						{ required: true, message: "Mohon masukkan email Anda!" },
						{ type: "email", message: "Format email tidak valid!" },
					]}
				>
					<Input
						prefix={<UserOutlined className="text-gray-400" />}
						placeholder="email@company.com"
						size="large"
					/>
				</Form.Item>

				<Form.Item
					label="Kata Sandi"
					name="password"
					rules={[
						{ required: true, message: "Mohon masukkan kata sandi Anda!" },
					]}
				>
					<Input.Password
						prefix={<LockOutlined className="text-gray-400" />}
						placeholder="••••••••"
						size="large"
					/>
				</Form.Item>

				<Form.Item>
					<div className="flex items-center justify-between">
						<Checkbox
							checked={rememberMe}
							onChange={(e) => setRememberMe(e.target.checked)}
						>
							Ingat saya
						</Checkbox>
						<Link
							href="/auth/forgot-password"
							className="text-indigo-600 hover:text-indigo-700"
						>
							Lupa kata sandi?
						</Link>
					</div>
				</Form.Item>

				<Form.Item>
					<Button
						type="primary"
						htmlType="submit"
						className="w-full"
						size="large"
						loading={isLoading}
					>
						Log in
					</Button>
				</Form.Item>
				<div className="text-center mt-6">
					<span className="text-gray-600">
						Belum punya akun?{" "}
						<Link
							href="/auth/register"
							className="text-indigo-600 hover:text-indigo-700"
						>
							Daftar sekarang
						</Link>
					</span>
				</div>
			</Form>
		</div>
	);
};

export default LoginForm;
