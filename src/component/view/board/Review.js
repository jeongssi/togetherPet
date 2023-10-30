import React from 'react'
import { Breadcrumb } from 'antd';
import Content from './Content';

const Review = () => {
  return (
    <div>
      <Breadcrumb
        style={{
          margin: '15px 15px',
        }}
        items={[
          {
            title: 'community'
          },
          {
            title: '커뮤니티 게시판'
          }
        ]}
      />
      <Content />
    </div>
  )
}

export default Review