import React from 'react';
import { Typography, Row, Col } from 'antd';

/**
 * Showcase/Overview section – mirrors the reference block with headline and UI preview
 */
const Showcase: React.FC = () => {
  return (
    <section id="overview" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <Typography.Title level={2} className="!mb-2">Optimize Your Warehouse</Typography.Title>
          <Typography.Title level={3} className="!mt-0 text-purple-600">Operations with Ease</Typography.Title>
          <Typography.Paragraph className="text-gray-600 max-w-3xl mx-auto">
            Achieve efficient warehouse management with real-time inventory tracking, 
            automated alerts, and comprehensive analytics to streamline your operations.
          </Typography.Paragraph>
        </div>

        <Row justify="center">
          <Col xs={24} md={22} lg={20}>
            <div className="rounded-2xl border border-gray-100 shadow overflow-hidden">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 h-[420px] flex items-center justify-center text-gray-400">
                Dashboard Preview
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Showcase;

