"use client";

import React, { ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";
import { BookOutlined } from "@ant-design/icons";

type AuthLayoutProps = {
	children: ReactNode;
	title: string;
	description?: string;
};

/**
 * AuthLayout - Fullscreen split layout for authentication pages
 * Left: form content (children)
 * Right: promo/hero panel (hidden on small screens)
 */
const AuthLayout: React.FC<AuthLayoutProps> = ({
	children,
	title,
	description = "Stokku - Sistem Manajemen Inventaris Buku",
}) => {
	return (
		<>
			<Head>
				<title>{title} | Stokku</title>
				<meta name="description" content={description} />
			</Head>

			{/* Split screen layout */}
			<div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2">
				{/* Left: Form area */}
				<section className="flex flex-col items-center justify-center px-6 py-10 sm:px-8">
					<div className="absolute top-6 left-6 lg:left-8 flex items-center">
						<Link href="/">
							<div className="flex items-center cursor-pointer">
								<BookOutlined
									style={{
										fontSize: "24px",
										color: "#1890ff",
										marginRight: "8px",
									}}
								/>
								<span className="text-lg font-bold">Stokku</span>
							</div>
						</Link>
					</div>
					<div className="w-full max-w-md">{children}</div>
				</section>

				{/* Right: Hero / promotional panel */}
				<aside className="relative hidden lg:flex items-center justify-center overflow-hidden m-10 rounded-4xl">
					{/* Background gradient */}
					<div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600" />

					{/* Decorative circles */}
					<div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
					<div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" />

					{/* Content */}
					<div className="relative z-10 max-w-xl px-10 text-white">
						<h2 className="text-3xl xl:text-4xl font-semibold leading-snug">
							Kelola stok dan operasional toko anda dengan lebih mudah.
						</h2>
						<p className="mt-4 text-white/80">
							Masuk untuk mengakses dashboard, memantau performa penjualan, dan
							menyederhanakan manajemen inventaris.
						</p>

						{/* Mocked dashboard preview cards */}
						<div className="mt-10 grid grid-cols-2 gap-4">
							<div className="rounded-xl bg-white/15 p-4 backdrop-blur-md">
								<p className="text-sm text-white/80">Total Penjualan</p>
								<p className="mt-2 text-2xl font-bold">$189,374</p>
								<div className="mt-3 h-16 rounded-md bg-white/20" />
							</div>
							<div className="rounded-xl bg-white/15 p-4 backdrop-blur-md">
								<p className="text-sm text-white/80">Produk Terjual</p>
								<p className="mt-2 text-2xl font-bold">6,248</p>
								<div className="mt-3 h-16 rounded-md bg-white/20" />
							</div>
						</div>
					</div>
				</aside>
			</div>
		</>
	);
};

export default AuthLayout;
