import React from "react";
import { Layout, Typography, Avatar, Dropdown, Space, Modal, Flex, Button } from "antd";
import {
	UserOutlined,
	SettingOutlined,
	LogoutOutlined,
	MenuUnfoldOutlined,
	MenuFoldOutlined,
} from "@ant-design/icons";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const { Header: AntHeader } = Layout;
const { Title } = Typography;

interface HeaderProps {
	title: string;
	collapsed: boolean;
	onCollapsed: () => void;
}

/**
 * Header component for the dashboard layout
 *
 * @param {string} title - The title to display in the header
 * @param {function} toggleSidebar - Function to toggle sidebar visibility on mobile
 * @returns {React.FC} The Header component
 */
const Header: React.FC<HeaderProps> = ({ title, collapsed, onCollapsed }) => {
	const { data: session } = useSession();
	const router = useRouter();

	const userMenuItems = [
		{
			key: "logout",
			label: "Keluar",
			icon: <LogoutOutlined />,
			onClick: () => {
				Modal.confirm({
					title: "Konfirmasi Keluar",
					content: "Apakah Anda yakin ingin keluar dari aplikasi?",
					okText: "Ya, Keluar",
					cancelText: "Batal",
					okButtonProps: { danger: true },
					onOk: () => signOut(),
				});
			},
		},
	];

	return (
		<AntHeader
			style={{
				background: "#fff",
				padding: "0px",
				boxShadow: "0 1px 4px rgba(0,21,41,.08)",
				position: "sticky",
				top: 0,
				zIndex: 9,
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
			}}
		>
			<Flex gap="small" align="center">
				<Button
					type="text"
					icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
					onClick={onCollapsed}
					style={{
						fontSize: "16px",
						width: 64,
						height: 64,
					}}
				/>

				<Title level={4} style={{ margin: 0 }}>
					{title}
				</Title>
			</Flex>

			{/* User Profile */}
			<Dropdown
				menu={{ items: userMenuItems }}
				placement="bottomRight"
				arrow
				trigger={["click"]}
			>
				<Space className="cursor-pointer me-8">
					<Avatar icon={<UserOutlined />} />
					<span className="hidden md:inline">{session?.user.name}</span>
				</Space>
			</Dropdown>
		</AntHeader>
	);
};

export default Header;
