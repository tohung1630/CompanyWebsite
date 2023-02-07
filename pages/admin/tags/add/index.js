import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { TagsCreate, apiMediaPost } from '../../../../redux/slices/tagSlice';
import { useDispatch } from 'react-redux';

import { Form, Input, Select, Checkbox, Button } from 'antd';
import clsx from 'clsx';
import { registerSchema } from './partials/registerForm';

import AdminLayout from '../../../../layouts/AdminLayout';
import styles from './style.module.scss';

const yupSync = {
  async validator({ field }, value) {
    await registerSchema.validateSyncAt(field, { [field]: value });
  },
};
const CreateTags = () => {
  const { Option } = Select;
  const dispatch = useDispatch();

  const router = useRouter();

  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  // handle file upload
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const Data = {
      name: values.title,
      lang: values.lang,
      is_trend: values.is_trend ? 1 : 0,
    };
    dispatch(TagsCreate(Data));
    router.push('/admin/tags');
  };

  const handleCancelAll = () => {
    router.push('/admin/tags');
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
            <Checkbox>Tag is trend</Checkbox>
          </div>
        </Form.Item>
        <div className={clsx(styles.third_button)}>
          <Button className="button_create" type="primary" htmlType="submit">
            Create
          </Button>
          <Button htmlType="button" className="button_cancel" onClick={handleCancelAll}>
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  );
};

CreateTags.Layout = AdminLayout;
export default CreateTags;
