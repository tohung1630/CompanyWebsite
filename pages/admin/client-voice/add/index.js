import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { VoiceCreate } from '../../../../redux/slices/clientVoice';

import { Form, Input, Select, Checkbox, Space } from 'antd';
import { Button, Upload } from 'antd';
import clsx from 'clsx';
import { registerSchema } from './partials/registerForm';
import { CloudUploadOutlined, DeleteOutlined, UploadOutlined } from '@ant-design/icons';

import AdminLayout from '../../../../layouts/AdminLayout';
import styles from './style.module.scss';

const yupSync = {
  async validator({ field }, value) {
    await registerSchema.validateSyncAt(field, { [field]: value });
  },
};
const CreateBlog = () => {
  const dispatch = useDispatch();
  const [img, setImg] = useState('');
  const [file, setFile] = useState([]);
  const router = useRouter();
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  // handle file upload
  const [form] = Form.useForm();
  const onFinish = (values) => {
    const Data = {
      title: values.title,
      desc: values.desc,
      company: values.company,
      lang: values.lang,
      status: values.status ? 1 : 0,
      image: file,
    };
    dispatch(VoiceCreate(Data));
    router.push('/admin/client-voice');
  };
  const onReset = () => {
    form.resetFields();
    setImg('');
  };
  const handleCancelAll = () => {
    router.push('/admin/client-voice');
  };
  const handleRemoveImg = () => {
    setImg('');
  };

  return (
    <div className={clsx(styles.create_form)}>
      <Form
        form={form}
        name="control-hooks"
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        onFinish={onFinish}
      >
        <Form.Item name="title" rules={[yupSync]}>
          <Input placeholder="Title" label="Title" className="input_antd" />
        </Form.Item>

        <Form.Item name="desc" rules={[yupSync]}>
          <Input placeholder="Description" label="Description" className="input_antd" />
        </Form.Item>

        <Form.Item name="company" rules={[yupSync]}>
          <Input placeholder="Company" label="Company" className="input_antd" />
        </Form.Item>

        <div className="select_language">
          <Form.Item name="lang">
            <Select
              defaultValue="English"
              style={{
                width: 130,
              }}
            >
              <Option value="en">English</Option>
              <Option value="vi">VietNam</Option>
              <Option value="ja">Japan</Option>
            </Select>
          </Form.Item>
        </div>

        <Form.Item name="status" valuePropName="checked">
          <div className={clsx(styles.checkbox)}>
            <Checkbox>Public</Checkbox>
          </div>
        </Form.Item>

        <Form.Item className="upload_remove_image" name="image">
          <Space size={30}>
            <Upload
              maxCount={1}
              listType="picture"
              action={'http://localhost:3000/'}
              showUploadList={false}
              accept=".png, .jpg, ."
              beforeUpload={(file) => {
                setFile(file);
                setImg(URL.createObjectURL(file));
              }}
            >
              <Button className="button_uploadimg">
                <CloudUploadOutlined />
                Upload Img
              </Button>
            </Upload>

            <Button className="button_uploadimg" onClick={handleRemoveImg} htmlType="button">
              <DeleteOutlined />
              Remove img
            </Button>
          </Space>
          <Form.Item className={`${img ? styles['block_img'] : ''}`}>
            <img className="image_upload" src={img} />
          </Form.Item>
        </Form.Item>
        <div className={clsx(styles.third_button)}>
          <Button className="button_create" type="primary" htmlType="submit">
            Create
          </Button>
          <Button htmlType="button" onClick={onReset} className="button_resetall">
            Reset
          </Button>

          <Button htmlType="button" className="button_cancel" onClick={handleCancelAll}>
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  );
};
CreateBlog.Layout = AdminLayout;
export default CreateBlog;
