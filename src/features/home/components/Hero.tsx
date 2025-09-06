import React from "react";
import { Typography, Button, Row, Col } from "antd";
import { useRouter } from "next/navigation";

const { Title, Paragraph } = Typography;

/**
 * Hero - redesigned to match the provided reference layout
 */
const Hero: React.FC = () => {
	const router = useRouter();

	return (
		<section id="home" className="py-20 px-4 bg-white">
			<div className="container mx-auto">
				<Row gutter={[24, 24]} align="middle" justify="space-between">
					<Col xs={24} lg={16}>
						<Title level={1} className="!mb-4 leading-tight">
							Simplify Your Inventory, Listing, and
							<br />
							Pricing for <span className="text-blue-600">Amazon</span> and{" "}
							<span className="text-purple-600">eBay</span>
						</Title>
						<Paragraph className="text-gray-600 text-lg !mb-6 max-w-2xl">
							Efficient, automated tools to help you list and sell on Amazon and
							eBay.
						</Paragraph>
						<div className="flex flex-wrap gap-3">
							<Button
								type="primary"
								size="large"
								onClick={() => {
									router.push("/auth/login");
								}}
							>
								Get Started for Free
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
