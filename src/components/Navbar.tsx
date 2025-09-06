import React, { useState } from "react";
import { Layout, Menu, Button, Drawer } from "antd";
import { MenuOutlined, BookOutlined } from "@ant-design/icons";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const { Header } = Layout;

/**
 * Global Navbar component used across the application
 *
 * @param {boolean} transparent - Whether the navbar should have a transparent background
 * @returns {React.FC} The Navbar component
 */
const Navbar: React.FC = () => {
	const router = useRouter();
	const pathname = usePathname();
	
	const [visible, setVisible] = useState(false);

	return (
		<Header
			className={`px-4 shadow`}
			style={{
				position: "sticky",
				top: 0,
				zIndex: 1,
				width: "100%",
				padding: "0 24px",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
			}}
		>
			{/* Logo and Brand */}
			<div className="flex items-center">
				<Link href="/">
					<div className="flex items-center cursor-pointer">
						<BookOutlined
							style={{ fontSize: "24px", color: "#1890ff", marginRight: "8px" }}
						/>
						<span className="text-lg font-bold">Stokku</span>
					</div>
				</Link>
			</div>

			{/* Desktop Navigation */}
			<div className="hidden md:flex items-center">
				<div className="ml-4 flex items-center">
					<Button
						onClick={() => router.push("/auth/login")}
						type="primary"
						className="mr-3"
					>
						Masuk
					</Button>
					<Button onClick={() => router.push("/auth/register")}>Daftar</Button>
				</div>
			</div>

			{/* Mobile Navigation */}
			<div className="md:hidden flex items-center">
				<Button
					type="text"
					icon={<MenuOutlined />}
					onClick={() => setVisible(true)}
				/>
			</div>

			{/* Mobile Navigation Drawer */}
			<Drawer
				title="Menu"
				placement="right"
				onClose={() => setVisible(false)}
				open={visible}
			>
				<Menu
					mode="vertical"
					selectedKeys={[
						pathname === "/" ? "home" : pathname.slice(1),
					]}
				>
					<Menu.Divider />
					<Menu.Item key="login">Masuk</Menu.Item>
					<Menu.Item key="register">Daftar</Menu.Item>
				</Menu>
			</Drawer>
		</Header>
	);
};

export default Navbar;
