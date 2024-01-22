import { Card,Col, Row,Divider } from 'antd';
import {Table} from 'antd';
import type { TableProps } from 'antd';
import { CompanyProfile } from '../datatypes/CustomDataTypes';

  const columns: TableProps<CompanyProfile>['columns'] = [
    {
      title: 'Company',
      dataIndex: 'companyName',
      key: 'company',
      render: (text) => <label style={{fontWeight:'bold', color:'#0071ce'}}>{text}</label>,
    },
    {
      title: 'Industry',
      dataIndex: 'industry',
      key: 'industry',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Sector',
      dataIndex: 'sector',
      key: 'sector',
    },
    {
      title: 'Employees',
      dataIndex: 'employees',
      key: 'employees',
    },
    {
      title: 'Equity(USD)',
      dataIndex: 'equity',
      key: 'equity',
    }
  ];

  function CompanyProfileComponent(props:{companyProfileData: any}) {
    return (
        <Table columns={columns} dataSource={props.companyProfileData} />
    );
  }
export default CompanyProfileComponent;