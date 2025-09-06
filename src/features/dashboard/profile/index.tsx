"use client";

import React from "react";
import { Typography, Card, Avatar, Descriptions, Button, Flex } from "antd";
import { UserOutlined, EditOutlined } from "@ant-design/icons";
import { Content } from "antd/es/layout/layout";
import { useSession } from "next-auth/react";

const { Title } = Typography;

const Profile = () => {
	const { data } = useSession();

	const user = data?.user

	return (
		<Content className="p-6">
			<Title level={2} className="mb-6">
				Profil Pengguna
			</Title>

			<Card className="shadow-md">
				<div className="flex flex-col md:flex-row items-center md:items-start gap-8">
					<Flex vertical gap="middle">
						<Avatar
							size={120}
							icon={<UserOutlined />}
							className="bg-blue-500 mb-4"
						/>
						<Button type="primary" icon={<EditOutlined />}>
							Ubah Foto
						</Button>
					</Flex>

					<div className="flex-1">
						<Descriptions
							title="Informasi Pengguna"
							bordered
							column={{ xs: 1, sm: 2 }}
						>
							<Descriptions.Item label="Nama">
								{user?.name || "-"}
							</Descriptions.Item>
							<Descriptions.Item label="Email">
								{user?.email || "-"}
							</Descriptions.Item>
							<Descriptions.Item label="Role">
								{user?.role || "user"}
							</Descriptions.Item>
						</Descriptions>

						<div className="mt-6 flex flex-wrap gap-4">
							<Button type="primary">Edit Profil</Button>
							<Button>Ubah Kata Sandi</Button>
						</div>
					</div>
				</div>
			</Card>
		</Content>
	);
};

export default Profile;
