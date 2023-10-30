import React from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';

const columns = [
  {
    title: '번호',
    dataIndex: 'Number_id',
    key: 'Number_id',
    align: 'center',
  },

  {
    title: '제목',
    dataIndex: 'title',
    key: 'title',
    render: (text, record) => (
      <Link to={`/board/view/${record.Number_id}`}>{text}</Link>
    ),
    width: '50%',
  },

  {
    title: '작성자',
    dataIndex: 'author',
    key: 'author',
  },

  {
    title: '작성일',
    dataIndex: 'date',
    key: 'date',
  },

  {
    title: '조회수',
    dataIndex: 'count',
    key: 'count',
  },
];

const data = [
  {
    key: '1',
    Number_id: '5',
    title: '아 피곤해... 귀찮아~',
    author: '러시안블루',
    date: '23-10-29',
    count: '41',
  },
  {
    key: '2',
    Number_id: '4',
    title: '다리가 짧지만 빠르다구요?',
    author: '닥스훈트',
    date: '23-10-29',
    count: '25',
  },
  {
    key: '3',
    Number_id: '3',
    title: '털이 많이 날려도 너무 귀엽죠?',
    author: '노르웨이숲',
    date: '23-10-28',
    count: '26',
  },
  {
    key: '4',
    Number_id: '2',
    title: '반가워요!',
    author: '포메라니안',
    date: '23-10-28',
    count: '37',
  },
  {
    key: '5',
    Number_id: '1',
    title: '안녕하세요!',
    author: '말티즈',
    date: '23-10-28',
    count: '31',
  },
];
const Content = () => <Table columns={columns} dataSource={data} bordered />;

export default Content;