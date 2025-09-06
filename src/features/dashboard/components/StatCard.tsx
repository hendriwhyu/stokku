import React from 'react';
import { Card, Typography, Statistic } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

const { Text } = Typography;

interface StatCardProps {
  title: string;
  value: number;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  precision?: number;
  change?: number;
  loading?: boolean;
}

/**
 * StatCard component for displaying statistics in the dashboard
 * 
 * @param {string} title - The title of the statistic
 * @param {number} value - The value of the statistic
 * @param {React.ReactNode} prefix - Optional icon or element to display before the value
 * @param {React.ReactNode} suffix - Optional icon or element to display after the value
 * @param {number} precision - Number of decimal places to show
 * @param {number} change - Percentage change from previous period
 * @param {boolean} loading - Whether the card is in loading state
 * @returns {React.FC} The StatCard component
 */
const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  prefix,
  suffix,
  precision = 0,
  change,
  loading = false,
}) => {
  return (
    <Card hoverable loading={loading} className="h-full">
      <Statistic
        title={title}
        value={value}
        precision={precision}
        prefix={prefix}
        suffix={suffix}
        valueStyle={{ color: '#3f8600' }}
      />
      {change !== undefined && (
        <div className="mt-2">
          <Text
            type={change >= 0 ? 'success' : 'danger'}
            className="flex items-center"
          >
            {change >= 0 ? (
              <ArrowUpOutlined />
            ) : (
              <ArrowDownOutlined />
            )}
            <span className="ml-1">{Math.abs(change)}% dibanding periode sebelumnya</span>
          </Text>
        </div>
      )}
    </Card>
  );
};

export default StatCard;