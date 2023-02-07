import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

import { SwapRightOutlined, SwapLeftOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';

import { getNewDetail, getPopularNew, getUserNew } from '../../../redux/userSlices/newUserSlice';
import style from '../style.module.scss';

const DetaiNew = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const dataDetail = router?.query?.id;
  const dataNewDetail = useSelector((state) => state.userNew.dataDetail);
  const dataPopular = useSelector((state) => state.userNew.dataPopular);
  const dataNewArticles = useSelector((state) => state.userNew.dataArticles);

  useEffect(() => {
    dispatch(getPopularNew());
    dispatch(getPopularNew(2));
    dispatch(getNewDetail(dataDetail));
  }, [dataDetail]);

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style['content']}>
          <Row gutter={[20, 50]}>
            <Col md={18} className={style['posts-left']}>
              <Row>
                <Col md={24} xs={24}>
                  <div className={style['detail-heading']}>
                    <div className={style['post-date-type']}>
                      <span> {dataNewDetail?.data?.created_at?.slice(0, 10)}</span>
                    </div>
                    <h1>{dataNewDetail?.data?.title}</h1>
                  </div>
                </Col>

                <Col md={24} xs={24}>
                  <div className={style['detail_img']}>
                    <img src={`${dataNewDetail?.data?.url_image_meta}`} />
                  </div>
                  {
                    <div
                      className={style['detail_content']}
                      dangerouslySetInnerHTML={{ __html: dataNewDetail?.data?.content }}
                    ></div>
                  }
                </Col>

                <Col md={24} xs={24}>
                  <Row gutter={[20, 50]} className={style['next-prev']} justify={'center'}>
                    <Col md={10} xs={10}>
                      <div className={style['back']}>
                        <span>
                          <SwapLeftOutlined />
                        </span>
                        <p>2022 Lunar New Year Holiday Notice</p>
                      </div>
                    </Col>
                    <Col md={10} xs={10}>
                      <div className={style['back']}>
                        <p>2022 Lunar New Year Holiday Notice</p>
                        <span>
                          <SwapRightOutlined />
                        </span>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col md={6} xs={24} className={style['posts-right']}>
              <Row gutter={[0, 20]} className={style['list-item']}>
                <Col>
                  <div className={style['Category']}>
                    <h2>Popular Articles</h2>
                  </div>
                </Col>
                {dataPopular?.data?.data?.map((item, index) => (
                  <Col key={index} md={24} xs={24}>
                    <Row gutter={10}>
                      <Col md={10} xs={5}>
                        <div className={style['img-post-right']}>
                          <Link href={`/news/${item.id}`}>
                            <img src={item.url_image_meta} className={style['img']} />
                          </Link>
                        </div>
                      </Col>
                      <Col md={14} xs={19}>
                        <h5>
                          <Link href={`/news/${item.id}`} className={style['title']}>
                            {item.title}
                          </Link>
                        </h5>
                      </Col>
                    </Row>
                  </Col>
                ))}
              </Row>

              <Row gutter={[0, 20]} className={style['list-item']}>
                <Col>
                  <div className={style['Category']}>
                    <h2>New Articles</h2>
                  </div>
                </Col>
                {dataNewArticles?.data?.data?.map((item, index) => (
                  <Col key={index} md={24} xs={24}>
                    <Row gutter={10}>
                      <Col md={10} xs={5}>
                        <div className={style['img-post-right']}>
                          <Link href={`/news/${item.id}`}>
                            <img src={item.url_image_meta} className={style['img']} />
                          </Link>
                        </div>
                      </Col>
                      <Col md={14} xs={19}>
                        <h5>
                          <Link href={`/news/${item.id}`} className={style['title']}>
                            {item.title}
                          </Link>
                        </h5>
                      </Col>
                    </Row>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default DetaiNew;
