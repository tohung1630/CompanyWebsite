import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import clsx from 'clsx';
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import { Input, Select, Button, Col, Row, Form, Table, Space, Modal, notification, message } from 'antd';

import { sortOption } from './constant/constant';
import AdminLayout from '../../../layouts/AdminLayout';
import {
  DeleteProduct,
  getData,
  setCurrentPage,
  setSearchString,
  setSortOrder,
} from '../../../redux/slices/productSlice';
import style from './style.module.scss';

const Product = () => {
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [id, setId] = useState();
  const error = useSelector((state) => state.products.error);
  const currentPage = useSelector((state) => state.products.currentPage);
  const searchString = useSelector((state) => state.products.searchString);
  const sort = useSelector((state) => state.products.sortOrder);
  const data = useSelector((state) => state.products.data);
  const loading = useSelector((state) => state.products.loading);
  const dispatch = useDispatch();
  const { Column } = Table;
  const [form] = Form.useForm();

  const cancel = () => {
    setDeleteConfirm(false);
  };

  const confirmed = async () => {
    await dispatch(DeleteProduct(id));
    setDeleteConfirm(false);
    if (Object.entries(error).length !== 0) {
      deleteProductComplete('delete faill !');
      return;
    }
    deleteProductComplete('delete success !');
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

  const deleteProductComplete = (message) => {
    notification.open({
      message: message,
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
    <div className={style.product}>
      <div className={style.productSearch}>
        <Row gutter={10}>
          <Col md={22}>
            <Form layout="inline" className="productForm" form={form} onFinish={search}>
              <Form.Item wrapperCol={{ span: 20 }} name="search">
                <Input placeholder="Search..." className={style.eventElement} />
              </Form.Item>
              <Form.Item
                wrapperCol={{ span: 15 }}
                labelCol={{ span: 6 }}
                label="sort by"
                className={style.sortBy}
                name="sort"
              >
                <Select
                  options={sortOption}
                  className="productSearchOption"
                  defaultValue={{ label: '', value: 'none' }}
                />
              </Form.Item>
              <Form.Item>
                <Button className={style.productButton} htmlType="submit">
                  search
                </Button>
              </Form.Item>
            </Form>
          </Col>
          <Col md={2}>
            <Link href="/admin/products/add">
              <Button className={clsx(style.productButton, style.floatRight)}>create</Button>
            </Link>
          </Col>
        </Row>
      </div>
      <div className="tableData">
        <Table
          dataSource={data?.data}
          className={style.table}
          scroll={{ x: 500 }}
          loading={loading}
          pagination={{
            current: currentPage,
            position: ['bottomCenter'],
            pageSize: data?.per_page,
            total: data?.total,
            responsive: true,
            onChange: pageChange,
          }}
        >
          <Column title="ID" dataIndex="id" key="id" width={50} align="center" />
          <Column title="Title" dataIndex="title" key="title" width={200} align="center" />
          <Column title="Type of contract" dataIndex="type_of_contract" key="contract" width={150} align="center" />
          <Column title="Technology" dataIndex="technology" key="tech" width={150} align="center" />
          <Column title="Tags" dataIndex="tags" key="tags" width={100} align="center" />
          <Column
            title="Action"
            key="action"
            width={100}
            align="center"
            render={(data) => (
              <Space>
                <Link className={style.iconProduct} href={`/admin/products/edit?id=${data.id}`}>
                  <EditFilled />
                </Link>
                <Link className={clsx(style.iconProduct, style.margin)} href="" onClick={() => openModal(data.id)}>
                  <DeleteFilled />
                </Link>
              </Space>
            )}
          />
        </Table>
        <Modal
          title="Delete"
          open={deleteConfirm}
          className="productDeletePopUp"
          closable={false}
          centered
          footer={[
            <Button key="submit" className={style.confirmBtn} onClick={confirmed}>
              confirm
            </Button>,
            <Button key="back" className={style.backBtn} onClick={cancel}>
              cancel
            </Button>,
          ]}
        >
          <p className={style.popUpMessage}>do you want to delete this?</p>
        </Modal>
      </div>
    </div>
  );
};

Product.Layout = AdminLayout;

export default Product;
