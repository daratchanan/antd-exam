import React from 'react';
import {
   Avatar,
   Button,
   Col,
   Divider,
   Form,
   Input,
   Row,
   Typography
} from 'antd';
import { UserOutlined } from '@ant-design/icons';

export default function Account() {
   const [form] = Form.useForm();

   const onFinish = (values) => {
      console.log('Received values of form: ', values);
   };


   return (
      <>
         <Row>
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

            <Divider style={{background: '#000'}}/>

            <Col xs={24}>
               <Row justify='space-between'>
                  <Col>
                     <Typography.Title level={5}>การตั้งค่าบัญชี</Typography.Title>
                  </Col>
                  <Col>
                     {/* <Button type='primary' style={{ borderRadius: '20px' }}>ยกเลิก</Button> */}
                     <Form
                        form={form}
                     >
                        <Form.Item style={{margin: '0px'}}>
                           <Button
                              type='primary'
                              style={{ borderRadius: '20px', marginLeft: '10px' }}
                              htmlType='submit'
                           >บันทึก
                           </Button>
                        </Form.Item>
                     </Form>
                  </Col>
               </Row>
            </Col>

            <Col xs={24} style={{marginBottom: '10px'}}>
               <Typography.Text strong >รายละเอียดผู้ใช้</Typography.Text>
            </Col>

            <Col xs={24}>
               <div
                  style={{
                     width: '100%',
                     border: '1px solid #d9d9d9',
                     padding: '10px',
                     borderRadius: '5px'
                  }}
               >
                  <Form
                     form={form}
                     onFinish={onFinish}
                     labelCol={{span: 2}}
                     wrapperCol={{
                        xs: {
                           span: 24,
                           offset: 0,
                        },
                        sm: {
                           span: 8,
                           offset: 4,
                        },
                     }}
                  >
                     <Form.Item
                        name='email'
                        label='ที่อยู่อีเมล์'
                        rules={[{
                           type: 'email'
                        }]}
                        style={{margin: '0px'}}
                     >
                        <Input style={{borderRadius: '5px'}} />
                     </Form.Item>

                     <Divider style={{margin: '10px 0px'}} />

                     <Form.Item
                        name='id'
                        label='ID'
                        style={{margin: '0px'}}
                     >
                        <Input style={{borderRadius: '5px'}} />
                     </Form.Item>

                     <Divider style={{margin: '10px 0px'}} />
                     
                     <Form.Item
                        name='name'
                        label='ชื่อที่แสดง'
                        style={{margin: '0px'}}
                     >
                        <Input style={{borderRadius: '5px'}} />
                     </Form.Item>
                  </Form>
               </div>
            </Col>

         </Row>
      </>
   )
}
