import React from 'react';
import { Typography, Card, Row, Col } from 'antd';

/**
 * Pricing section – three tier cards
 */
const Pricing: React.FC = () => {
  const tiers = [
    {
      title: 'Starter',
      price: '$0',
      desc: 'Perfect for small warehouses. Track up to 100 products with basic inventory management and alerts.'
    },
    {
      title: 'Professional',
      price: '$29',
      desc: 'Advanced warehouse management with barcode scanning, multi-location support, and detailed analytics.'
    },
    {
      title: 'Enterprise',
      price: 'Custom',
      desc: 'Tailored solutions for large warehouses with unlimited products, custom integrations, and dedicated support.'
    },
  ];

  return (
    <section id="pricing" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <Typography.Title level={3} className="!mb-1">Pricing</Typography.Title>
          <Typography.Text type="secondary">Choose the Plan That Fits Your Business</Typography.Text>
        </div>
        <Row gutter={[24, 24]}>
          {tiers.map((tier, idx) => (
            <Col xs={24} md={8} key={idx}>
              <Card hoverable className="text-center h-full">
                <Typography.Title level={4} className="text-purple-600">{tier.title}</Typography.Title>
                <Typography.Title level={2} className="!mt-0">{tier.price}</Typography.Title>
                <Typography.Paragraph className="text-gray-600">{tier.desc}</Typography.Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Pricing;

