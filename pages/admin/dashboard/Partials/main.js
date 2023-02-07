import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Col, Row, Layout, Button } from 'antd';
import {
  SwitcherOutlined,
  BankOutlined,
  InfoCircleOutlined,
  UserOutlined,
  ReadOutlined,
  ScheduleOutlined,
  PaperClipOutlined,
  ReloadOutlined,
  BugOutlined,
  FullscreenOutlined,
  AntCloudOutlined,
  EditOutlined,
  CloseOutlined,
} from '@ant-design/icons';

import {
  callApi,
  dataTableNewSelector,
  fillterChangeNew,
  handleCheckBoxNew,
  dataTableBlogSelector,
  fillterChangeBlog,
  handleCheckBoxBlog,
  handleTextEdit,
  handleTextEditDe,
  handleTextDelete,
  handleTextDeleteNew,
  handleTextEditNew,
} from '../../../../redux/slices/dashboardSlices';
import style from '../style.module.scss';

const { Header, Content } = Layout;

const Dashboard = () => {
  const data = useSelector((state) => state.dashboard.dataDashboard) ?? {};
  const dataTableNew = useSelector(dataTableNewSelector) ?? [];
  const dataTableBlog = useSelector(dataTableBlogSelector) ?? [];
  const taskNew = useSelector((state) => state.dashboard.handleJSX.taskNew) ?? 'common';
  const taskBlog = useSelector((state) => state.dashboard.handleJSX.taskBlog) ?? 'common';
  const editNew = useSelector((state) => state.dashboard.handleJSX.editNew) ?? 0;
  const deleteNew = useSelector((state) => state.dashboard.handleJSX.deleteNew) ?? 0;
  const deleteBlog = useSelector((state) => state.dashboard.handleJSX.deleteBlog) ?? 0;
  const editBlog = useSelector((state) => state.dashboard.handleJSX.editBlog) ?? 0;

  const userTokken = useSelector((state) => state.logins.access_token) ?? '';

  const dispatch = useDispatch();

  const commonNew = () => {
    dispatch(fillterChangeNew('common'));
  };

  const websiteNew = () => {
    dispatch(fillterChangeNew('website'));
  };

  const serverNew = () => {
    dispatch(fillterChangeNew('server'));
  };

  const clickCheckBoxNew = (id) => {
    dispatch(handleCheckBoxNew(id));
  };

  const commonBlog = () => {
    dispatch(fillterChangeBlog('common'));
  };

  const websiteBlog = () => {
    dispatch(fillterChangeBlog('website'));
  };

  const serverBlog = () => {
    dispatch(fillterChangeBlog('server'));
  };

  const clickCheckBoxBlog = (id) => {
    dispatch(handleCheckBoxBlog(id));
  };

  const textedit = (id) => {
    dispatch(handleTextEdit(id));
  };

  const textDelete = (id) => {
    dispatch(handleTextDelete(id));
  };

  const texteditde = () => {
    dispatch(handleTextEditDe());
  };

  const textDeleteNew = (id) => {
    dispatch(handleTextDeleteNew(id));
  };

  const textEditNew = (id) => {
    dispatch(handleTextEditNew(id));
  };

  useEffect(() => {
    dispatch(callApi());
  }, [userTokken]);

  return (
    <div className={style.dashboard_cms}>
      <div className={style.makeStyles_container}>
        <div className={style.cards}>
          <div className={style.site_card_wrapper}>
            <Row gutter={16}>
              <Col lg={6} md={12} sm={24}>
                <div className={style.icon_card_dashboard_cms}>
                  <SwitcherOutlined />
                </div>
                <Card bordered={false} className={style.card}>
                  <p className={style.text_title}>Blogs</p>
                  <p className={`${style.number} numberBashboard`}>{data?.view?.blogs}</p>
                  <p className={style.text_content}>views/week</p>
                  <div className={style.brick}></div>
                  <p>
                    <ReadOutlined /> Get more info ...
                  </p>
                </Card>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <div className={style.icon_card_dashboard_cms}>
                  <BankOutlined />
                </div>
                <Card bordered={false} className={style.card}>
                  <p className={style.text_title}>News</p>
                  <p className={`${style.number} numberBashboard`}>{data?.view?.news}</p>
                  <p className={style.text_content}>views/week</p>
                  <div className={style.brick}></div>
                  <p>
                    <ScheduleOutlined /> Get more info ...
                  </p>
                </Card>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <div className={style.icon_card_dashboard}>
                  <InfoCircleOutlined />
                </div>
                <Card bordered={false} className={style.card}>
                  <p className={style.text_title}>Total blogs</p>
                  <p className={style.number}>{data?.total?.blogs}</p>
                  <div className={style.brick}></div>
                  <p>
                    <PaperClipOutlined /> Get more info ...
                  </p>
                </Card>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <div className={style.icon_card_dashboard_t}>
                  <UserOutlined />
                </div>
                <Card bordered={false} className={style.card}>
                  <p className={style.text_title}>Total news</p>
                  <p className={style.number}>{data?.total?.news}</p>
                  <div className={style.brick}></div>
                  <p>
                    <ReloadOutlined /> Get more info ...
                  </p>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
        <div className={style.news_blogs}>
          <Row gutter={16}>
            <Col md={24} lg={12} className={style.col}>
              <Layout className={style.layout}>
                <Header className={style.header}>
                  <div className={style.title_menu}>News:</div>
                  <div className={style.menu}>
                    <Button className={taskNew == 'common' ? style.btnMenuOC : style.btnMenu} onClick={commonNew}>
                      <BugOutlined /> COMMON
                    </Button>
                    <Button className={taskNew == 'website' ? style.btnMenuOC : style.btnMenu} onClick={websiteNew}>
                      <FullscreenOutlined /> WEBSITE
                    </Button>
                    <Button className={taskNew == 'server' ? style.btnMenuOC : style.btnMenu} onClick={serverNew}>
                      <AntCloudOutlined className={style.icon} /> SERVER
                    </Button>
                  </div>
                </Header>
                <Content className={style.content}>
                  <div className="site-layout-content">
                    <ul className={style.todo_list}>
                      {dataTableNew.map((item, index) => {
                        return (
                          <li key={item.id}>
                            <div>
                              <input
                                type="checkbox"
                                className={style.toggle}
                                onClick={() => clickCheckBoxNew(item.id)}
                                checked={item.completed}
                              />
                              <label onMouseEnter={texteditde}>{item.title}</label>
                              <div className={editBlog == item.id ? style.textEditB : style.textEditN}>Edit Task</div>
                              <button className={style.destroyedit} onMouseEnter={() => textEditNew(item.id)}>
                                <EditOutlined />
                              </button>
                              <div className={deleteBlog == item.id ? style.textDeleteB : style.textDeleteN}>
                                Delete Task
                              </div>
                              <button className={style.destroydelete} onMouseEnter={() => textDeleteNew(item.id)}>
                                <CloseOutlined />
                              </button>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </Content>
              </Layout>
            </Col>
            <Col md={24} lg={12} className={style.col}>
              <Layout className={style.layout}>
                <Header className={style.header}>
                  <div className={style.title_menu}>Blogs:</div>
                  <div className={style.menu}>
                    <Button className={taskBlog == 'common' ? style.btnMenuOC : style.btnMenu} onClick={commonBlog}>
                      <BugOutlined /> COMMON
                    </Button>
                    <Button className={taskBlog == 'website' ? style.btnMenuOC : style.btnMenu} onClick={websiteBlog}>
                      <FullscreenOutlined /> WEBSITE
                    </Button>
                    <Button className={taskBlog == 'server' ? style.btnMenuOC : style.btnMenu} onClick={serverBlog}>
                      <AntCloudOutlined className={style.icon} /> SERVER
                    </Button>
                  </div>
                </Header>
                <Content className={style.content}>
                  <div className="site-layout-content">
                    <ul className={style.todo_list}>
                      {dataTableBlog.map((item, index) => {
                        return (
                          <li key={item.id}>
                            <div>
                              <input
                                type="checkbox"
                                className={style.toggle}
                                onClick={() => clickCheckBoxBlog(item.id)}
                                checked={item.completed}
                              />
                              <label onMouseEnter={texteditde}>{item.title}</label>
                              <div className={editNew == item.id ? style.textEditB : style.textEditN}>Edit Task</div>
                              <button className={style.destroyedit} onMouseEnter={() => textedit(item.id)}>
                                <EditOutlined />
                              </button>
                              <div className={deleteNew == item.id ? style.textDeleteB : style.textDeleteN}>
                                Delete Task
                              </div>
                              <button className={style.destroydelete} onMouseEnter={() => textDelete(item.id)}>
                                <CloseOutlined />
                              </button>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </Content>
              </Layout>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
