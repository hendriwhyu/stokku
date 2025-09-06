"use client";

import React from "react";
import { Result, Button, Typography } from "antd";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

const { Text } = Typography;

/**
 * AuthErrorPage - Displays authentication error messages
 *
 * This page handles various authentication errors including:
 * - Invalid credentials
 * - Account not found
 * - SSO account conflicts
 * - General authentication failures
 */
const AuthErrorPage: React.FC = () => {
	const searchParams = useSearchParams();
	const router = useRouter();

	// Get error details from URL parameters
	const error = searchParams.get("error");
	const errorDescription = searchParams.get("error_description");

	// Map error codes to user-friendly messages
	const getErrorMessage = () => {
		switch (error) {
			case "CredentialsSignin":
				return {
					title: "Login Gagal",
					message:
						"Email atau password yang Anda masukkan salah. Silakan coba lagi.",
				};
			case "AccessDenied":
				return {
					title: "Akses Ditolak",
					message: "Anda tidak memiliki izin untuk mengakses halaman ini.",
				};
			case "Configuration":
				return {
					title: "Kesalahan Konfigurasi",
					message:
						"Terjadi kesalahan pada server. Silakan hubungi administrator.",
				};
			case "Verification":
				return {
					title: "Verifikasi Gagal",
					message: "Token verifikasi tidak valid atau telah kedaluwarsa.",
				};
			default:
				return {
					title: "Terjadi Kesalahan",
					message:
						errorDescription ||
						"Terjadi kesalahan saat proses autentikasi. Silakan coba lagi.",
				};
		}
	};

	const errorMessage = getErrorMessage();

	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="w-full space-y-8">
				<Result
					status="error"
					title={errorMessage.title}
					subTitle={errorMessage.message}
					extra={[
						<Button key="back" onClick={() => router.back()}>
							Kembali
						</Button>,
						<Button key="login" type="primary">
							<Link href="/auth/login">Coba Login Lagi</Link>
						</Button>,
					]}
				/>

				{process.env.NODE_ENV === "development" && (
					<div className="mt-4 p-4 bg-gray-100 rounded-lg">
						<Text type="secondary" className="text-sm">
							<strong>Debug Info:</strong>
							<br />
							Error Code: {error || "N/A"}
						</Text>
					</div>
				)}
			</div>
		</div>
	);
};

export default AuthErrorPage;
