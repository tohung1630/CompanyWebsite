import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { apiTags, deleteTags, page, updateTagsGet } from '../../../redux/slices/tagSlice';

import { EditFilled, DeleteFilled } from '@ant-design/icons';
import { Form, Select } from 'antd';
import { Button, Modal } from 'antd';
import { Input, Table } from 'antd';
import clsx from 'clsx';

import AdminLayout from '../../../layouts/AdminLayout';
import styles from './style.module.scss';

const Tags = () => {
  const dataTags = useSelector((state) => state.tags?.dataTag?.data) ?? [];

  const pageTags = useSelector((state) => state.tags.handleJSX?.page);

  const dataSource = dataTags.map((item) => ({
    id: item.id,
    name: item.name,
    api: item.lang,
    is_trend: item.is_trend == 1 ? 'true' : 'false',
    date: item.created_at,
  }));

  const dispatch = useDispatch();

  const handleGetDataBlog = (data) => {
    dispatch(apiTags(data));
  };

  const router = useRouter();

  const handleCreate = () => {
    router.push('tags/add');
  };

  const [form] = Form.useForm();
  useEffect(() => {
    dispatch(apiTags());
  }, [pageTags]);

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      width: 100,
    },

    {
      title: 'Name',
      dataIndex: 'name',
      width: 200,
    },

    {
      title: 'is Trend',
      dataIndex: 'is_trend',
      width: 300,
      render: (record, data) => {
        return <div>{record}</div>;
      },
    },
    {
      title: 'API',
      dataIndex: 'api',
      width: 200,
    },

    {
      title: 'Date',
      dataIndex: 'date',
      with: 350,
    },

    {
      title: 'Action',
      dataIndex: 'action',
      render: (record, data) => {
        return (
          <>
            <div className="icon_crud">
              <EditFilled
                style={{ margin: 12 }}
                onClick={() => {
                  dispatch(updateTagsGet(data.id));
                  router.push(`/admin/tags/edit?id=${data.id}`);
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
        dispatch(deleteTags(record.id));
      },
    });
  };

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
              defaultPageSize: dataTags?.per_page ?? 10,
              total: dataTags?.total ?? 10,
            }}
            dataSource={dataSource}
            columns={columns}
          ></Table>
        </div>
      </div>
    </div>
  );
};

Tags.Layout = AdminLayout;

export default Tags;
