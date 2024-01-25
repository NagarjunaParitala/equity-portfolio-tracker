import React, { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Col, Row,Divider,DatePicker, Space  } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import CompanyNews from './CompanyNews';
import StockPriceChart from './StocksPriceChart';
import {Company } from '../datatypes/CustomDataTypes';
import {companyNewsData, companyProfileData} from '../datatypes/stockData';
import SelectableCompanyList from './SelectableCompanyList';
import CompanyProfileComponent from './CompanyProfileComponent';

const {Content, Sider } = Layout;
const items1: MenuProps['items'] = ['1'].map((key) => ({
  key,
  label: `Equity Portfolio Tracker`,
}));

const items2: MenuProps['items'] = [UserOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `User Portfolio`,
    };
  },
);

const { RangePicker } = DatePicker;

const AppLayout: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [companyNews, setCompanyNews] = useState(companyNewsData);
  const [companyPortfolio, setCompanyPortfolio] = useState(companyProfileData);

  const selectedCompanies = (filteredCompanies: Company[]) => {
    if(filteredCompanies && filteredCompanies.length > 0) {
      let selectedCompanies: string[] = [];
      filteredCompanies.forEach(function (company) {
        selectedCompanies.push(company.name);
    })
      let filteredNews = companyNewsData.filter((obj) => {
        return selectedCompanies.includes(obj.companyName);
      });
      setCompanyNews(filteredNews);
      let filteredCompanyProfiles = companyProfileData.filter((obj) => {
        return selectedCompanies.includes(obj.companyName);
      });
      setCompanyPortfolio(filteredCompanyProfiles);
    }
  }
  
  return (
    <Layout style={{minHeight:'100vh', zoom:"87%"}}>
      {/* <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header> */}
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
           theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0, fontWeight:'bold' }}
            items={items2}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0', fontWeight:'bold',fontSize:'1.5rem' }}>
            <Breadcrumb.Item>Equity Stock Information</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
                <Row>
                  <Col span={12}>
                  <label style={{fontSize:'medium',fontWeight:'bold'}}>Portfolio Tracker</label>   
                  </Col>
                  <Col span={12}>
                      <Space direction="vertical" size={12}>
                          <RangePicker/>
                      </Space>
                  </Col>
                </Row>
                <Divider></Divider>       
                <Row style={{maxHeight:'12rem !important'}}>
                <Col span={12} style={{padding:'0.5rem'}}>
                    <label style={{fontSize:'medium',fontWeight:'bold'}}>Stock Price</label>  
                    <StockPriceChart></StockPriceChart>
                </Col>
                <Col span={12} style={{padding:'0.5rem'}}>
                    <label style={{fontSize:'medium',fontWeight:'bold'}}>Companies</label>   
                    <SelectableCompanyList selectedCompanies={selectedCompanies}></SelectableCompanyList>
                </Col>
                </Row>
                <Divider></Divider>
                <Row style={{maxHeight:'12rem !important'}}>
                <Col span={12} style={{padding:'0.5rem'}}>
                <label style={{fontSize:'medium',fontWeight:'bold'}}>Profile</label>
                    <CompanyProfileComponent companyProfileData={companyPortfolio}></CompanyProfileComponent>
                </Col>
                <Col span={12} style={{padding:'0.5rem'}}>
                <label style={{fontSize:'medium',fontWeight:'bold'}}>News</label>
                <CompanyNews newsData={companyNews}></CompanyNews>
                </Col>
                </Row>
            </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AppLayout;