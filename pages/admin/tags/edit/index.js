import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { TagsUpdate } from '../../../../redux/slices/tagSlice';
import { useSelector, useDispatch } from 'react-redux';

import { Form, Input, Select, Checkbox, Space } from 'antd';
import { Button } from 'antd';
import clsx from 'clsx';
import { registerSchema } from './partials/registerForm';

import AdminLayout from '../../../../layouts/AdminLayout';
import styles from './style.module.scss';

const yupSync = {
  async validator({ field }, value) {
    await registerSchema.validateSyncAt(field, { [field]: value });
  },
};
const EditTags = () => {
  const { Option } = Select;
  const dispatch = useDispatch();
  const dataUpdate = useSelector((state) => state.tags.dataUpdate);
  const router = useRouter();
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const [form] = Form.useForm();

  const updateTags = (values) => {
    const Data = {
      name: values.title,
      lang: values.lang,
      is_trend: values.is_trend ? 1 : 0,
      _method: 'PUT',
    };
    dispatch(TagsUpdate({ id: router.query.id, Data }));
    router.push('/admin/tags');
  };

  form.setFieldsValue({
    id: dataUpdate?.data?.id,
    name: dataUpdate?.data?.name,
    desc: dataUpdate?.data?.desc,
    lang: dataUpdate?.data?.lang,
    is_trend: dataUpdate?.data?.is_trend ? 1 : 0,
  });
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
        onFinish={updateTags}
      >
        <Form.Item name="title" rules={[yupSync]}>
          <Input placeholder="Title" label="Title" className="input_antd" defaultValue={dataUpdate?.data?.name} />
        </Form.Item>

        <div className="select_language">
          <Form.Item name="lang">
            <Select
              style={{
                width: 130,
              }}
              initialValue={dataUpdate?.data?.lang}
            >
              <Option value="en">English</Option>
              <Option value="vi">VietNam</Option>
              <Option value="ja">Japan</Option>
            </Select>
          </Form.Item>
        </div>

        <div className={clsx(styles.checkbox)}>
          <Form.Item name="is_trend" valuePropName="checked">
            <Checkbox type="checkbox"> Tag is trend</Checkbox>
          </Form.Item>
        </div>

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

EditTags.Layout = AdminLayout;
export default EditTags;
