import React, { useState } from "react";
import { Layout, Menu, Button, Drawer } from "antd";
import { MenuOutlined, BookOutlined } from "@ant-design/icons";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

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
	const { data: session } = useSession();

	const [visible, setVisible] = useState(false);

	return (
		<Header
			className="px-4 sm:px-6 lg:px-8 shadow-sm"
			style={{
				position: "sticky",
				top: 0,
				zIndex: 1000,
				width: "100%",
				padding: 0,
				height: "64px",
			}}>
			<div className="container mx-auto h-full flex items-center justify-between">
				{/* Logo and Brand */}
				<div className="flex items-center">
					<Link href="/">
						<div className="flex items-center cursor-pointer">
							<BookOutlined
								style={{
									fontSize: "24px",
									color: "#1890ff",
									marginRight: "8px",
								}}
							/>
							<span className="text-lg font-bold hidden sm:block">Stokku</span>
							<span className="text-lg font-bold sm:hidden">Stokku</span>
						</div>
					</Link>
				</div>

				{/* Desktop Navigation */}
				<div className="hidden md:flex items-center space-x-3">
					{session ? (
						<Button onClick={() => router.push("/dashboard")} type="primary" size="middle">
							Dashboard
						</Button>
					) : (
						<>
							<Button
								onClick={() => router.push("/auth/login")}
								type="primary"
								size="middle"
							>
								Masuk
							</Button>
							<Button onClick={() => router.push("/auth/register")} size="middle">
								Daftar
							</Button>
						</>
					)}
				</div>

				{/* Mobile Navigation */}
				<div className="md:hidden flex items-center">
					<Button
						type="text"
						icon={<MenuOutlined />}
						onClick={() => setVisible(true)}
						className="text-white! hover:text-gray-300!"
						size="large"
					/>
				</div>
			</div>

			{/* Mobile Navigation Drawer */}
			<Drawer
				title={
					<div className="flex items-center">
						<BookOutlined style={{ fontSize: '20px', color: '#1890ff', marginRight: '8px' }} />
						<span className="text-lg font-bold">Stokku</span>
					</div>
				}
				placement="right"
				onClose={() => setVisible(false)}
				open={visible}
				width={280}
				bodyStyle={{ padding: 0 }}
			>
				<Menu
					mode="vertical"
					selectedKeys={[pathname === "/" ? "home" : pathname.slice(1)]}
					className="border-0"
				>
					{session ? (
						<Menu.Item
							key="dashboard"
							onClick={() => {
								router.push("/dashboard");
								setVisible(false);
							}}
							className="text-lg py-3"
						>
							Dashboard
						</Menu.Item>
					) : (
						<>
							<Menu.Item 
								key="login" 
								onClick={() => {
									router.push("/auth/login");
									setVisible(false);
								}}
								className="text-lg py-3"
							>
								Masuk
							</Menu.Item>
							<Menu.Item
								key="register"
								onClick={() => {
									router.push("/auth/register");
									setVisible(false);
								}}
								className="text-lg py-3"
							>
								Daftar
							</Menu.Item>
						</>
					)}
				</Menu>
			</Drawer>
		</Header>
	);
};

export default Navbar;
