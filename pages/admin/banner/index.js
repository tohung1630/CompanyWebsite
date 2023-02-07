import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Link from 'next/link';
import { Input, Table, Select, Button, Modal, Form, Space, notification } from 'antd';
import { DeleteFilled, EditFilled } from '@ant-design/icons';
import clsx from 'clsx';

import AdminLayout from '../../../layouts/AdminLayout';
import {
  getData,
  setCurrentPage,
  setSearchString,
  setSortOrder,
  deleteBanner,
} from '../../../redux/slices/banerSlices';
import styles from './style.module.scss';

const Banner = () => {
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [form] = Form.useForm();
  const [id, setId] = useState();
  const currentPage = useSelector((state) => state.banner.currentPage);
  const searchString = useSelector((state) => state.banner.searchString);
  const sort = useSelector((state) => state.banner.sortOrder);
  const data = useSelector((state) => state.banner.data);
  const currentData = useSelector((state) => state.banner.currentData);
  const loading = useSelector((state) => state.banner.loading);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleCreate = () => {
    router.push('banner/add');
  };

  const bannerColumns = [
    {
      key: 'id',
      title: 'id',
      dataIndex: 'id',
      width: 81,
    },
    {
      key: 'banner',
      title: 'Banner',
      dataIndex: 'banner',
      width: 170,
    },
    {
      key: 'api',
      title: 'API',
      dataIndex: 'api',
      width: 92,
    },
    {
      key: 'created_at',
      title: 'Created_at',
      dataIndex: 'created_at',
      width: 177,
    },
    {
      key: 'status',
      title: 'Status',
      dataIndex: 'status',
      width: 123,
    },
    {
      key: 'numerical_Order',
      title: 'Numerical_Order',
      dataIndex: 'Numerical_Order',
      width: 341,
    },
    {
      key: 'action',
      title: 'Action',
      dataIndex: 'Action',
      width: 162,
      render: (change, data) => {
        return (
          <Space>
            <Link className={styles.iconProduct} href={`/admin/banner/edit?id=${data?.id}`}>
              <EditFilled />
            </Link>
            <Link className={clsx(styles.iconProduct, styles.margin)} href="" onClick={() => openModal(data?.id)}>
              <DeleteFilled />
            </Link>
          </Space>
        );
      },
    },
  ];

  const option = [
    {
      value: 'None',
      label: '',
    },
    {
      value: 'asc',
      label: 'Ascending',
    },

    {
      value: 'desc',
      label: 'Descending',
    },
  ];

  const cancel = () => {
    setDeleteConfirm(false);
  };

  const confirmed = () => {
    dispatch(deleteBanner(id));
    setDeleteConfirm(false);
    deleteBannerComplete();
  };

  const search = (data) => {
    dispatch(setSearchString(data.search));
    dispatch(setSortOrder(data.sort));
    changeData({ page: currentPage, search: data.search, sort: data.sort });
  };

  const pageChange = (data) => {
    dispatch(setCurrentPage(data));
    changeData({ page: data, search: searchString, sort: sort });
  };

  const changeData = (dataOrder) => {
    dispatch(getData(dataOrder));
  };

  const deleteBannerComplete = () => {
    notification.open({
      message: 'delete success !',
    });
  };

  const openModal = (id) => {
    setDeleteConfirm(true);
    setId(id);
  };

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div className={clsx(styles.banner_table)}>
      <div className={clsx(styles.banner_content)}>
        <div className="banner_header">
          <Form className={clsx(styles.header_search)} form={form} onFinish={search}>
            <Form.Item name="search">
              <Input className={clsx(styles.input_search)} placeholder="Search..." />
            </Form.Item>
            <Form.Item wrapperCol={{ span: 15 }} labelCol={{ span: 7 }} label="sort by" name="sort">
              <Select
                options={option}
                style={{
                  width: 130,
                }}
                defaultValue={{ label: '', value: 'none' }}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Search
              </Button>
            </Form.Item>
          </Form>
          <Button onClick={handleCreate} type="primary">
            Create
          </Button>
        </div>
        <div className="form_table">
          <Table
            dataSource={currentData}
            columns={bannerColumns}
            scroll={{ x: 500 }}
            loading={loading}
            pagination={{
              position: ['bottomCenter'],
              pageSize: data?.data?.per_page,
              total: data?.data?.total,
              responsive: true,
              onChange: pageChange,
            }}
          ></Table>
          <Modal
            title="Delete"
            open={deleteConfirm}
            className="bannerDeletePopUp"
            closable={false}
            centered
            footer={[
              <Button key="submit" className={styles.confirmBtn} onClick={confirmed}>
                confirm
              </Button>,
              <Button key="back" className={styles.backBtn} onClick={cancel}>
                cancel
              </Button>,
            ]}
          >
            <p className={styles.popUpMessage}>do you want to delete this?</p>
          </Modal>
        </div>
      </div>
    </div>
  );
};

Banner.Layout = AdminLayout;

export default Banner;
