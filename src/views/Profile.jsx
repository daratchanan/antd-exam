import React from 'react';
import {
   Button,
   Layout,
   Menu,
} from 'antd';
import { Outlet } from 'react-router-dom';

const menuItems = [
   {
      key: 'account',
      label: <Button type='text' href='/profile/account'>ข้อมูลบัญชี</Button>

   },
   {
      key: 'security',
      label: <Button type='text' href='/profile/security'>ความปลอดภัย</Button>
   },
   {
      key: 'bank',
      label: <Button type='text' href='/profile/bookbank'>บัญชีธนาคาร</Button>
   },
]

export default function Profile() {
   return (
      <>
         <Layout>
            <Layout.Sider
               breakpoint="lg"
               collapsedWidth="0"
            >
               <div  />
               <Menu
                  // theme="dark"
                  mode="inline"
                  defaultSelectedKeys={['account']}
                  items={menuItems}
               />
            </Layout.Sider>

            <Layout.Content
               style={{
                  margin: '24px 16px 0',
               }}
            >
               <div className='profile-sider' >
                  <Outlet />
               </div>
            </Layout.Content>
         </Layout>
      </>
   )
};
