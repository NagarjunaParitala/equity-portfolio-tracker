import { Table } from 'antd';
import type { TableProps } from 'antd';
import { Company } from '../datatypes/CustomDataTypes';

const columns: TableProps<Company>['columns'] = [
    {
        title: 'Logo',
        dataIndex: 'logo',
        key: 'logo',
        width: 50,
        render: (t, r) => <img src={`${r.logo}`} alt="logo"/>
      },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Currency',
      dataIndex: 'currency',
      key: 'currency',
    }
  ];
  

const companies:Company[] = [
    {id:1, name:'Apple',key:'apple', price:'180', currency:'USD',
    logo:'https://img.icons8.com/color/48/mac-os.png'},
    {id:2, name:'Google', key:'google',price:'350', currency:'USD',
    logo:'https://img.icons8.com/color/48/google-logo.png'},
    {id:3, name:'Microsoft', key:'microsoft',price:'750', currency:'USD',
    logo:'https://img.icons8.com/color/48/microsoft.png'
  }
  ];

  function CompanyList() {
    return (
        <Table columns={columns} dataSource={companies} />
    );
  }
    
  export default CompanyList;