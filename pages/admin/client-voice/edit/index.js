import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Form, Input, Select, Checkbox, Space } from 'antd';
import { Button, Upload } from 'antd';
import clsx from 'clsx';

import { registerSchema } from './partials/registerForm';
import { CloudUploadOutlined, DeleteOutlined, UploadOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { voiceUpdate } from '../../../../redux/slices/clientVoice';

import AdminLayout from '../../../../layouts/AdminLayout';
import styles from './style.module.scss';

const yupSync = {
  async validator({ field }, value) {
    await registerSchema.validateSyncAt(field, { [field]: value });
  },
};
const EditBlog = () => {
  const [img, setImg] = useState('');
  const [file, setFile] = useState([]);
  const { Option } = Select;
  const dispatch = useDispatch();
  const router = useRouter();
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  // handle file upload
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const [form] = Form.useForm();

  const updateTags = (values) => {
    const Data = {
      title: values.title,
      desc: values.desc,
      company: values.company,
      lang: values.lang,
      status: values.status ? 1 : 0,
      image: file,
      _method: 'PUT',
    };
    dispatch(voiceUpdate({ id: router.query.id, Data }));
    router.push('/admin/client-voice');
  };
  const dataUpdate = useSelector((state) => state.voice.dataUpdate);
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

  useEffect(() => {
    form.setFieldsValue({
      id: dataUpdate?.id,
      title: dataUpdate?.title,
      desc: dataUpdate?.desc,
      lang: dataUpdate?.lang,
      status: dataUpdate?.status ? 1 : 0,
    });
    setImg(dataUpdate?.voice);
  }, [dataUpdate]);

  return (
    <div className={clsx(styles.create_form)}>
      <Form
        form={form}
        name="control-hooks"
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        onFinish={updateTags}
      >
        <Form.Item name="title" rules={[yupSync]}>
          <Input placeholder="Title" label="Title" className="input_antd" defaultValue={dataUpdate?.title} />
        </Form.Item>

        <Form.Item name="desc" rules={[yupSync]}>
          <Input placeholder="Description" label="Description" className="input_antd" defaultValue={dataUpdate?.desc} />
        </Form.Item>

        <Form.Item name="company" rules={[yupSync]}>
          <Input placeholder="Company" label="Company" className="input_antd" defaultValue={dataUpdate?.company} />
        </Form.Item>

        <div className="select_language">
          <Form.Item name="lang">
            <Select
              style={{
                width: 130,
              }}
              initialValue={dataUpdate?.lang}
            >
              <Option value="en">English</Option>
              <Option value="vi">VietNam</Option>
              <Option value="ja">Japan</Option>
            </Select>
          </Form.Item>
        </div>

        <div className={clsx(styles.checkbox)}>
          <Form.Item name="status" valuePropName="checked">
            <Checkbox type="checkbox">Public</Checkbox>
          </Form.Item>
        </div>

        <Form.Item className="upload_remove_image" name="image">
          <Space size={30}>
            <Upload
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
          {/* className={`${img ? styles["block_img"]: ''}` */}
          <div className="size_img">
            <Form.Item className={`${img ? styles['block_img'] : ''}`}>
              <img className="image_upload" src={img} />
            </Form.Item>
          </div>
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
EditBlog.Layout = AdminLayout;
export default EditBlog;
