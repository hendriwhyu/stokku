"use client";

import React, { useState, ReactNode } from "react";
import { Layout } from "antd";
import { Sidebar, Header } from "@/components";

const { Content } = Layout;

interface DashboardLayoutProps {
	children: ReactNode;
	title: string;
}

/**
 * DashboardLayout component - Main layout for dashboard pages
 *
 * @param {ReactNode} children - The content to render inside the layout
 * @param {string} title - The title to display in the header
 * @returns {React.FC} The DashboardLayout component
 */
const DashboardLayout: React.FC<DashboardLayoutProps> = ({
	children,
	title,
}) => {
	const [collapsed, setCollapsed] = useState(false);

	return (
		<Layout style={{ minHeight: "100vh" }}>
			<Sidebar
				collapsed={collapsed}
				onCollapse={(value) => setCollapsed(value)}
			/>
			<Layout
				style={{ marginLeft: collapsed ? 80 : 256, transition: "all 0.2s" }}
			>
				<Header title={title} />
				<Content
					style={{
						margin: "24px 16px",
						padding: 24,
						background: "#fff",
						borderRadius: 4,
						minHeight: 280,
					}}
				>
					{children}
				</Content>
			</Layout>
		</Layout>
	);
};

export default DashboardLayout;
