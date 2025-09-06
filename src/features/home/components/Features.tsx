import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import {
  AppstoreAddOutlined,
  DollarCircleOutlined,
  CloudSyncOutlined,
  LayoutOutlined,
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

/**
 * Features - redesigned to match the provided reference
 */
const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <Row gutter={[24, 24]}>
          <Col xs={24} sm={12} lg={6}>
            <Card hoverable className="h-full text-center">
              <div className="py-4 flex justify-center">
                <AppstoreAddOutlined style={{ fontSize: 40, color: '#1677ff' }} />
              </div>
              <Title level={4}>Easy Catalog Creation Tool</Title>
              <Paragraph className="text-gray-600">
                Save time and maintain consistency with our cloning tool, allowing you to quickly expand your product range.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card hoverable className="h-full text-center">
              <div className="py-4 flex justify-center">
                <DollarCircleOutlined style={{ fontSize: 40, color: '#13c2c2' }} />
              </div>
              <Title level={4}>Auto Repricing</Title>
              <Paragraph className="text-gray-600">
                Track competitor prices and adjust automatically for the best positioning on Amazon and eBay.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card hoverable className="h-full text-center">
              <div className="py-4 flex justify-center">
                <CloudSyncOutlined style={{ fontSize: 40, color: '#722ed1' }} />
              </div>
              <Title level={4}>Cross Channel Inventory management</Title>
              <Paragraph className="text-gray-600">
                Easily manage products, assign categories, track warehouse inventory, and sync across Amazon, eBay, and other platforms.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card hoverable className="h-full text-center">
              <div className="py-4 flex justify-center">
                <LayoutOutlined style={{ fontSize: 40, color: '#531dab' }} />
              </div>
              <Title level={4}>Automatic Website Creation</Title>
              <Paragraph className="text-gray-600">
                Get your own website automatically designed and fed from your eBay listings with auto-sync capabilities.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Features;
