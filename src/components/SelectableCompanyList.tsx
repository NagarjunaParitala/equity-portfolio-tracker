import React, { useState } from 'react';
import {  Table } from 'antd';
import type { TableColumnsType } from 'antd';
import { Company, IChildProps } from '../datatypes/CustomDataTypes';
import { companiesList } from '../datatypes/stockData';


const columns: TableColumnsType<Company> = [
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

const SelectableCompanyList: React.FC<IChildProps> = ({selectedCompanies}) => {
    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: Company[]) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
          selectedCompanies(selectedRows);
        },
        getCheckboxProps: (record: Company) => ({
          disabled: record.name === 'Disabled User', // Column configuration not to be checked
          name: record.name,
        }),
      };
  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');

  return (
    <div>
      <Table
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        columns={columns}
        dataSource={companiesList}
      />
    </div>
  );
};

export default SelectableCompanyList;