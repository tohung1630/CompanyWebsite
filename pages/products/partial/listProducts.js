import React, { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Row, Col, Card, Space, Tag, Pagination, Modal, Carousel } from "antd"
import { SwapLeftOutlined, SwapRightOutlined } from "@ant-design/icons"

import { getUserProducts, setCurrentId, setCurrentPage } from "../../../redux/userSlices/productUserSlice"
import style from "../style.module.scss"

const ListProduct = () => {
  const [isOpen, setIsOpen] = useState(false)
  const data = useSelector(state => state.userProduct.data)
  const page = useSelector(state => state.userProduct.currentPage)
  const id = useSelector(state => state.userProduct.currentId)
  const dispatch = useDispatch()
  const carouselRef = useRef()
  const currentData = data.data.data.filter(item => item.id === id)[0] ?? null

  const changePage = (page) => {
    dispatch(setCurrentPage(page))
    dispatch(getUserProducts())
  }

  const swapNext = () => {
    carouselRef.current.next()
  }

  const swapPrev = () => [
    carouselRef.current.prev()
  ]

  const setId = (id) => {
    dispatch(setCurrentId(id))
    setIsOpen(true)
  }

  const tagsRenderingCondition = (tags) => {
    if (tags.length === 1 && tags[0] === "") {
      return false
    }
    return true
  }

  return (
    <>
      <Row gutter={20}>
        {data.data.data.map((item, index) => (
          <Col md={8} sm={12} xs={24} key={index} className={style.marginBottom}>
            <Card className={style.productItem}>
              <div className={style.img} onClick={() => setId(item.id)}>
                <img src={item.works[0]} className={style.img} />
              </div>
              <div >
                <h3 className={style.title}>
                  {item.title}
                </h3>
                <p className={style.desc}>{item.desc}</p>
                <Space size={0}>
                  {tagsRenderingCondition(item.tags) && item.tags.map((itemTags, indexTags) => (
                    <Tag key={indexTags} className={style.tags} >{itemTags}</Tag>
                  ))}
                </Space>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      <div className={style.pagination}>
        <Pagination total={data.data.total} onChange={changePage} current={page} pageSize={12} />
      </div>
      {currentData && (
        <Modal closable centered open={isOpen} footer={null} onCancel={() => setIsOpen(false)} className="modal"
          title={[
            <div className={style.detailHeader}>
              <h3 className={style.title}>{currentData.title}</h3>
              <Space size={1}>
                {tagsRenderingCondition(currentData.tags) &&
                  <Tag className={style.lightTags}>#{currentData.tags.toString()}</Tag>
                }
              </Space>
            </div>
          ]}>
          <Row>
            <Col md={12} sm={24} xs={24}>
              <Carousel className={style.carousel} ref={carouselRef}>
                {currentData.works.map((item, index) => (
                  <div className={style.carouselLeft} key={index}>
                    <div className={style.imgItem}>
                      <img src={item} className={style.detailImg} />
                    </div>
                  </div>
                ))}
              </Carousel>
              {currentData.works.length > 1 && (
                <>
                  <div className={style.buttonPrev} onClick={swapPrev}><SwapLeftOutlined /></div>
                  <div className={style.buttonNext} onClick={swapNext}><SwapRightOutlined /></div>
                </>
              )}
            </Col>
            <Col md={12} sm={24} xs={24}>
              <div className={style.block}>
                <h4 className={style.title}>overview</h4>
                <p className={style.content}>{currentData.content}</p>
              </div>
              <div className={style.block}>
                <h4 className={style.title}>type of contract</h4>
                <p className={style.content}>{currentData.type_of_contract}</p>
              </div>
              <div className={style.block}>
                <h4 className={style.title}>technology</h4>
                <p className={style.content}>{currentData.technology}</p>
              </div>
              <div className={style.block}>
                <h4 className={style.title}>responsible content</h4>
                {currentData.responsible_content && (currentData.responsible_content.split(",").map(item => (
                  <Tag className={style.tags}>{item}</Tag>
                )))}
              </div>
              <div className={style.block}>
                <h4 className={style.title}>team structure</h4>
                <p className={style.content}>{currentData.team_structure !== "null" ? currentData.team_structure : ""}</p>
              </div>
            </Col>
          </Row>
        </Modal>
      )
      }
    </>
  )
}

export default ListProduct