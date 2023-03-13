import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import Link from 'next/link';

const items: MenuProps['items'] = [
  {
    label: 'Ecommerce Store',
    key: 'mail',
    icon: <div className='mr-2'>LOGO</div>,
  },
  {
    label: 'All Products',
    key: 'app',
    icon: <AppstoreOutlined />
  },
  {
    label: 'Collections',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    label: (
      <Link href="/" rel="noopener noreferrer">
        About
      </Link>
    ),
    key: 'alipay',
  }
];



export default function Header (){
    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
      console.log('click ', e);
      setCurrent(e.key);
    };
  
    return (
       <div className="main-menu">
           <div className="page-width">
                <Menu 
                    onClick={onClick} 
                    selectedKeys={[current]} 
                    mode="horizontal" 
                    items={items} 
                    id="main-menu"
                    
                />
           </div>
       </div>
    );
}