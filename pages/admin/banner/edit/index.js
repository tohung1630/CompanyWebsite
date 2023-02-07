import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Select, Checkbox, Button, Space, Upload, notification } from 'antd';
import { CloudUploadOutlined, DeleteFilled } from '@ant-design/icons';

import AdminLayout from '../../../../layouts/AdminLayout';
import { getEditData, updateBanner } from '../../../../redux/slices/banerSlices';
import styles from './style.module.scss';

const Edit = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [form] = Form.useForm();
  const [img, setImg] = useState('');
  const [file, setFile] = useState('');
  const [hide, setHide] = useState(false);
  const data = useSelector((state) => state.banner.data);

  const handleCancel = () => {
    router.push('/admin/banner');
  };
  const removeImg = () => {
    setImg('');
    setFile('');
  };

  const complete = () => {
    notification.open({
      message: 'update success !',
    });
  };

  const showData = (data) => {
    if (file != '') {
      const editData = {
        id: router.query.id,
        data: {
          title: data.title ?? '',
          desc: data.desc ?? '',
          link: data.link ?? '',
          lang: data.lang ?? 'en',
          status: data.status ? 1: 0,
          images: file,
          _method: 'PUT',
        },
      };
      dispatch(updateBanner(editData));
      complete();
      setHide(false)
      removeImg();
      setTimeout(() => {
        router.push('/admin/banner');
      }, 2000);
      return;
    }
    setHide(true)
  };

  useEffect(() => {
    dispatch(getEditData(router.query.id));
  }, [router.query.id]);

  useEffect(() => {
    form.setFieldsValue({
      title: data?.data?.data.title,
      desc:data?.data?.data.desc,
      link: data?.data?.data.link,
      lang: data?.data?.data.lang,
      status: data?.data?.data.status,
    });
    setImg(data?.data?.banner);
  }, [data]);

  return (
    <Form className="create_banner" form={form} onFinish={showData}>
      <Form.Item name="title">
        <Input placeholder="Title" />
      </Form.Item>
      <Form.Item name="desc">
        <Input placeholder="Description" />
      </Form.Item>
      <Form.Item name="link">
        <Input placeholder="Link" />
      </Form.Item>
      <Form.Item name="lang">
        <Select
          defaultValue="en"
          style={{
            width: 130,
          }}
          options={[
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
          ]}
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
        <Form.Item className={styles['block_img']}>
          <img src={img} />
        </Form.Item>
        {hide && <p className={styles['error']} >please select image</p>}
      </Form.Item>
      <Form.Item className="option_btn">
        <Button htmlType="submit">Update</Button>
        <Button htmlType="reset">Reset</Button>
        <Button onClick={handleCancel}>Cancel</Button>
      </Form.Item>
    </Form>
  );
};
Edit.Layout = AdminLayout;

export default Edit;
