import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { Col, Row, Pagination } from 'antd';

import { getNewDetail, getPopularNew, getUserNew, setCurrentPage } from '../../redux/userSlices/newUserSlice';
import style from './style.module.scss';

const NewPage = () => {
  const dispatch = useDispatch();
  const dataNew = useSelector((state) => state.userNew.data);
  const dataPopular = useSelector((state) => state.userNew.dataPopular);
  const dataNewArticles = useSelector((state) => state.userNew.dataArticles);
  const page = useSelector((state) => state.userNew.currentPage);
  const changePage = (page) => {
    dispatch(setCurrentPage(page));
    dispatch(getUserNew());
  };

  useEffect(() => {
    dispatch(getUserNew());
    dispatch(getPopularNew());
    dispatch(getPopularNew(2));
    dispatch(getNewDetail());
  }, [page]);

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style['content']}>
          <Row gutter={[20, 50]}>
            <Col md={18} className={style['posts-left']}>
              {dataNew?.data?.data.map((item, index) => {
                return (
                  <Row gutter={[30, 15]} className={style['line']} key={index}>
                    <Col md={10} xs={24} sm={24}>
                      <div className={style['img-post-left']}>
                        <Link href={`/news/${item.id}`}>
                          <img src={item.url_image_meta} className={style['img']} />
                        </Link>
                      </div>
                    </Col>
                    <Col md={14} xs={24} sm={24}>
                      <div className={style['post-date-type']}>
                        <span>{item.created_at.slice(0, 10)}</span>
                      </div>
                      <h3 className={style['card-title']}>
                        <Link href={`/news/${item.id}`} className={style['card-title-text']}>
                          {item.title}
                        </Link>
                      </h3>
                      <p className={style['card-desc']}>{item.desc}</p>
                    </Col>
                  </Row>
                );
              })}
              <div className={style.center}>
                <a href="#">
                  <Pagination total={dataNew?.data?.total} onChange={changePage} pageSize={5} />
                </a>
              </div>
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
                          <Link href={`/news/${item.id}`}
                          className={style['title']}>
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
                          <Link href="#">
                            <img src={item.url_image_meta} className={style['img']} />
                          </Link>
                        </div>
                      </Col>
                      <Col md={14} xs={19}>
                        <h5>
                          <Link href="#" className={style['title']}>
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

export default NewPage;
