import React from 'react';
import {
   Button,
   Col,
   Divider,
   Form,
   Input,
   Row,
   Select,
   Typography
} from 'antd';


export default function Account() {
   const [form] = Form.useForm();

   const onFinish = (values) => {
      console.log('Received values of form: ', values);
   };


   return (
      <>
         <Row> 
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
                        <Form.Item style={{ margin: '0px' }}>
                           <Button
                              type='primary'
                              style={{ borderRadius: '20px' }}
                              htmlType='submit'
                           >บันทึก
                           </Button>
                        </Form.Item>
                     </Form>
                  </Col>
               </Row>
            </Col>

            <Col xs={24} style={{ marginBottom: '10px' }}>
               <Typography.Text strong >รายละเอียดผู้ใช้</Typography.Text>
            </Col>

            <Col xs={24} style={{ marginBottom: '20px' }}>
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
                     labelCol={{ span: 4 }}
                     labelAlign='left'
                     wrapperCol={{
                        xs: {
                           span: 24,
                           offset: 0,
                        },
                        sm: {
                           span: 10,
                           offset: 4,
                        },
                     }}
                  >
                     <Form.Item
                        name='email'
                        label='ที่อยู่อีเมล'
                        rules={[{ type: 'email' }]}
                        style={{ margin: '0px' }}
                     >
                        <Input style={{ borderRadius: '5px' }} />
                     </Form.Item>

                     <Divider style={{ margin: '10px 0px' }} />

                     <Form.Item
                        name='id'
                        label='ID'
                        style={{ margin: '0px' }}
                     >
                        <Input style={{ borderRadius: '5px' }} />
                     </Form.Item>

                     <Divider style={{ margin: '10px 0px' }} />

                     <Form.Item
                        name='name'
                        label='ชื่อที่แสดง'
                        style={{ margin: '0px' }}
                     >
                        <Input style={{ borderRadius: '5px' }} />
                     </Form.Item>
                  </Form>
               </div>
            </Col>

            <Col xs={24} style={{ marginBottom: '10px' }}>
               <Typography.Text strong >ข้อมูลติดต่อ</Typography.Text>
            </Col>

            <Col xs={24} style={{ marginBottom: '20px' }}>
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
                     labelCol={{ span: 4 }}
                     labelAlign='left'
                     wrapperCol={{
                        xs: {
                           span: 24,
                           offset: 0,
                        },
                        sm: {
                           span: 10,
                           offset: 4,
                        },
                     }}
                  >
                     <Form.Item
                        name='address'
                        label='ที่อยู่สำหรับส่งไปรษณีย์'
                        style={{ margin: '0px' }}
                     >
                        <Input style={{ borderRadius: '5px' }} />
                     </Form.Item>

                     <Divider style={{ margin: '10px 0px' }} />

                     <Form.Item
                        name='home'
                        label='ที่อยู่บรรทัดที่ 2 (บ้านเลขที่ ถนน)'
                        style={{ margin: '0px' }}
                     >
                        <Input style={{ borderRadius: '5px' }} />
                     </Form.Item>

                     <Divider style={{ margin: '10px 0px' }} />

                     <Form.Item
                        name='city'
                        label='เมือง'
                        style={{ margin: '0px' }}
                     >
                        <Input style={{ borderRadius: '5px' }} />
                     </Form.Item>

                     <Divider style={{ margin: '10px 0px' }} />

                     <Form.Item
                        name='postcode'
                        label='รหัสไปรษณีย์'
                        style={{ margin: '0px' }}
                     >
                        <Input style={{ borderRadius: '5px' }} />
                     </Form.Item>

                     <Divider style={{ margin: '10px 0px' }} />

                     <Form.Item
                        name='country'
                        label='ประเทศ'
                        style={{ margin: '0px' }}
                     >
                        <Select >
                           <Select.Option value='thai'>ไทย</Select.Option>
                           <Select.Option value='japan'>ญี่ปุ่น</Select.Option>
                        </Select>
                     </Form.Item>

                     <Divider style={{ margin: '10px 0px' }} />

                     <Form.Item
                        name='province'
                        label='จังหวัด'
                        style={{ margin: '0px' }}
                     >
                        <Input style={{ borderRadius: '5px' }} />
                     </Form.Item>

                     <Divider style={{ margin: '10px 0px' }} />

                     <Form.Item
                        name='resident'
                        label='Residential and mailing addresses are the same'
                        style={{ margin: '0px' }}
                     >
                        <Select >
                           <Select.Option value='yes'>ใช่</Select.Option>
                           <Select.Option value='no'>ไม่ใช่</Select.Option>
                        </Select>
                     </Form.Item>

                     <Divider style={{ margin: '10px 0px' }} />

                     <Form.Item
                        name='phone'
                        label='โทรศัพท์'
                        style={{ margin: '0px' }}
                     >
                        <Input style={{ borderRadius: '5px' }} />
                     </Form.Item>

                  </Form>
               </div>
            </Col>

            <Col xs={24} style={{ marginBottom: '10px' }}>
               <Typography.Text strong >อัปเดตรหัสผ่าน</Typography.Text>
            </Col>

            <Col xs={24} style={{ marginBottom: '20px' }}>
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
                     labelCol={{ span: 4 }}
                     labelAlign='left'
                     wrapperCol={{
                        xs: {
                           span: 24,
                           offset: 0,
                        },
                        sm: {
                           span: 10,
                           offset: 4,
                        },
                     }}
                  >
                     <Form.Item
                        name='password'
                        label='รหัสผ่านปัจจุบัน'
                        style={{ margin: '0px' }}
                     >
                        <Input.Password style={{ borderRadius: '5px' }} />
                     </Form.Item>
                  </Form>
               </div>
            </Col>

            <Col xs={24} style={{ marginBottom: '10px' }}>
               <Typography.Text strong >ข้อมูลการจ่ายค่าตอบแทน</Typography.Text>
            </Col>

            <Col xs={24} style={{ marginBottom: '20px' }}>
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
                     labelCol={{ span: 4 }}
                     labelAlign='left'
                     wrapperCol={{
                        xs: {
                           span: 24,
                           offset: 0,
                        },
                        sm: {
                           span: 10,
                           offset: 4,
                        },
                     }}
                  >
                     <Form.Item
                        name='payto'
                        label='จ่ายเงินให้แก่'
                        style={{ margin: '0px' }}
                     >
                        <Input style={{ borderRadius: '5px' }} />
                     </Form.Item>

                     <Divider style={{ margin: '10px 0px' }} />

                     <Form.Item
                        name='howtopay'
                        label='วิธีการจ่ายค่าตอบแทน'
                        style={{ margin: '0px' }}
                     >
                        <Select >
                           <Select.Option value='a'>a</Select.Option>
                           <Select.Option value='b'>b</Select.Option>
                        </Select>
                     </Form.Item>

                     <Divider style={{ margin: '10px 0px' }} />

                     <Form.Item
                        name='emailtopay'
                        label='อีเมลจ่ายค่าตอบแทน'
                        rules={[{ type: 'email' }]}
                        style={{ margin: '0px' }}
                     >
                        <Input style={{ borderRadius: '5px' }} />
                     </Form.Item>

                     <Divider style={{ margin: '10px 0px' }} />

                     <Form.Item
                        name='minofpay'
                        label='ยอดค่าตอบแทนขั้นต่ำ'
                        style={{ margin: '0px' }}
                     >
                        <Input style={{ borderRadius: '5px' }} />
                     </Form.Item>
                  </Form>
               </div>
            </Col>

            <Col xs={24} style={{ marginBottom: '10px' }}>
               <Typography.Text strong >ตัวเลือกการให้สิทธิ์ใช้งาน</Typography.Text>
            </Col>

            <Col xs={24} style={{ marginBottom: '20px' }}>
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
                     labelCol={{ span: 4 }}
                     labelAlign='left'
                     wrapperCol={{
                        xs: {
                           span: 24,
                           offset: 0,
                        },
                        sm: {
                           span: 10,
                           offset: 4,
                        },
                     }}
                  >
                     <Form.Item
                        name='imagesale'
                        label='ยอดขายภาพ'
                        style={{ margin: '0px' }}
                     >
                        <Select >
                           <Select.Option value='yes'>ใช่</Select.Option>
                           <Select.Option value='no'>ไม่ใช่</Select.Option>
                        </Select>
                     </Form.Item>

                     <Divider style={{ margin: '10px 0px' }} />

                     <Form.Item
                        name='vdosale'
                        label='ยอดขายวีดีโอ'
                        style={{ margin: '0px' }}
                     >
                        <Select >
                           <Select.Option value='yes'>ใช่</Select.Option>
                           <Select.Option value='no'>ไม่ใช่</Select.Option>
                        </Select>
                     </Form.Item>
                  </Form>
               </div>
            </Col>

            <Col xs={24} style={{ marginBottom: '10px' }}>
               <Typography.Text strong >ลบบัญชี</Typography.Text>
            </Col>

            <Col xs={24} style={{ marginBottom: '20px' }}>
               <div
                  style={{
                     width: '100%',
                     border: '1px solid #d9d9d9',
                     padding: '10px',
                     borderRadius: '5px'
                  }}
               >
                  <Typography.Text>การดำเนินการนี้จะลบข้อมูลส่วนบุคคลทั้งหมดของคุณอย่างถาวร</Typography.Text>
               </div>
            </Col>

         </Row>
      </>
   )
};
