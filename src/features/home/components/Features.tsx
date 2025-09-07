import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import {
  AppstoreAddOutlined,
  InboxOutlined,
  BarChartOutlined,
  TruckOutlined,
  ScanOutlined,
  AlertOutlined,
} from '@ant-design/icons';

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
                <InboxOutlined style={{ fontSize: 40, color: '#1677ff' }} />
              </div>
              <Typography.Title level={4}>Real-time Stock Tracking</Typography.Title>
              <Typography.Paragraph className="text-gray-600">
                Monitor inventory levels in real-time across all warehouse locations with instant stock updates and alerts.
              </Typography.Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card hoverable className="h-full text-center">
              <div className="py-4 flex justify-center">
                <BarChartOutlined style={{ fontSize: 40, color: '#13c2c2' }} />
              </div>
              <Typography.Title level={4}>Smart Analytics</Typography.Title>
              <Typography.Paragraph className="text-gray-600">
                Get detailed insights on stock movement, turnover rates, and demand forecasting to optimize warehouse operations.
              </Typography.Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card hoverable className="h-full text-center">
              <div className="py-4 flex justify-center">
                <ScanOutlined style={{ fontSize: 40, color: '#722ed1' }} />
              </div>
              <Typography.Title level={4}>Barcode Scanning</Typography.Title>
              <Typography.Paragraph className="text-gray-600">
                Streamline receiving and picking processes with integrated barcode scanning for accurate inventory management.
              </Typography.Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card hoverable className="h-full text-center">
              <div className="py-4 flex justify-center">
                <AlertOutlined style={{ fontSize: 40, color: '#faad14' }} />
              </div>
              <Typography.Title level={4}>Automated Alerts</Typography.Title>
              <Typography.Paragraph className="text-gray-600">
                Receive instant notifications for low stock, expired items, and reorder points to prevent stockouts.
              </Typography.Paragraph>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Features;
