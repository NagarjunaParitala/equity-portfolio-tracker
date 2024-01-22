import {Table} from 'antd';
import type { TableProps } from 'antd';
import { News } from '../datatypes/CustomDataTypes';

const columns: TableProps<News>['columns'] = [
  {
    title: 'Company',
    dataIndex: 'companyName',
    key: 'companyName',
    render: (text) => <label style={{fontWeight:'bold', color:'#0071ce'}}>{text}</label>,
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Snippet',
    dataIndex: 'snippet',
    key: 'snippet',
  },
  {
    title: 'Source',
    dataIndex: 'source',
    key: 'source',
  }
];

function CompanyNews(props:{newsData: any}) {
    return (
        <Table columns={columns} dataSource={props.newsData} />
    );
  }

export default CompanyNews;