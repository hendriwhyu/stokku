import React from "react";
import { Layout, Menu } from "antd";
import {
	DashboardOutlined,
	BookOutlined,
	FileTextOutlined,
  HddOutlined,
  ProductOutlined,
} from "@ant-design/icons";
import { usePathname, useRouter } from "next/navigation";

const { Sider } = Layout;

interface SidebarProps {
	collapsed: boolean;
}

/**
 * Sidebar component for the dashboard layout
 *
 * @param {boolean} collapsed - Whether the sidebar is collapsed
 * @param {function} onCollapse - Function to handle sidebar collapse state
 * @returns {React.FC} The Sidebar component
 */
const Sidebar: React.FC<SidebarProps> = ({ collapsed }) => {
	const pathname = usePathname();

	const router = useRouter();

	const selectedKey = pathname.split("/").pop() || "dashboard";

	const menuItems = [
		{
			key: "dashboard",
			icon: <DashboardOutlined />,
			label: "Dashboard",
			onClick: () => router.push("/dashboard"),
		},
		{
			key: "categories",
			icon: <FileTextOutlined />,
			label: "Categories",
			onClick: () => router.push("/dashboard/categories"),
		},
		{
			key: "products",
			icon: <ProductOutlined />,
			label: "Products",
			onClick: () => router.push("/dashboard/products"),
		},
		{
			key: "inventories",
			icon: <HddOutlined />,
			label: "Inventories",
			onClick: () => router.push("/dashboard/inventories"),
		},
	];

	return (
		<Sider
			collapsed={collapsed}
			width={256}
			style={{
				overflow: "auto",
				height: "100vh",
				position: "fixed",
				left: 0,
				top: 0,
				bottom: 0,
				zIndex: 10,
			}}
			theme="dark"
		>
			<div className="logo p-4 flex items-center justify-center">
				<BookOutlined style={{ fontSize: "24px", color: "#1890ff" }} />
				{!collapsed && (
					<span className="ml-2 text-white font-bold text-lg">Stokku</span>
				)}
			</div>
			<Menu
				theme="dark"
				mode="inline"
				selectedKeys={[selectedKey]}
				items={menuItems}
			/>
		</Sider>
	);
};

export default Sidebar;
