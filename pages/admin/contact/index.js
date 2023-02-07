import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination, Table } from 'antd';
import { VerticalLeftOutlined, VerticalRightOutlined } from '@ant-design/icons';

import AdminLayout from '../../../layouts/AdminLayout';
import { GetApiContact } from '../../../redux/slices/contactSlice';
import style from './style.module.scss';

const Contact = () => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const listContact = useSelector((state) => state.contact);
  const loading = listContact.loading;
  const listContactData = listContact?.list.data;
  const lastPage = listContact?.list.last_page;
  console.log(lastPage);

  const Columns = [
    { title: 'ID', dataIndex: 'id', key: 'id', width: '50' },
    {
      title: 'information',
      dataIndex: 'information',
      width: '200',
      render(item) {
        return {
          children: (
            <div className={style.columnLink}>
              <p>Name: {item.name}</p>
              <p>Company: {item.company_name}</p>
              <p>
                Email: <a href={`mailto:${item.email}`}>{item.email}</a>
              </p>
              <p>
                Phone: <a href={`tel:${+item.phone}`}>{item.phone}</a>
              </p>
            </div>
          ),
        };
      },
    },
    { title: 'Inquiry Type', dataIndex: 'inquiryType', key: 'inquiryType', width: '150' },
    { title: 'How to know', dataIndex: 'how', key: 'how', width: '150' },
    { title: 'Content', dataIndex: 'content', key: 'Content', width: '150' },
    { title: 'Created At', dataIndex: 'createdAt', key: 'createdAt', width: '150' },
  ];

  const fakeData = listContactData?.map((item) => {
    return {
      id: item.id,
      information: item,
      inquiryType: item.inquiry_type,
      how: item.your_source,
      content: item.content,
      createdAt: item.created_at,
    };
  });

  const handleNextLastPage = () => {
    if (page !== lastPage) {
      setPage(lastPage);
    }
  };

  const handlePrevFirstPage = () => {
    if (page !== 1) {
      setPage(1);
    }
  };

  useEffect(() => {
    dispatch(GetApiContact(page));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div className="contact__wrapper">
      <div className="tableData contact__table">
        <Table
          scroll={{ x: 400 }}
          loading={loading}
          columns={Columns}
          dataSource={fakeData}
          className={style.table}
          pagination={false}
        />
        <div className={style.tableFooter}>
          <Pagination className={style.contactFooter} onChange={(e) => setPage(e)} total={20} />
          <VerticalRightOutlined
            onClick={handlePrevFirstPage}
            className={page === 1 ? `${style.btn} ${style.btnHide} ${style.btnPrev}` : `${style.btn} ${style.btnPrev}`}
          />
          <VerticalLeftOutlined
            onClick={handleNextLastPage}
            className={
              page === lastPage ? `${style.btn} ${style.btnHide} ${style.btnNext}` : `${style.btn} ${style.btnNext}`
            }
          />
        </div>
      </div>
    </div>
  );
};

Contact.Layout = AdminLayout;

export default Contact;
