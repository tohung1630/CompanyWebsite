import Link from 'next/link';
import { Col, Row } from 'antd';
import { useRouter } from 'next/router';
import { SwapRightOutlined, SwapLeftOutlined } from '@ant-design/icons';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPopularBlog, getBlogDetail, getDataBottomDetail } from '../../../redux/userSlices/blogsSlices';
import style from '../style.module.scss';

const DetalBlogs = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const dataPopular = useSelector((state) => state.userBlog.dataPopular);
  const dataNewArticles = useSelector((state) => state.userBlog.dataArticles);
  const dataBlogDetail = useSelector((state) => state.userBlog.dataDetail);
  const dataDetail = router.query.detail;
  const dataBottomDetail = useSelector((state) => state.userBlog.dataBottomDetail);

  useEffect(() => {
    dispatch(getBlogDetail(dataDetail));
    dispatch(getPopularBlog());
    dispatch(getPopularBlog(2));
    dispatch(getDataBottomDetail());
  }, [dataDetail]);

  return (
    <div className={style['content']}>
      <Row gutter={[20, 50]}>
        <Col md={18} className={style['posts-left']}>
          <Row gutter={[0, 30]}>
            <Col md={24} xs={24}>
              <div className={style['detail-heading']}>
                <div className={style['post-date-type']}>
                  <span>{dataBlogDetail?.data?.created_at.slice(0, 10)}</span>
                  <span>Dex</span>
                </div>
                <h1>{dataBlogDetail?.data?.title}</h1>
              </div>
            </Col>

            <Col md={24} xs={24}>
              <div>
                <img src={dataBlogDetail?.data?.url_image_meta} className={style['img']} />
              </div>
            </Col>
            <Col md={24} xs={24}>
              <div
                className={style['content-detail']}
                dangerouslySetInnerHTML={{ __html: dataBlogDetail?.data?.content }}
              ></div>
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
                    <p>Software & App Development Exhibition [Spring] (SODEC 2022) | Notice of Exhibit at</p>
                    <span>
                      <SwapRightOutlined />
                    </span>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={24} xs={24}>
              <Row gutter={[0, 20]} className={style['list-item']}>
                <Col>
                  <div className={style['Category']}>
                    <h2>Related article</h2>
                  </div>
                </Col>
                <Col md={24} xs={24}>
                  <Row gutter={[20]}>
                    {dataBottomDetail?.data?.data.map((item,index) => (
                      <Col key={index} md={6} xs={12}>
                      <div className={style['bottom-detail-img']}>
                        <Link href={`/blogs/${item.id}`}>
                        <img
                          src={item.url_image_meta}
                          className={style['img']}
                        />
                        </Link>
                      </div>
                      <div className={style['post-date-type']}>
                        <span>{item.created_at.slice(0, 10)}</span>
                        <span>Dex</span>
                      </div>
                      <h3 className={style['title-detail-bottom']}>
                      <Link className={style['card-title-text']} href={`/blogs/${item.id}`} >{item.title}</Link>
                      </h3>
                    </Col>
                    ))}
                  </Row>
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
                      <Link href={`/blogs/${item.id}`}>
                        <img src={item.url_image_meta} className={style['img']} />
                      </Link>
                    </div>
                  </Col>
                  <Col md={14} xs={19}>
                    <h5>
                      <Link href={`/blogs/${item.id}`} className={style['title']}>
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
                      <Link href={`/blogs/${item.id}`}>
                        <img src={item.url_image_meta} className={style['img']} />
                      </Link>
                    </div>
                  </Col>
                  <Col md={14} xs={19}>
                    <h5>
                      <Link href={`/blogs/${item.id}`} className={style['title']}>
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
  );
};

export default DetalBlogs;
