import React from 'react';
import { Typography, Card, Row, Col } from 'antd';

const { Title, Paragraph, Text } = Typography;

/**
 * Pricing section – three tier cards
 */
const Pricing: React.FC = () => {
  const tiers = [
    {
      title: 'Free Tier',
      price: '$0',
      desc: 'Get started with the basics at no cost. First 50 users get full access for free, with no limits.'
    },
    {
      title: 'Paid Tier',
      price: '$20',
      desc: 'Enjoy advanced features including dynamic repricing, automated inventory sync, and more.'
    },
    {
      title: 'Enterprise Tier',
      price: 'Custom',
      desc: 'Tailored solutions for large-scale sellers, including dedicated support and your own automatically generated website.'
    },
  ];

  return (
    <section id="pricing" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <Title level={3} className="!mb-1">Pricing</Title>
          <Text type="secondary">Choose the Plan That Fits Your Business</Text>
        </div>
        <Row gutter={[24, 24]}>
          {tiers.map((t, idx) => (
            <Col xs={24} md={8} key={idx}>
              <Card hoverable className="text-center h-full">
                <Title level={4} className="text-purple-600">{t.title}</Title>
                <Title level={2} className="!mt-0">{t.price}</Title>
                <Paragraph className="text-gray-600">{t.desc}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Pricing;

