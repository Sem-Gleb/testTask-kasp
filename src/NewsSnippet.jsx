import React from 'react';
import './index.css'
import 'antd/dist/reset.css'; 

import { Card, Tag, Typography, Row, Col, Tooltip, Avatar } from 'antd';
import { ReadOutlined, GlobalOutlined, LikeOutlined, DislikeOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;


const NewsSnippet = ({ data }) => {
  const sentimentIcon = data.SENT === 'positive' ? (
    <LikeOutlined style={{ color: 'green' }} />
  ) : (
    <DislikeOutlined style={{ color: 'red'}} />
  );

  return (
    <Card
      style={{ width: 700, margin: '20px auto' }}
      actions={[
        <a href={data.URL} target="_blank" rel="noopener noreferrer">
          <ReadOutlined /> Read more
        </a>,
      ]}
    >
      <Title level={4}>{data.TI}</Title>
      <Text type="secondary">
        {new Date(data.DP).toLocaleDateString()} · {data.DOM}
      </Text>

      <Row style={{ marginTop: '10px' }}>
        <Col span={24}>
          <Text>{data.AB.length > 200 ? `${data.AB.slice(0, 200)}...` : data.AB}</Text>
        </Col>
      </Row>

      <Row gutter={[8, 8]} style={{ marginTop: '10px' }}>
        {data.KW.map((tag) => (
          <Col key={tag.value}>
            <Tag color="blue">
              {tag.value} ({tag.count})
            </Tag>
          </Col>
        ))}
      </Row>

      <Row style={{ marginTop: '10px' }} gutter={16}>
        <Col span={12}>
          <Tooltip title="Sentiment">
            {sentimentIcon} {data.SENT}
          </Tooltip>
        </Col>
        <Col span={12}>
          <Tooltip title="Reach">
            <GlobalOutlined /> {data.REACH}
          </Tooltip>
        </Col>
      </Row>

      <Row style={{ marginTop: '10px' }}>
        {data.TRAFFIC.map((traffic) => (
          <Col key={traffic.value} span={8}>
            <Tooltip title={`Traffic from ${traffic.value}`}>
              <Avatar shape="square" size={32} style={{ backgroundColor: '#87d068' }}>
                {traffic.count.toFixed(2)}
              </Avatar>
            </Tooltip>
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default NewsSnippet;
