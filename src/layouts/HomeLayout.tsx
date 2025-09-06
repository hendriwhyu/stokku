"use client";

import React, { ReactNode } from "react";
import Head from "next/head";
import { Layout } from "antd";
import { Footer, Navbar } from "@/components";

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
const HomeLayout: React.FC<AuthLayoutProps> = ({
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
			<Layout className="min-h-screen">
				<Navbar />
				<main>{children}</main>
				<Footer />
			</Layout>
		</>
	);
};

export default HomeLayout;
