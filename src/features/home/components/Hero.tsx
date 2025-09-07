import React from "react";
import { Typography, Button, Row, Col } from "antd";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

/**
 * Hero - redesigned to match the provided reference layout
 */
const Hero: React.FC = () => {
	const router = useRouter();
	const { data: session } = useSession();

	return (
		<section id="home" className="py-20 px-4 bg-white">
			<div className="container mx-auto">
				<Row gutter={[24, 24]} align="middle" justify="space-between">
					<Col xs={24} lg={16}>
						<Typography.Title level={1} className="!mb-4 leading-tight">
							Simplify Your Warehouse
							<br />
							<span className="text-blue-600">Inventory Management</span> System
						</Typography.Title>
						<Typography.Paragraph className="text-gray-600 text-lg !mb-6 max-w-2xl">
							Efficient, automated tools to help you manage warehouse inventory,
							track stock levels, and optimize operations.
						</Typography.Paragraph>
						<div className="flex flex-wrap gap-3">
							<Button
								type="primary"
								size="large"
								onClick={() => {
									if (session) {
										router.push("/dashboard");
									} else {
										router.push("/auth/login");
									}
								}}
							>
								{session ? "Go to Dashboard" : "Get Started for Free"}
							</Button>
						</div>
					</Col>
					<Col xs={24} lg={8} className="flex justify-center lg:justify-end">
						<div className="w-full h-[220px] rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 border border-gray-100 shadow-inner flex items-center justify-center text-gray-400">
							UI Preview
						</div>
					</Col>
				</Row>
			</div>
		</section>
	);
};

export default Hero;
