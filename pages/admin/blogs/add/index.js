import React, { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { Editor } from '@tinymce/tinymce-react';
import { Form, Input, DatePicker, Select, Checkbox } from 'antd';
import { Button, Upload } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
import clsx from 'clsx';

import AdminLayout from '../../../../layouts/AdminLayout';
import { BlogsCreate, apiMediaPost } from '../../../../redux/slices/blogSlice';
import styles from './style.module.scss';

const { Option } = Select;
const CreateBlog = () => {
  const dateFormatList = 'DD/MM/YYYY';
  const dispatch = useDispatch();
  const router = useRouter();
  const options = [];
  const valueImg = useSelector((state) => state.blogs.handleJSX?.uploatIMG) ?? '';
  const [tags, setTag] = useState([]);

  const handleTag = (e) => {
    setTag(e);
  };

  for (let i = 'a'; i < 'z'; i++) {
    options.push({
      value: i.toString('z') + i,
      label: i.toString('z') + i,
    });
  }

  const handleChange = (e) => {
    dispatch(apiMediaPost(e.file));
  };
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const Data = {
      title: values.title,
      desc: values.desc,
      meta: values.meta,
      url_image_meta: values.url_image_meta,
      content: values.Editor.level.content,
      friendly_url: values.friendly_url,
      tags: tags,
      lang: values.lang,
      status: values.status,
      top: 0,
    };
    dispatch(BlogsCreate(Data));
    router.push('/admin/blogs');
  };
  const onReset = () => {
    form.resetFields();
  };
  const handleCancelAll = () => {
    router.push('/admin/blogs');
  };
  //////////////////////////////tiny
  const today = new Date();
  const month = today.getMonth() + 1 < 9 ? `0${today.getMonth() + 1}` : today.getMonth() + 1;
  let date = today.getDate() + '/' + month + '/' + today.getFullYear();

  const changeDate = (e) => {
    const months = e.$M + 1 < 9 ? `0${e.$M + 1}` : e.$M + 1;
    date = e.$D + '/' + months + '/' + e.$y;
  };
  const editorRef = useRef(null);

  return (
    <div className={clsx(styles.create_form)}>
      <Form form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item name="title">
          <Input placeholder="Title" label="Title" className="input_antd" />
        </Form.Item>

        <Form.Item name="desc">
          <Input placeholder="Description" label="Description" className="input_antd" />
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
          <Input placeholder="Meta" label="meta" className="input_meta" />
        </Form.Item>

        <Form.Item>
          <Select
            mode="tags"
            style={{
              width: '100%',
            }}
            name="tagmode"
            placeholder="Tags Mode"
            onChange={handleTag}
            options={options}
            className="select_input"
          />
        </Form.Item>

        <Form.Item name="url_image_meta">
          <div className="container">
            <Input placeholder="Url image upload" className="input_reset" value={valueImg} />
            <Upload className="UploadBlog" onChange={(e) => handleChange(e)} maxCount={1}>
              <Button htmlType="button" className="button_reset">
                Upload
              </Button>
            </Upload>
          </div>
        </Form.Item>

        <Form.Item name="friendly_url">
          <div className="container">
            <Input placeholder="Reset friendly" className="input_reset" />
            <Button htmlType="button" onClick={onReset} className="button_reset">
              Reset
            </Button>
          </div>
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
CreateBlog.Layout = AdminLayout;
export default CreateBlog;
