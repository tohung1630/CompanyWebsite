import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, Select, Checkbox, Button, Space, Upload, notification } from 'antd';
import { CloudUploadOutlined, DeleteFilled } from '@ant-design/icons';

import AdminLayout from '../../../../layouts/AdminLayout';
import { createBanner } from '../../../../redux/slices/banerSlices';
import styles from './style.module.scss';

const Ctreate = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [form] = Form.useForm();
  const [img, setImg] = useState('');
  const [file, setFile] = useState('');
  const [hide, setHide] = useState(false);

  const option = [
    {
      value: 'en',
      label: 'English',
    },
    {
      value: 'vi',
      label: 'VietNam',
    },

    {
      value: 'jpn',
      label: 'Japan',
    },
  ]
  const handleCancel = () => {
    router.push('/admin/banner');
  };

  const removeImg = () => {
    setImg('');
    setFile('');
  };

  const complete = () => {
    notification.open({
      message: 'create success !',
    });
  };

  const showData = (data) => {
    if (file != '') {
      data.title = data.title ?? '';
      data.desc = data.desc ?? '';
      data.link = data.link ?? '';
      data.title = data.title ?? '';
      data.lang = data.lang ?? 'en';
      data.status = data.status ?? 0
      data.images = file;
      console.log(data.status);
      dispatch(createBanner(data));
      complete();
      setHide(false)
      removeImg();
      setTimeout(() => {
        router.push("/admin/banner")
      }, 2000)

      return;
    }
    setHide(true)
  };

  return (
    <Form className="create_banner" form={form} onFinish={showData}>
      <Form.Item name="title">
        <Input placeholder="Title" />
      </Form.Item>
      <Form.Item name="desc">
        <Input placeholder="Description" />
      </Form.Item>
      <Form.Item  name="link">
        <Input placeholder="Link" />
      </Form.Item>
      <Form.Item name="lang">
        <Select
          defaultValue="en"
          style={{
            width: 130,
          }}
          options={option}
        />
      </Form.Item>
      <Form.Item name="status">
        <Checkbox /> Public
      </Form.Item>
      <Form.Item className="upload_remove" name="images">
        <Space size={30}>
          <Upload
            listType="picture"
            action={'http://localhost:3000/'}
            showUploadList={false}
            accept=".png, .jpg"
            beforeUpload={(file) => {
              setFile(file);
              setImg(URL.createObjectURL(file));
            }}
          >
            <Button>
              <CloudUploadOutlined /> Upload img
            </Button>
          </Upload>
          <Button onClick={removeImg}>
            <DeleteFilled /> Remove img
          </Button>
        </Space>
        <Form.Item className={`${img ? styles['block_img'] : ''}`}>
          <img src={img} />
        </Form.Item>
        {hide && <p className={styles['error']} >please select image</p>}
      </Form.Item>
      <Form.Item className="option_btn">
        <Button htmlType="submit">Create</Button>
        <Button htmlType="reset">Reset</Button>
        <Button onClick={handleCancel}>Cancel</Button>
      </Form.Item>
    </Form>
  );
};
Ctreate.Layout = AdminLayout;

export default Ctreate;
