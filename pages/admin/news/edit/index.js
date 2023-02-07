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

import {
  apiMediaPost,
  NewsUpdate,
  changeTitles,
  changeDescs,
  changeMetas,
  changeFURLs,
  changeLangs,
  clickCheckBoxBlogs,
  changeEditors,
} from '../../../../redux/slices/newsSlices';
import AdminLayout from '../../../../layouts/AdminLayout';
import styles from '../add/style.module.scss';

const { Option } = Select;

const CreateBlog = () => {
  const valueImg = useSelector((state) => state.news.handleJSX?.uploatIMG);
  const dataUpdate = useSelector((state) => state.news.dataUpdate);
  const date = (dataUpdate) => {
    const year = dataUpdate?.data?.created_at.slice(0, 4);
    const month = dataUpdate?.data?.created_at.slice(5, 7);
    const day = dataUpdate?.data?.created_at.slice(8, 10);
    return `${day}/${month}/${year}`;
  };
  let dateUpdate = date(dataUpdate);

  const dispatch = useDispatch();

  const dateFormatList = 'DD/MM/YYYY';

  const router = useRouter();

  const handleChange = (e) => {
    dispatch(apiMediaPost(e.file));
  };

  // handle file upload

  const [form] = Form.useForm();

  const updateNews = (values) => {
    const Data = {
      // created_at: dateUpdate,
      title: values.title,
      desc: values.desc,
      meta: values.meta,
      url_image_meta: values.url_image_meta,
      content: values.Editor.level.content,
      friendly_url: values.friendly_url,
      lang: values.lang,
      status: values.status,
      top: 0,
      _method: 'PUT',
    };
    dispatch(NewsUpdate({ id: values.id, Data }));
    router.push('/admin/news');
  };
  const onReset = () => {
    form.resetFields();
  };
  const handleCancelAll = () => {
    router.push('/admin/news');
  };

  //////////////////////////////tiny
  const editorRef = useRef(null);

  form.setFieldsValue({
    id: dataUpdate?.data?.id,
    title: dataUpdate?.data?.title,
    desc: dataUpdate?.data?.desc,
    // DatePicker: dataUpdate?.data?.updated_at,
    meta: dataUpdate?.data?.meta,
    url_image_meta: valueImg != '' ? valueImg : dataUpdate?.data?.url_image_meta,
    friendly_url: dataUpdate?.data?.friendly_url,
    lang: dataUpdate?.data?.lang,
    status: dataUpdate?.data?.status,
    // Editor: dataUpdate?.data?.content,
  });

  const changeDate = (e) => {
    const months = e.$M + 1 < 9 ? `0${e.$M + 1}` : e.$M + 1;
    const dateChang = e.$D + '/' + months + '/' + e.$y;
    dateUpdate = dateChang;
  };

  const changeTitle = (e) => {
    dispatch(changeTitles(e.target?.value));
  };

  const changeDesc = (e) => {
    dispatch(changeDescs(e.target.value));
  };

  const changeMeta = (e) => {
    dispatch(changeMetas(e.target.value));
  };

  const changeFURL = (e) => {
    dispatch(changeFURLs(e.target.value));
  };

  const changeLang = (e) => {
    dispatch(changeLangs(e));
  };

  const clickCheckBoxBlog = () => {
    dispatch(clickCheckBoxBlogs());
  };

  return (
    <div className={clsx(styles.create_form)}>
      <Form form={form} name="control-hooks" onFinish={updateNews}>
        <Form.Item name="id" className={styles.inputId}>
          <Input initialValue={dataUpdate?.data?.id} className={styles.inputId} />
        </Form.Item>

        <Form.Item name="title">
          <Input
            placeholder="Title"
            label="Title"
            className="input_antd"
            onChange={(e) => changeTitle(e)}
            value={dataUpdate?.data?.title}
          />
        </Form.Item>

        <Form.Item name="desc">
          <Input
            placeholder="Description"
            label="Description"
            className="input_antd"
            onChange={(e) => changeDesc(e)}
            value={dataUpdate?.data?.desc}
          />
        </Form.Item>

        <Form.Item name="DatePicker">
          <DatePicker
            onChange={(e) => changeDate(e)}
            defaultValue={dayjs(dateUpdate, dateFormatList)}
            format={dateFormatList}
            className="datepicker"
          />
        </Form.Item>

        <Form.Item name="meta">
          <Input
            placeholder="tags"
            label="tags"
            className="input_antd"
            value={dataUpdate?.data?.meta}
            onChange={(e) => changeMeta(e)}
          />
        </Form.Item>

        <Form.Item name="url_image_meta">
          <div className="container">
            <Input
              placeholder="Url image upload"
              className="input_reset"
              value={valueImg != '' ? valueImg : dataUpdate?.data?.url_image_meta}
              initialValue={valueImg != '' ? valueImg : dataUpdate?.data?.url_image_meta}
            />
            <Upload className="UploadNew" onChange={(e) => handleChange(e)} maxCount={1}>
              <Button htmlType="button" className="button_reset">
                Upload
              </Button>
            </Upload>
          </div>
        </Form.Item>

        <Form.Item name="friendly_url">
          <div className="container">
            <Input
              onChange={(e) => changeFURL(e)}
              placeholder="Reset friendly"
              className="input_reset"
              initialValue={dataUpdate?.data?.friendly_url}
              value={dataUpdate?.data?.friendly_url}
            />
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
              value={dataUpdate?.data?.lang}
              onChange={(e) => changeLang(e)}
            >
              <Option value="en">English</Option>
              <Option value="vi">VietNam</Option>
              <Option value="ja">Japan</Option>
            </Select>
          </Form.Item>
        </div>

        <div className={clsx(styles.checkbox)}>
          <Form.Item name="status" valuePropName="checked">
            <input type="checkbox" onClick={clickCheckBoxBlog} checked={dataUpdate?.data?.status == 1 ? true : false} />
            <p className={styles.public}> Public</p>
          </Form.Item>
        </div>
        <Form.Item name="Editor">
          <Editor
            className="editor_form"
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue={dataUpdate?.data?.content}
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
