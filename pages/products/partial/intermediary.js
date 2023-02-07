import React from "react";
import { useSelector } from "react-redux";
import { Spin, Result } from "antd";

import ListProduct from "./listProducts";
import style from "../style.module.scss"

const Intermediary = () => {
  const loading = useSelector(state => state.userProduct.loading)
  const error = useSelector(state => state.userProduct.error)

  if (loading) {
    return (
      <div className={style.loading}>
        <Spin tip="Loading" size="large" />
      </div>
    )
  }

  if (Object.keys(error).length !== 0) {
    return (
      <>
        <Result status="warning" title="we have some problem, please try again later" />
      </>
    )
  }

  return <ListProduct />
}

export default Intermediary