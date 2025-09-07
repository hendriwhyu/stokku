import React from "react";
import { Layout, Typography, Divider, Flex } from "antd";
import {
	BookOutlined,
	GithubOutlined,
	LinkedinOutlined,
	TwitterOutlined,
} from "@ant-design/icons";

const { Footer: AntFooter } = Layout;
const { Title, Paragraph, Text } = Typography;

/**
 * Global Footer component used across the application
 *
 * @returns {React.FC} The Footer component
 */
const Footer: React.FC = () => {
	return (
		<AntFooter style={{ background: "#001529", padding: "48px 0 24px" }}>
			<div className="container mx-auto px-4">
				<Flex vertical>
					<div className="flex items-center mb-4">
						<BookOutlined
							style={{
								fontSize: "24px",
								color: "#1890ff",
								marginRight: "8px",
							}}
						/>
						<Title level={4} style={{ color: "white", margin: 0 }}>
							Stokku
						</Title>
					</div>
					<Paragraph style={{ color: "rgba(255,255,255,0.65)" }}>
						Platform manajemen inventaris buku terbaik untuk toko buku dan
						perpustakaan di Indonesia
					</Paragraph>
					<div className="flex mt-4">
						<a
							href="https://github.com"
							target="_blank"
							rel="noopener noreferrer"
							className="mr-4"
						>
							<GithubOutlined
								style={{ fontSize: "24px", color: "rgba(255,255,255,0.65)" }}
							/>
						</a>
						<a
							href="https://twitter.com"
							target="_blank"
							rel="noopener noreferrer"
							className="mr-4"
						>
							<TwitterOutlined
								style={{ fontSize: "24px", color: "rgba(255,255,255,0.65)" }}
							/>
						</a>
						<a
							href="https://linkedin.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<LinkedinOutlined
								style={{ fontSize: "24px", color: "rgba(255,255,255,0.65)" }}
							/>
						</a>
					</div>
				</Flex>

				<Divider
					style={{ borderColor: "rgba(255,255,255,0.1)", margin: "24px 0" }}
				/>

				<div className="text-center">
					<Text style={{ color: "rgba(255,255,255,0.45)" }}>
						© {new Date().getFullYear()} Stokku. Hak Cipta Dilindungi.
					</Text>
				</div>
			</div>
		</AntFooter>
	);
};

export default Footer;
