import React from 'react'
import { Layout, Menu, } from 'antd';
import { Button } from 'antd';

const { Header } = Layout;

const Navbar = () => {
  const menu = [
    {
      label: (
        <a href="/share" >
          나눔게시판
        </a>
      ),
      key: 'table',
    },

    {
      label: (
        <a href="/board" >
          커뮤니티
        </a>
      ),
      key: 'community',
    },

    {
      label: (
        <a href="/mypage" >
          마이페이지
        </a>
      ),
      key: 'mypage',
    },
  ];

  return (
    <Layout className="layout">
      <Header
        style={{
          position: 'relative',
          display: 'grid',
          alignItems: 'center',
          fontWeight: 'bold',
          height: '80px',
        }}
      >
        <Menu style={{
          position: 'absolute',
          display: 'flex',
          justifyContent: 'flex-end',
          right: '150px',
        }}
          theme="dark"
          mode="horizontal"
          items={menu}
        />

        <a href='/' >
          <img style={{
            position: 'absolute',
            width: '120px',
            height: '90px',
            backgroundSize: '90%',
            left: '30px',
            top: '0px',
          }}
            src={`${process.env.PUBLIC_URL}/img/together.png`}
          />
        </a>
        <div className="demo-logo" />
        <a href='/login'>
          <Button style={{
            width: '80px',
            height: '40px',
            position: 'absolute',
            top: '20px',
            right: '30px',
          }}>로그인</Button>
        </a>
      </Header>
    </Layout>
  );
};

export default Navbar
