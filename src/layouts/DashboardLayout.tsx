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

	const onCollapsed = () => {
		setCollapsed(!collapsed);
	}

	return (
		<Layout style={{ minHeight: "100vh" }}>
			<Sidebar
				collapsed={collapsed}
			/>
			<Layout
				style={{ marginLeft: collapsed ? 80 : 256, transition: "all 0.2s" }}
			>
				<Header
					collapsed={collapsed}
					onCollapsed={onCollapsed}
					title={title}
				/>
				<Content>{children}</Content>
			</Layout>
		</Layout>
	);
};

export default DashboardLayout;
