import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import clsx from 'clsx';
import * as yup from 'yup';
import { CloudUploadOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select, Upload, Space, Row, Col, notification } from 'antd';

import { lang, tags, type } from '../constant/constant';
import AdminLayout from '../../../../layouts/AdminLayout';
import { getEditData, updateProduct } from '../../../../redux/slices/productSlice';
import style from './style.module.scss';

const schema = yup.object().shape({
  title: yup.string().required('Title is required').min(3, 'The title must be at least 3 characters'),
  description: yup.string().required('Description is required'),
  content: yup.string().required('Content is required'),
});

const EditProduct = () => {
  const [img, setImg] = useState([]);
  const [file, setFile] = useState([]);
  const [imgRequired, setImgRequired] = useState(true);
  const data = useSelector((state) => state.products.data);
  const error = useSelector((state) => state.products.error);
  const router = useRouter();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { TextArea } = Input;

  const yupSync = {
    async validator({ field }, value) {
      await schema.validateSyncAt(field, { [field]: value });
    },
  };

  //data processing function
  const setData = (data) => ({
    id: router.query.id,
    data: {
      title: data.title,
      desc: data.description,
      content: data.content,
      lang: data.lang ?? 'en',
      technology: data.tech ?? [''],
      tags: data.tags ?? [''],
      type_of_contract: data.contract ?? '',
      team_structure: data.team_structure ?? '',
      responsible_content: data.obligation.length !== 0 ? data.obligation : [''],
      type: getType(data.type),
      _method: 'PUT',
    },
  });

  const getType = (typeParam) => {
    if (typeof typeParam === 'object') {
      return typeParam.value;
    }
    if (typeof typeParam === 'number') {
      return typeParam;
    }
  };

  const sendUpdateData = async (data) => {
    if (img.length > 0) {
      const editData = setData(data);
      if (file) {
        editData.data.images = file;
      }
      await dispatch(updateProduct(editData));
      if (Object.entries(error).length !== 0) {
        complete('update fail !');
        return;
      }
      complete('update success !');
      return;
    }
    setImgRequired(false);
  };

  const complete = (message) => {
    img.forEach((item) => {
      URL.revokeObjectURL(item);
    });
    setImgRequired(true);
    notification.open({
      message: message,
    });
    router.push('/admin/products');
  };

  const setField = () => {
    form.setFieldsValue({
      title: data.title,
      description: data.desc,
      content: data.content,
      contract: data.type_of_contract,
      tech: data.technology,
      team_structure: data.team_structure,
      tags: data.tags,
      type: type.filter((item) => item.value === data.type)[0],
      lang: data.lang,
      obligation: data.responsible_content,
    });
  };

  // image processing functions
  const removeAll = () => {
    setFile([]);
    setImg([]);
  };

  const deleteFile = (indexParam) => {
    if (file.length > 0) {
      setFile((prevState) => [...prevState.filter((item, index) => index !== indexParam)]);
      setImg((prevState) => [...prevState.filter((item, index) => index !== indexParam)]);
    }
    removeAll();
  };

  const clearLink = () => {
    if (file.length === 0) {
      setImg([]);
    }
  };

  const createUrlImg = (file) => {
    setImg((prevState) => [...prevState, URL.createObjectURL(file)]);
    setFile((prevState) => [...prevState, file]);
    return false;
  };

  const changeFile = (file, indexParam) => {
    if (file.length > 0) {
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
    }
    clearLink();
    createUrlImg(file);
    return false;
  };

  // useEffect
  useEffect(() => {
    dispatch(getEditData(router.query.id));
  }, [router.query.id]);

  useEffect(() => {
    setField();
    setImg(data.works);
    setFile([]);
  }, [data]);

  return (
    <>
      <Form layout="vertical" form={form} onFinish={sendUpdateData}>
        <Form.Item name="title" rules={[yupSync]}>
          <Input placeholder="Title" className={style.inputProductForm} />
        </Form.Item>
        <Form.Item name="description" rules={[yupSync]}>
          <Input className={style.inputProductForm} placeholder="Description" />
        </Form.Item>
        <Form.Item name="content" rules={[yupSync]}>
          <TextArea className={style.inputProductForm} placeholder="Content" autoSize={{ minRows: 1, maxRows: 3 }} />
        </Form.Item>
        <Form.Item name="contract">
          <Input className={style.inputProductForm} placeholder="Type of contract" />
        </Form.Item>
        <Form.Item className="selectProductForm" name="tech">
          <Select mode="tags" placeholder="Technology" options={tags}></Select>
        </Form.Item>
        <Form.Item className="selectProductForm" name="obligation">
          <Select mode="tags" placeholder="Obligation" options={tags}></Select>
        </Form.Item>
        <Form.Item name="team_structure">
          <Input className={style.inputProductForm} placeholder="Team structure" />
        </Form.Item>
        <Form.Item name="lang" className={style.item}>
          <Select className={clsx('langSelectProductForm', style.input)} defaultValue={data.lang} options={lang} />
        </Form.Item>
        <Form.Item className={style.imgUpload}>
          <Space size={8}>
            <Upload showUploadList={false} accept=".png, .jpg" beforeUpload={createUrlImg} onClick={clearLink}>
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
                <Col md={6} sm={12} key={index}>
                  <img src={item} className={style.img} />
                  <Space>
                    <Upload multiple={false} beforeUpload={(file) => changeFile(file, index)} showUploadList={false}>
                      <Button>
                        <CloudUploadOutlined />
                        update
                      </Button>
                    </Upload>
                    <Button onClick={() => deleteFile(index)}>
                      <DeleteOutlined />
                      remove
                    </Button>
                  </Space>
                </Col>
              ))}
          </Row>
        </Form.Item>
        <Form.Item className={style.textCenter}>
          <span className={clsx(style.error, { [style.displayNone]: imgRequired })}>
            The images must have at least 1 item
          </span>
        </Form.Item>
        <Form.Item className="selectProductForm" name="tags">
          <Select mode="tags" placeholder="Tags" options={tags}></Select>
        </Form.Item>
        <Form.Item className="selectProductTypeForm" name="type">
          <Select options={type} placeholder="Type" defaultValue={type[0]} />
        </Form.Item>
        <Form.Item className={style.formAction}>
          <Space size={30} className={style.width}>
            <Button className={style.submitBtn} htmlType="submit">
              update
            </Button>
            <Button className={style.resetBtn} onClick={removeAll} htmlType="reset">
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

EditProduct.Layout = AdminLayout;

export default EditProduct;
