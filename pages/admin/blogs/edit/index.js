import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import {
  BlogsCreate,
  apiMediaPost,
  BlogsUpdate,
  changeTitles,
  changeDescs,
  changeMetas,
  changeFURLs,
  changeLangs,
  clickCheckBoxBlogs,
  changeTag,
} from '../../../../redux/slices/blogSlice';
import { useSelector } from 'react-redux';

import { Editor } from '@tinymce/tinymce-react';
import { Form, Input, DatePicker, Select, Checkbox } from 'antd';
import { Button, Upload } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
import clsx from 'clsx';

import AdminLayout from '../../../../layouts/AdminLayout';
import styles from './style.module.scss';

const { Option } = Select;

const EditBlog = () => {
  const dateFormatList = 'DD/MM/YYYY';
  const dataUpdate = useSelector((state) => state.blogs.dataUpdate);
  const date = (dataUpdate) => {
    const year = dataUpdate?.data?.created_at.slice(0, 4);
    const month = dataUpdate?.data?.created_at.slice(5, 7);
    const day = dataUpdate?.data?.created_at.slice(8, 10);
    return `${day}/${month}/${year}`;
  };

  let dateUpdate = date(dataUpdate);
  const dispatch = useDispatch();
  const router = useRouter();
  const options = dataUpdate?.data?.tags;
  const valueImg = useSelector((state) => state.blogs.handleJSX?.uploatIMG) ?? '';
  const handleChange = (e) => {
    dispatch(apiMediaPost(e.file));
  };
  const [form] = Form.useForm();

  const updateBlogs = (values) => {
    const Data = {
      title: values.title,
      desc: values.desc,
      meta: values.meta,
      url_image_meta: values.url_image_meta,
      content: values.Editor.level.content,
      friendly_url: values.friendly_url,
      tags: values.tags,
      lang: values.lang,
      status: values.status,
      _method: 'PUT',
    };
    dispatch(BlogsUpdate({ id: router.query.id, Data }));
    router.push('/admin/blogs');
  };
  const onReset = () => {
    form.resetFields();
  };
  const handleCancelAll = () => {
    router.push('/admin/blogs');
  };
  //////////////////////////////tiny
  const editorRef = useRef(null);
  useEffect(() => {
    form.setFieldsValue({
      id: dataUpdate?.data?.id,
      title: dataUpdate?.data?.title,
      desc: dataUpdate?.data?.desc,
      meta: dataUpdate?.data?.meta,
      url_image_meta: valueImg != '' ? valueImg : dataUpdate?.data?.url_image_meta,
      friendly_url: dataUpdate?.data?.friendly_url,
      tags: dataUpdate?.data?.tags.map((item) => item.name),
      lang: dataUpdate?.data?.lang,
      status: dataUpdate?.data?.status,
    });
  }, [dataUpdate]);

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
      <Form form={form} name="control-hooks" onFinish={updateBlogs}>
        <Form.Item name="title">
          <Input
            placeholder="Title"
            label="Title"
            className="input_antd"
            onChange={(e) => changeTitle(e)}
            initialValue={dataUpdate?.data?.title}
          />
        </Form.Item>

        <Form.Item name="desc">
          <Input
            placeholder="Description"
            label="Description"
            className="input_antd"
            onChange={(e) => changeDesc(e)}
            initialValue={dataUpdate?.data?.desc}
          />
        </Form.Item>
        <Form.Item name="dater">
          <DatePicker
            onChange={(e) => changeDate(e)}
            defaultValue={dayjs(dateUpdate, dateFormatList)}
            format={dateFormatList}
            className="datepicker"
          />
        </Form.Item>
        <Form.Item name="meta">
          <Input
            placeholder="Meta"
            label="meta"
            onChange={(e) => changeMeta(e)}
            className="input_meta"
            initialValue={dataUpdate?.data?.meta}
          />
        </Form.Item>

        <Form.Item name="tags">
          <Select
            mode="tags"
            style={{
              width: '100%',
            }}
            name="tagmode"
            placeholder="Tags Mode"
            options={options}
            className="select_input"
            defaultValue={dataUpdate?.data?.tags.map((item) => item.name)}
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
            <Upload className="UploadBlog" onChange={(e) => handleChange(e)} maxCount={1}>
              <Button htmlType="button" className="button_reset">
                Upload
              </Button>
            </Upload>
          </div>
        </Form.Item>

        <Form.Item name="friendly_url">
          <div className="container">
            <Input
              placeholder="Reset friendly"
              className="input_reset"
              onChange={(e) => changeFURL(e)}
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
              onChange={(e) => changeLang(e)}
              initialValue={dataUpdate?.data?.lang}
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
            initialValue={String(dataUpdate?.data?.content)}
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
EditBlog.Layout = AdminLayout;
export default EditBlog;
