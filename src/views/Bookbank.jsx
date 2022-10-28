import React from 'react';
import {
	Button,
	Col,
	Form,
	Input,
	Row,
} from 'antd';

export default function Bookbank() {
	const [form] = Form.useForm();

	const onFinish = (values) => {
		console.log('Received values of form: ', values);
	};

	return (
		<Row>
			<Col xs={24} style={{ marginBottom: '20px' }}>
				<Form
					form={form}
					layout='vertical'
					onFinish={onFinish}
				>
					<Col xs={24} md={8}>
						<Form.Item
							name="bank"
							label="ธนาคาร"
						>
							<Input />
						</Form.Item>

						<Form.Item
							name="account_number"
							label="เลขที่บัญชี"
						>
							<Input />
						</Form.Item>

						<Form.Item
							name="account"
							label="ชื่อบัญชี"
						>
							<Input />
						</Form.Item>
					</Col>

					<Col xs={24} md={8} >
						<Row justify='end'>
							<Col>
								<Form.Item>
									<Button type="primary" htmlType="submit" >
										บันทึก
									</Button>
								</Form.Item>
							</Col>
						</Row>
					</Col>

				</Form>
			</Col>
		</Row>
	)
};
