import React from 'react';
import { Layout, Typography, Row, Col } from 'antd';

const { Footer: AntFooter } = Layout;
const { Title, Paragraph } = Typography;

/**
 * Footer component - Footer section for the landing page
 * 
 * @returns {React.FC} The Footer component
 */
const Footer: React.FC = () => {
  return (
    <AntFooter style={{ background: '#001529', padding: '24px 0' }}>
      <div className="container mx-auto px-4">
        <Row gutter={[32, 32]}>
          <Col xs={24} md={8}>
            <Title level={4} style={{ color: 'white' }}>Stokku</Title>
            <Paragraph style={{ color: 'rgba(255,255,255,0.65)' }}>
              Platform manajemen portofolio saham terbaik untuk investor Indonesia
            </Paragraph>
          </Col>
          <Col xs={24} md={8}>
            <Title level={5} style={{ color: 'white' }}>Produk</Title>
            <ul className="list-none p-0">
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Analisis Saham</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Pelacakan Portofolio</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Manajemen Risiko</a></li>
            </ul>
          </Col>
          <Col xs={24} md={8}>
            <Title level={5} style={{ color: 'white' }}>Perusahaan</Title>
            <ul className="list-none p-0">
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Tentang Kami</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Kontak</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Kebijakan Privasi</a></li>
            </ul>
          </Col>
        </Row>
        <div className="text-center text-gray-500 mt-8">
          © {new Date().getFullYear()} Stokku. Hak Cipta Dilindungi.
        </div>
      </div>
    </AntFooter>
  );
};

export default Footer;