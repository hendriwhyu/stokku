import React from 'react';
import { Layout, Menu } from 'antd';
import {
  DashboardOutlined,
  BookOutlined,
  ShoppingCartOutlined,
  FileTextOutlined
} from '@ant-design/icons';
import { usePathname, useRouter } from 'next/navigation';

const { Sider } = Layout;

interface SidebarProps {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
}

/**
 * Sidebar component for the dashboard layout
 * 
 * @param {boolean} collapsed - Whether the sidebar is collapsed
 * @param {function} onCollapse - Function to handle sidebar collapse state
 * @returns {React.FC} The Sidebar component
 */
const Sidebar: React.FC<SidebarProps> = ({ collapsed, onCollapse }) => {
  const pathname = usePathname();

  const router = useRouter();
  
  const selectedKey = pathname.split('/').pop() || 'overview';

  const menuItems = [
    {
      key: 'overview',
      icon: <DashboardOutlined />,
      label: 'Dashboard',
      onClick: () => router.push('/dashboard'),
    },
    {
      key: 'categories',
      icon: <FileTextOutlined />,
      label: 'Kategori',
      onClick: () => router.push('/dashboard/categories'),
    },
    {
      key: 'inventory',
      icon: <BookOutlined />,
      label: 'Inventaris Buku',
      onClick: () => router.push('/dashboard/inventory'),
    },
    {
      key: 'reports',
      icon: <FileTextOutlined />,
      label: 'Laporan',
      onClick: () => router.push('/dashboard/reports'),
    },
  ];

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      width={256}
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        zIndex: 10,
      }}
      theme="dark"
    >
      <div className="logo p-4 flex items-center justify-center">
        <BookOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
        {!collapsed && <span className="ml-2 text-white font-bold text-lg">Stokku</span>}
      </div>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[selectedKey]}
        items={menuItems}
      />
    </Sider>
  );
};

export default Sidebar;