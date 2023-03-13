import React, { useState } from 'react';
import { Layout, Menu, theme, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

type MenuItem = {
  label: string
}
export default function Home() {
  const baseUrl = `https://${process.env.APP_DOMAIN}`;
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const menuContent: Array<MenuItem> = [
    {
      label: 'Dong 1'
    },
    {
      label: 'Dong 2'
    },
    {
      label: 'Dong 3'
    },
    {
      label: 'Log in/Sign up'
    },
  ]
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(username, password);
  };
  return (
    <>
      <Layout className="layout">
        <Header>
          <div
            style={{
              float: 'left',
              width: 120,
              height: 31,
              margin: '16px 24px 16px 0',
              background: 'rgba(255, 255, 255, 0.2)',
            }}
          >
            <img src='/dongnv.png' style={{
              width: 'inherit'
            }}/>
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ justifyContent: "flex-end" }}
            items={menuContent.map((item, index) => {
              const key = index + 1;
              return {
                key,
                label: item.label,
              };
            })}
          />
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content" style={{ background: colorBgContainer }}>
            <div>
              <Input
                prefix={<UserOutlined />}
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button type="primary" onClick={handleLogin}>
                Login
              </Button>
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </>
  )
}
