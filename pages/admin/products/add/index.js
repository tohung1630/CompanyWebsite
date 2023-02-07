import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import clsx from 'clsx';
import * as yup from 'yup';
import { CloudUploadOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select, Upload, Space, Row, Col, notification } from 'antd';

import { lang, tags, type } from '../constant/constant';
import { createProduct } from '../../../../redux/slices/productSlice';
import AdminLayout from '../../../../layouts/AdminLayout';
import style from './style.module.scss';

const schema = yup.object().shape({
  title: yup.string().required('Title is required').min(3, 'The title must be at least 3 characters'),
  desc: yup.string().required('Description is required'),
  content: yup.string().required('Content is required'),
});

const AddProduct = () => {
  const [img, setImg] = useState([]);
  const [file, setFile] = useState([]);
  const [hidden, setHidden] = useState(true);
  const error = useSelector((state) => state.products.error);
  const router = useRouter();
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const yupSync = {
    async validator({ field }, value) {
      await schema.validateSyncAt(field, { [field]: value });
    },
  };

  const postProduct = async (data) => {
    if (file.length > 0) {
      data.lang = data.lang ?? 'en';
      data.responsible_content = data.responsible_content ?? [''];
      data.tags = data.tags ?? [''];
      data.team_structure = data.team_structure ?? '';
      data.technology = data.technology ?? [''];
      data.type = getType(data.type);
      data.images = file;
      data.type_of_contract = data.type_of_contract ?? '';
      await dispatch(createProduct(data));
      setHidden(true);
      if (Object.entries(error).length !== 0) {
        complete('create faill !');
        return;
      }
      complete('create success !');
      return;
    }
    setHidden(false);
  };

  const getType = (type) => {
    if (typeof type === 'object') {
      return type.value;
    }
    if (typeof type === 'number') {
      return type;
    }
  };

  const createUrlImg = (file) => {
    setImg((prevState) => [...prevState, URL.createObjectURL(file)]);
    setFile((prevState) => [...prevState, file]);
    return false;
  };

  const changeFile = (file, indexParam) => {
    setFile((prevState) =>
      prevState.map((item, index) => {
        if (index === indexParam) {
          return file;
        }
        return item;
      }),
    );
    setImg((prevState) =>
      prevState.map((item, index) => {
        if (index === indexParam) {
          return URL.createObjectURL(file);
        }
        return item;
      }),
    );
    return false;
  };

  const complete = (message) => {
    notification.open({
      message: message,
    });
    removeAll();
    router.push('/admin/products');
  };

  const deleteFile = (indexParam) => {
    setFile((prevState) => prevState.filter((item, index) => index !== indexParam));
    setImg((prevState) => prevState.filter((item, index) => index !== indexParam));
  };

  const removeAll = () => {
    setFile([]);
    setImg([]);
  };

  return (
    <>
      <Form className="addForm" layout="vertical" form={form} onFinish={postProduct}>
        <Form.Item name="title" rules={[yupSync]}>
          <Input placeholder="Title" className={style.inputProductForm} />
        </Form.Item>
        <Form.Item name="desc" rules={[yupSync]}>
          <Input className={style.inputProductForm} placeholder="Description" />
        </Form.Item>
        <Form.Item name="content" rules={[yupSync]}>
          <Input className={style.inputProductForm} placeholder="Content" />
        </Form.Item>
        <Form.Item name="type_of_contract">
          <Input className={style.inputProductForm} placeholder="Type of contract" />
        </Form.Item>
        <Form.Item className="selectProductForm" name="technology">
          <Select mode="tags" placeholder="Technology" options={tags} />
        </Form.Item>
        <Form.Item className="selectProductForm" name="responsible_content">
          <Select mode="tags" placeholder="Obligation" options={tags} />
        </Form.Item>
        <Form.Item name="team_structure">
          <Input className={style.inputProductForm} placeholder="Team structure" />
        </Form.Item>
        <Form.Item className={style.item} name="lang">
          <Select className={clsx('langSelectProductForm', style.input)} defaultValue="en" options={lang} />
        </Form.Item>
        <Form.Item className={style.imgUpload}>
          <Space size={8}>
            <Upload showUploadList={false} accept=".png, .jpg" beforeUpload={createUrlImg}>
              <Button className={style.uploadBtn}>
                <CloudUploadOutlined />
                upload img
              </Button>
            </Upload>
            <Button className={style.uploadBtn} onClick={removeAll}>
              <DeleteOutlined />
              remove all img
            </Button>
          </Space>
          <Row gutter={20} className={style.imgView}>
            {img &&
              img.map((item, index) => (
                <Col md={6} sm={12} key={index} className={style.marginBottom}>
                  <img src={item} className={style.img} />
                  <Space>
                    <Upload beforeUpload={(file) => changeFile(file, index)} showUploadList={false}>
                      <Button className={style.imgBtn}>
                        <CloudUploadOutlined />
                        update
                      </Button>
                    </Upload>
                    <Button className={style.imgBtn} onClick={() => deleteFile(index)}>
                      <DeleteOutlined />
                      remove
                    </Button>
                  </Space>
                </Col>
              ))}
          </Row>
          <span className={clsx(style.error, { [style.hidden]: hidden })}>
            The image The images must have at least 1 item
          </span>
        </Form.Item>
        <Form.Item className="selectProductForm" name="tags">
          <Select mode="tags" placeholder="Tags" options={tags} />
        </Form.Item>
        <Form.Item className="selectProductTypeForm" name="type">
          <Select options={type} placeholder="Type" defaultValue={{ label: 'All', value: 2 }} />
        </Form.Item>
        <Form.Item className={style.formAction}>
          <Space size={30}>
            <Button className={style.submitBtn} htmlType="submit">
              submit
            </Button>
            <Button className={style.resetBtn} htmlType="reset">
              reset
            </Button>
            <Link href="/admin/products">
              <Button className={style.cancelBtn}>cancel</Button>
            </Link>
          </Space>
        </Form.Item>
      </Form>
    </>
  );
};

AddProduct.Layout = AdminLayout;

export default AddProduct;
