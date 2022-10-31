import React from 'react';
import {
   Avatar,
   Button,
   Col,
   Divider,
   Layout,
   Menu,
   Row,
   Typography,
} from 'antd';
import { UserOutlined } from '@ant-design/icons';
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
      key: 'bookbank',
      label: <Button type='text' href='/profile/bookbank'>บัญชีธนาคาร</Button>
   },
]

export default function Profile() {
   // console.log('path=>', window.location.href);
   const myArray = window.location.href.split('/')

   const currentPath = myArray[myArray.length - 1]
   // console.log('currentPath=>', currentPath);


   return (
      <>
         <Layout>
            <Layout.Sider
               breakpoint="lg"
               collapsedWidth="0"
            >
               <div />
               <Menu
                  // theme="dark"
                  mode="inline"
                  defaultSelectedKeys={[currentPath]}
                  items={menuItems}
               />
            </Layout.Sider>

            <Layout.Content
               style={{
                  margin: '24px 16px 0',
               }}
            >
               <Row>
                  {/* <Col xs={24}>
                     <Typography.Title level={2} style={{ marginLeft: '30px' }}
                     >
                        ตั้งค่าบัญชี
                     </Typography.Title>
                  </Col> */}
                  <Col>
                     <Avatar size={64} icon={<UserOutlined />} />
                  </Col>
                  <Col style={{ marginLeft: '20px' }}>
                     <Typography.Title level={4}
                     >
                        Narapon Jirattitigarnpong
                     </Typography.Title>
                     <Typography.Title level={4} style={{ marginTop: '10px' }}
                     >
                        User ID #1234
                     </Typography.Title>
                  </Col>

                  <Divider style={{ background: '#000' }} />
               </Row>

               <div className='profile-sider' >
                  <Outlet />
               </div>

            </Layout.Content>
         </Layout>
      </>
   )
};
