import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { Col, Row } from 'antd';

import Intermediary from './partial/intermediary';
import { getUserProducts, setCurrentPage, setStatus } from '../../redux/userSlices/productUserSlice';
import style from './style.module.scss';

const Products = () => {
  const status = useSelector(state => state.userProduct.status)
  const dispatch = useDispatch()

  const changeStatus = (data) => {
    dispatch(setStatus(data))
  }

  useEffect(() => {
    dispatch(setCurrentPage(1))
    dispatch(getUserProducts())
  }, [status])

  return (
    <div className={style.width}>
      <Row gutter={20} >
        <Col md={6} sm={12} xs={12} className={style.marginBottom}>
          <div className={clsx(style.button, { [style.active]: status === 0 })} onClick={() => changeStatus(0)}>
            all
          </div>
        </Col>
        <Col md={6} sm={12} xs={12} className={style.marginBottom}>
          <div className={clsx(style.button, { [style.active]: status === 1 })} onClick={() => changeStatus(1)}>
            web
          </div>
        </Col>
        <Col md={6} sm={12} xs={12} className={style.marginBottom}>
          <div className={clsx(style.button, { [style.active]: status === 4 })} onClick={() => changeStatus(4)}>
            mobile application
          </div>
        </Col>
        <Col md={6} sm={12} xs={12} className={style.marginBottom}>
          <div className={clsx(style.button, { [style.active]: status === 3 })} onClick={() => changeStatus(3)}>
            block chain
          </div>
        </Col>
      </Row>
      <Intermediary />
    </div>
  )
}

export default Products;
