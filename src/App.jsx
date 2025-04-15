import React from 'react';
import './App.css';
import { Layout } from 'antd';
import NewsSnippet from './NewsSnippet'; 

const { Header, Content } = Layout;

const data = {
  ID: 260855433,
  TI: 'Mobile bankers left vulnerable: 47% of UK consumers manage finances on insecure smartphones',
  AB: 'Mobile bankers left vulnerable: 47% of UK consumers manage finances on insecure smartphones...',
  URL: 'https://www.globalsecuritymag.com/Mobile-bankers-left-vulnerable-47,20200819,101944.html',
  DP: '2025-03-06T21:00:00',
  DOM: 'globalsecuritymag.com',
  SENT: 'negative',
  LANG: 'en',
  REACH: 2392,
  KW: [
    { value: 'antivirus', count: 10 },
    { value: 'kaspersky', count: 5 },
    { value: 'new', count: 1 },
  ],
  FAV: '/favicons/e65d69dc71ab539384fcc63062efdd3d.png',
  HIGHLIGHTS: ['highlight 1', 'highlight 2'],
  TRAFFIC: [
    { value: 'India', count: 0.779 },
    { value: 'USA', count: 0.101 },
    { value: 'Mexico', count: 0.036 },
  ],
};

function App() {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <NewsSnippet data={data} /> 
        </div>
      </Content>
    </Layout>
  );
}

export default App;
