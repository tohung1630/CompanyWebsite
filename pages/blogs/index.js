import Link from 'next/link';
import { Col, Row, Pagination } from 'antd';
import { SwapRightOutlined } from '@ant-design/icons';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserBlog, setCurrentPage, getPopularBlog } from '../../redux/userSlices/blogsSlices';
import style from './style.module.scss';

const BlogPage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.userBlog.data);
  const dataPopular = useSelector((state) => state.userBlog.dataPopular);
  const dataNewArticles = useSelector((state) => state.userBlog.dataArticles);
  const changePage = (page) => {
    dispatch(setCurrentPage(page));
    dispatch(getUserBlog());
  };

  useEffect(() => {
    dispatch(getUserBlog());
    dispatch(getPopularBlog());
    dispatch(getPopularBlog(2));
  }, []);
  return (
    <div className={style['content']}>
      <Row gutter={[20, 50]}>
        <Col md={18} className={style['posts-left']}>
          {data?.data?.data.map((item, index) => {
            return (
              <Row gutter={[30, 15]} key={index} className={style['line']}>
                <Col md={10} xs={24} sm={24}>
                  <div className={style['img-post-left']}>
                    <Link href={`/blogs/${item.id}`}>
                      <img src={item.url_image_meta} className={style['img']} />
                    </Link>
                  </div>
                </Col>
                <Col md={14} xs={24} sm={24}>
                  <div className={style['post-date-type']}>
                    <span>{item.created_at.slice(0, 10)}</span>
                    <span>Dex</span>
                  </div>
                  <h3 className={style['card-title']}>
                    <Link href={`/blogs/${item.id}`} className={style['card-title-text']}>
                      {item.title}
                    </Link>
                  </h3>
                  <p className={style['card-desc']}>{item.desc}</p>
                </Col>
              </Row>
            );
          })}
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
          <Row gutter={[0, 20]} className={style['list-item']}>
            <Col>
              <div className={style['Category']}>
                <h2>Category</h2>
              </div>
            </Col>
            <Col md={24} xs={24}>
              <Row gutter={5} className={style['tag-content']}>
                <Col md={21} xs={21}>
                  <Link className={style['name']} href="#">
                    IT trend
                  </Link>
                </Col>
                <Col md={3} xs={3}>
                  <Link className={style['icon']} href="#">
                    <SwapRightOutlined />
                  </Link>
                </Col>
              </Row>
              <Row gutter={5} className={style['tag-content']}>
                <Col md={21} xs={21}>
                  <Link className={style['name']} href="#">
                    SES knowledge
                  </Link>
                </Col>
                <Col md={3} xs={3}>
                  <Link className={style['icon']} href="#">
                    <SwapRightOutlined />
                  </Link>
                </Col>
              </Row>
              <Row gutter={5} className={style['tag-content']}>
                <Col md={21} xs={21}>
                  <Link className={style['name']} href="#">
                    Offshore development knowledge
                  </Link>
                </Col>
                <Col md={3} xs={3}>
                  <Link className={style['icon']} href="#">
                    <SwapRightOutlined />
                  </Link>
                </Col>
              </Row>
              <Row gutter={5} className={style['tag-content']}>
                <Col md={21} xs={21}>
                  <Link className={style['name']} href="#">
                    Cloud migration
                  </Link>
                </Col>
                <Col md={3} xs={3}>
                  <Link className={style['icon']} href="#">
                    <SwapRightOutlined />
                  </Link>
                </Col>
              </Row>
              <Row gutter={5} className={style['tag-content']}>
                <Col md={21} xs={21}>
                  <Link className={style['name']} href="#">
                    Blockchain development
                  </Link>
                </Col>
                <Col md={3} xs={3}>
                  <Link className={style['icon']} href="#">
                    <SwapRightOutlined />
                  </Link>
                </Col>
              </Row>
              <Row gutter={5} className={style['tag-content']}>
                <Col md={21} xs={21}>
                  <Link className={style['name']} href="#">
                    Uncategorized
                  </Link>
                </Col>
                <Col md={3} xs={3}>
                  <Link className={style['icon']} href="#">
                    <SwapRightOutlined />
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row gutter={[0, 20]} className={style['list-item']}>
            <Col>
              <div className={style['Category']}>
                <h2>Trend</h2>
              </div>
            </Col>
            <Col md={24} xs={24}>
              <Row gutter={5} className={style['tag-content']}>
                <Col md={21} xs={21}>
                  <Link className={style['name']} href="#">
                    Blockchain development
                  </Link>
                </Col>
                <Col md={3} xs={3}>
                  <Link className={style['icon']} href="#">
                    <SwapRightOutlined />
                  </Link>
                </Col>
              </Row>
              <Row gutter={5} className={style['tag-content']}>
                <Col md={21} xs={21}>
                  <Link className={style['name']} href="#">
                    NFT
                  </Link>
                </Col>
                <Col md={3} xs={3}>
                  <Link className={style['icon']} href="#">
                    <SwapRightOutlined />
                  </Link>
                </Col>
              </Row>
              <Row gutter={5} className={style['tag-content']}>
                <Col md={21} xs={21}>
                  <Link className={style['name']} href="#">
                    SES
                  </Link>
                </Col>
                <Col md={3} xs={3}>
                  <Link className={style['icon']} href="#">
                    <SwapRightOutlined />
                  </Link>
                </Col>
              </Row>
              <Row gutter={5} className={style['tag-content']}>
                <Col md={21} xs={21}>
                  <Link className={style['name']} href="#">
                    Lack of human resources
                  </Link>
                </Col>
                <Col md={3} xs={3}>
                  <Link className={style['icon']} href="#">
                    <SwapRightOutlined />
                  </Link>
                </Col>
              </Row>
              <Row gutter={5} className={style['tag-content']}>
                <Col md={21} xs={21}>
                  <Link className={style['name']} href="#">
                    DX
                  </Link>
                </Col>
                <Col md={3} xs={3}>
                  <Link className={style['icon']} href="#">
                    <SwapRightOutlined />
                  </Link>
                </Col>
              </Row>
              <Row gutter={5} className={style['tag-content']}>
                <Col md={21} xs={21}>
                  <Link className={style['name']} href="#">
                    Procedure
                  </Link>
                </Col>
                <Col md={3} xs={3}>
                  <Link className={style['icon']} href="#">
                    <SwapRightOutlined />
                  </Link>
                </Col>
              </Row>
              <Row gutter={5} className={style['tag-content']}>
                <Col md={21} xs={21}>
                  <Link className={style['name']} href="#">
                    Lack of engineers
                  </Link>
                </Col>
                <Col md={3} xs={3}>
                  <Link className={style['icon']} href="#">
                    <SwapRightOutlined />
                  </Link>
                </Col>
              </Row>
              <Row gutter={5} className={style['tag-content']}>
                <Col md={21} xs={21}>
                  <Link className={style['name']} href="#">
                    Offshore development experience
                  </Link>
                </Col>
                <Col md={3} xs={3}>
                  <Link className={style['icon']} href="#">
                    <SwapRightOutlined />
                  </Link>
                </Col>
              </Row>
              <Row gutter={5} className={style['tag-content']}>
                <Col md={21} xs={21}>
                  <Link className={style['name']} href="#">
                    Project implementation
                  </Link>
                </Col>
                <Col md={3} xs={3}>
                  <Link className={style['icon']} href="#">
                    <SwapRightOutlined />
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className={style['pagination']}>
        <Link href={`#`}>
          <Pagination total={data?.data?.total} onChange={changePage} pageSize={11}></Pagination>
        </Link>
      </div>
    </div>
  );
};

export default BlogPage;
