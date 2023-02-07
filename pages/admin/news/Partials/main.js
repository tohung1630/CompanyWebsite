import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
import { Button } from 'antd';
import { Input, Table, Row, Col, Form } from 'antd';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { EditFilled, DeleteFilled, EyeFilled } from '@ant-design/icons';
import { Checkbox, Modal } from 'antd';

import {
  callApiNewGet,
  deleteNews,
  updateNewGet,
  page,
  changeCheckBox,
  NewsUpdate,
  callTitle,
} from '../../../../redux/slices/newsSlices';
import styles from '../style.module.scss';

const Main = () => {
  const pageNews = useSelector((state) => state.news.handleJSX?.page) ?? 1;
  const dataNews = useSelector((state) => state.news.dataNew) ?? {};
  const dispatch = useDispatch();
  const router = useRouter();

  const option = [
    {
      value: '',
      label: '',
    },
    {
      value: 'asc',
      label: 'Acsending',
    },
    {
      value: 'desc',
      label: 'Desending',
    },
  ];

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
    },

    {
      title: 'Subject',
      dataIndex: 'subject',
      width: 400,
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
        return <>{record == 1 ? 'Public' : ''}</>;
      },
    },

    {
      title: 'Top',
      dataIndex: 'top',
      render: (record, data) => {
        return (
          <>
            <input
              type="checkbox"
              checked={record == 1 ? true : false}
              onClick={() => {
                dispatch(changeCheckBox(data.id));
                dispatch(
                  NewsUpdate({
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
      render: (record, data) => {
        return (
          <>
            <a target="_blank" href={`/news/${data.id}`} rel="noopener noreferrer">
              <EyeFilled style={{ margin: 5 }} />
            </a>
            <EditFilled
              style={{ margin: 5 }}
              onClick={() => {
                dispatch(updateNewGet(data.id));
                router.push(`/admin/news/edit?id=${data.id}`);
              }}
            />
            <DeleteFilled
              onClick={() => {
                onDeleteUsers(data);
              }}
              style={{
                color: 'black',
                margin: 5,
              }}
            />
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
        dispatch(deleteNews(record.id));
      },
    });
  };

  const dataSource = dataNews?.data?.map((item) => ({
    id: item.id,
    subject: item.title,
    api: item.lang,
    date: item.created_at,
    status: item.status,
    view: item.total_view,
    top: item.top,
    friendly_url: item.friendly_url,
  }));

  const createNew = () => {
    router.push('/admin/news/add');
  };

  const onFinish = (value) => {
    dispatch(callApiNewGet(value));
  };

  useEffect(() => {
    dispatch(callApiNewGet());
  }, [pageNews]);

  return (
    <div className={clsx(styles.banner_table)}>
      <div className={clsx(styles.banner_content)}>
        <div className={styles.productSearch}>
          <Row gutter={10}>
            <Col md={16}>
              <Form layout="inline" className="productForm" onFinish={onFinish}>
                <Form.Item wrapperCol={{ span: 20 }} name="Search">
                  <Input placeholder="Search..." className={styles.eventElement} />
                </Form.Item>
                <Form.Item
                  name="sortBy"
                  wrapperCol={{ span: 15 }}
                  labelCol={{ span: 6 }}
                  label="sort by"
                  className={styles.sortBy}
                >
                  <Select options={option} className="productSearchOption" />
                </Form.Item>
                <Form.Item>
                  <Button className={styles.productButton} htmlType="submit">
                    search
                  </Button>
                </Form.Item>
              </Form>
            </Col>
            <Col md={8}>
              <Button className={clsx(styles.productButton, styles.floatRight)} onClick={createNew}>
                create
              </Button>
            </Col>
          </Row>
        </div>
        <div className="form_tableantd">
          <Table
            className={styles.tabel}
            columns={columns}
            dataSource={dataSource}
            bordered
            pagination={{
              onChange: (e) => {
                dispatch(page(e));
              },
              defaultPageSize: dataNews?.per_page ?? 10,
              total: dataNews?.total ?? 10,
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Main;
