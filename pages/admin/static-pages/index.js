import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Select, Button, Col, Row, Form, Table } from 'antd';

import { GetDataStaticPage } from '../../../redux/slices/staticPageSlices';
import AdminLayout from '../../../layouts/AdminLayout';
import style from './style.module.scss';

const StaticPages = () => {
  const dispatch = useDispatch();
  const dataTable = useSelector((state) => state.StaticPages);
  const loading = dataTable?.loading;
  console.log(dataTable);
  const option = [
    {
      value: 'None',
      label: '',
    },
    {
      value: 'Acsending',
      label: 'Acsending',
    },
    {
      value: 'Desending',
      label: 'Desending',
    },
  ];
  const Columns = [
    { title: 'No', dataIndex: 'id', key: 'id', width: '150' },
    { title: 'Author', dataIndex: 'author', key: 'author', width: '150' },
    { title: 'Date', dataIndex: 'date', key: 'date', width: '150' },
    { title: 'Status', dataIndex: 'status', key: 'status', width: '150' },
    { title: 'Views', dataIndex: 'views', key: 'views', width: '150' },
    { title: 'Action', dataIndex: 'action', key: 'action', width: '150' },
  ];

  const fakeData = [];

  useEffect(() => {
    dispatch(GetDataStaticPage());
  }, []);

  return (
    <div className={style.static}>
      <div className="static__pages">
        <Row>
          <Col md={24} xl={22}>
            <Form layout="inline" className="static__form">
              <Form.Item wrapperCol={{ span: 24 }}>
                <Input placeholder="Search..." className={style.inputSearch} />
              </Form.Item>
              <Form.Item wrapperCol={{ span: 15 }} labelCol={{ span: 6 }} label="Sort by" className={style.sortBy}>
                <Select options={option} className="productSearchOption" />
              </Form.Item>
              <Form.Item>
                <Button className={style.productButton}>search</Button>
              </Form.Item>
            </Form>
          </Col>
          <Col xl={2}>
            <Button className={style.floatRight}>create</Button>
          </Col>
        </Row>
      </div>
      <div className="tableData static__table">
        <Table
          size="middle"
          loading={loading}
          dataSource={fakeData}
          columns={Columns}
          className={style.table}
          rowKey="name"
        ></Table>
      </div>
    </div>
  );
};

StaticPages.Layout = AdminLayout;

export default StaticPages;
