import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Select } from 'antd';
import { useRouter } from 'next/router';

import { Button } from 'antd';
import { Input, Table, Row, Col, Form, Modal } from 'antd';
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import clsx from 'clsx';

import { apiVoice, deleteVoice, page, updateVoiceGet } from '../../../redux/slices/clientVoice';
import AdminLayout from '../../../layouts/AdminLayout';
import styles from './style.module.scss';

const ClientVoice = () => {
  const dispatch = useDispatch();
  const dataVoice = useSelector((state) => state.voice?.dataVoice?.data) ?? [];
  const pageVoice = useSelector((state) => state.voice.handleJSX?.page);
  const dataSource = dataVoice.map((item) => ({
    id: item.id,
    title: item.title,
    company: item.company,
    description: item.desc,
  }));

  const router = useRouter();

  const handleCreate = () => {
    router.push('/admin/client-voice/add');
  };

  const handleEdit = () => {
    router.push('/admin/client-voice/edit');
  };
  const handleGetDataVoice = (data) => {
    dispatch(apiVoice(data));
  };
  const [form] = Form.useForm();
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      with: 60,
    },

    {
      title: 'Title',
      dataIndex: 'title',
      with: 80,
    },

    {
      title: 'Company',
      dataIndex: 'company',
      with: 80,
    },

    {
      title: 'Description',
      dataIndex: 'description',
      width: 500,
      height: 100,
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
                  dispatch(updateVoiceGet(data.id));
                  router.push(`/admin/client-voice/edit?id=${data.id}`);
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
        dispatch(deleteVoice(record.id));
      },
    });
  };

  useEffect(() => {
    dispatch(apiVoice());
  }, [pageVoice]);

  return (
    <div className={clsx(styles.table_banner)}>
      <div className={clsx(styles.banner_content)}>
        <div className="header_banner">
          <Form layout="inline" form={form} onFinish={handleGetDataVoice}>
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
              defaultPageSize: dataVoice?.per_page ?? 10,
              total: dataVoice?.total ?? 10,
            }}
            dataSource={dataSource}
            columns={columns}
          ></Table>
        </div>
      </div>
    </div>
  );
};

ClientVoice.Layout = AdminLayout;

export default ClientVoice;
