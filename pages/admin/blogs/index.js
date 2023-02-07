import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { EditFilled, DeleteFilled, EyeFilled } from '@ant-design/icons';
import { Form, Select } from 'antd';
import { Button, Checkbox, Modal, message } from 'antd';
import { Input, Table } from 'antd';
import clsx from 'clsx';

import AdminLayout from '../../../layouts/AdminLayout';
import {
  apiBlogs,
  BlogsUpdate,
  changeCheckBox,
  deleteBlogs,
  page,
  updateBlogGet,
} from '../../../redux/slices/blogSlice';
import styles from './style.module.scss';

const Blogs = () => {
  const pageBlogs = useSelector((state) => state.blogs.handleJSX?.page);
  const dataBlogs = useSelector((state) => state.blogs.dataBlog?.data) ?? [];
  const loading = useSelector((state) => state.blogs.handleJSX.loading);
  const dispatch = useDispatch();
  const dataSource = dataBlogs.map((item) => ({
    id: item.id,
    subject: item.title,
    api: item.lang,
    date: item.created_at,
    top: item.top,
    status: item.status,
    view: item.total_view,
    friendly_url: item.friendly_url,
  }));

  const handleGetDataBlog = (data) => {
    dispatch(apiBlogs(data));
  };

  const defaultCheckedList = [''];
  const [messageApi, contextHolder] = message.useMessage();
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const router = useRouter();
  const onChange = (list) => {
    setCheckedList(list);
  };
  const handleCreate = () => {
    router.push('blogs/add');
  };
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
    },

    {
      title: 'Subject',
      dataIndex: 'subject',
      width: 300,
    },

    {
      title: 'API',
      dataIndex: 'api',
    },

    {
      title: 'Date',
      dataIndex: 'date',
    },

    {
      title: 'Status',
      dataIndex: 'status',
      render: (record) => {
        return <>{record == 1 ? 'Public' : 'Private'}</>;
      },
    },

    {
      title: 'Top',
      dataIndex: 'top',

      render: (record, data) => {
        return (
          <>
            {contextHolder}

            <input
              type="checkbox"
              checked={record == 1 ? true : false}
              onClick={() => {
                messageApi.open({
                  type: 'success',
                  content: 'Update is success',
                });
                dispatch(changeCheckBox(data.id));
                dispatch(
                  BlogsUpdate({
                    id: data.id,
                    Data: {
                      friendly_url: data.friendly_url,
                      lang: data.api,
                      top: record,
                      _method: 'PUT',
                    },
                  }),
                );
              }}
            />
          </>
        );
      },
    },
    {
      title: 'View',
      dataIndex: 'view',
    },
    {
      title: 'Action',
      dataIndex: 'friendly_url',
      width: 200,
      render: (record, data) => {
        return (
          <>
            <div className="icon_crud">
              <a target="_blank" href={`/blogs/${data.id}`} rel="noopener noreferrer">
                <EyeFilled style={{ margin: 12 }} />
              </a>
              <EditFilled
                style={{ margin: 12 }}
                onClick={() => {
                  dispatch(updateBlogGet(data.id));
                  router.push(`/admin/blogs/edit?id=${data.id}`);
                }}
              />
              <DeleteFilled
                onClick={() => {
                  onDeleteUsers(data);
                }}
                style={{
                  color: 'black',
                  margin: 12,
                }}
              />
            </div>
          </>
        );
      },
    },
  ];

  const onDeleteUsers = (record) => {
    Modal.confirm({
      title: 'Do you really want to delete this??',
      okText: 'Comfirm',
      okType: 'danger',
      onOk: () => {
        dispatch(deleteBlogs(record.id));
      },
    });
  };
  const [form] = Form.useForm();
  useEffect(() => {
    dispatch(apiBlogs());
  }, [pageBlogs]);

  return (
    <div className={clsx(styles.banner_table)}>
      <div className={clsx(styles.banner_content)}>
        <div className="header_banner">
          <Form layout="inline" form={form} onFinish={handleGetDataBlog}>
            <div className={clsx(styles.header_search)}>
              <div className={clsx(styles.search_filter)}>
                <div className={clsx(styles.search_sort)}>
                  <Form.Item name="search">
                    <Input className={clsx(styles.input_search)} placeholder="Search..." />
                  </Form.Item>
                  <p>Sort by</p>
                </div>
                <Form.Item name="sort">
                  <Select
                    defaultValue="None"
                    style={{
                      width: 130,
                    }}
                    options={[
                      {
                        value: '',
                        label: 'None',
                      },
                      {
                        name: 'asc',
                        value: 'asc',
                        label: 'Ascending',
                      },

                      {
                        name: 'desc',
                        value: 'desc',
                        label: 'Descending',
                      },
                    ]}
                  />
                </Form.Item>
              </div>

              <Button htmlType="submit" type="primary">
                Search
              </Button>
            </div>
          </Form>
          <Button onClick={handleCreate} type="primary">
            Create
          </Button>
        </div>
        <div className="form_tableantd">
          <Table
            className="table_data"
            bordered
            pagination={{
              onChange: (e) => {
                dispatch(page(e));
              },
              defaultPageSize: dataBlogs?.per_page ?? 10,
              total: dataBlogs?.total ?? 50,
            }}
            scroll={{ y: 530 }}
            loading={loading}
            dataSource={dataSource}
            columns={columns}
          ></Table>
        </div>
      </div>
    </div>
  );
};

Blogs.Layout = AdminLayout;

export default Blogs;
