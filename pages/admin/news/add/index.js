import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Editor } from '@tinymce/tinymce-react';
import { Form, Input, DatePicker, Select, Checkbox } from 'antd';
import { Button, Upload } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';

import { apiMediaPost, NewsCreate, returnNews } from '../../../../redux/slices/newsSlices';
import AdminLayout from '../../../../layouts/AdminLayout';
import styles from './style.module.scss';

const { Option } = Select;

const CreateBlog = () => {
  const valueImg = useSelector((state) => state.news.handleJSX?.uploatIMG) ?? '';

  const dispatch = useDispatch();

  const dateFormatList = 'DD/MM/YYYY';

  const router = useRouter();

  const handleChange = (e) => {
    dispatch(apiMediaPost(e.file));
  };

  // handle file upload

  const [form] = Form.useForm();

  const onFinish = (values) => {
    const Data = {
      title: values.title,
      desc: values.desc,
      meta: values.meta,
      url_image_meta: values.url_image_meta,
      content: values.Editor.level.content,
      friendly_url: values.friendly_url,
      lang: values.lang,
      status: values.state,
      top: 0,
      // created_at: date,
    };
    dispatch(NewsCreate(Data));
    router.push('/admin/news');
  };
  const onReset = () => {
    form.resetFields();
  };
  const handleCancelAll = () => {
    router.push('/admin/news');
  };
  const today = new Date();
  const month = today.getMonth() + 1 < 9 ? `0${today.getMonth() + 1}` : today.getMonth() + 1;
  let date = today.getDate() + '/' + month + '/' + today.getFullYear();

  const changeDate = (e) => {
    const months = e.$M + 1 < 9 ? `0${e.$M + 1}` : e.$M + 1;
    date = e.$D + '/' + months + '/' + e.$y;
  };
  //////////////////////////////tiny
  const editorRef = useRef(null);

  return (
    <div className={clsx(styles.create_form)}>
      <Form form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item name="title">
          <Input placeholder="Title" label="Title" className="input_antd" required />
        </Form.Item>

        <Form.Item name="desc">
          <Input placeholder="Description" label="Description" className="input_antd" required />
        </Form.Item>

        <Form.Item name="DatePicker">
          <DatePicker
            onChange={(e) => changeDate(e)}
            defaultValue={dayjs(date, dateFormatList)}
            format={dateFormatList}
            className="datepicker"
          />
        </Form.Item>

        <Form.Item name="meta">
          <Input placeholder="tags" label="tags" className="input_antd" required />
        </Form.Item>

        <Form.Item name="url_image_meta">
          <div className="container">
            <Input placeholder="Url image upload" className="input_reset" value={valueImg} required />
            <Upload className="UploadNew" onChange={(e) => handleChange(e)} maxCount={1}>
              <Button
                htmlType="button"
                // onClick={onUpLoatImg}
                className="button_reset"
              >
                Upload
              </Button>
            </Upload>
          </div>
        </Form.Item>

        <Form.Item name="friendly_url">
          <div className="container">
            <Input placeholder="Reset friendly" className="input_reset" required />
            <Button htmlType="button" onClick={onReset} className="button_reset">
              Reset
            </Button>
          </div>
        </Form.Item>

        <div className="select_language">
          <Form.Item name="lang">
            <Select
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

        <div className={clsx(styles.checkbox)}>
          <Form.Item name="status" valuePropName="checked">
            <Checkbox>Public</Checkbox>
          </Form.Item>
        </div>
        <Form.Item name="Editor">
          <Editor
            className="editor_form"
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue=""
            init={{
              height: 500,
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount',
              ],
              toolbar:
                'undo redo | formatselect | ' +
                'bold italic backcolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help|' +
                'fontsize',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            }}
          />
        </Form.Item>

        <div className={clsx(styles.third_button)}>
          <Button htmlType="submit" className="button_create">
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
// https://web.f02.relipa.vn/admin/signin
CreateBlog.Layout = AdminLayout;
export default CreateBlog;
