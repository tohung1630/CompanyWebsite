import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Layout } from 'antd';

import AdminSideBar from './Partials/SideBar';
import adminImages from '../../assets/Image/AdminImage';
import HeaderAdmin from './Partials/HeaderAdmin';
import styles from './style.module.scss';
import ChangePassword from './Partials/ChangePassword';

const { Header, Content, Footer, Sider } = Layout;

const AdminLayout = ({ children }) => {
  const [adminPage, setAdminPage] = useState('dashboard');
  const [showSideBarMobile, setShowSideBarMobile] = useState(false);
  const [openModalChangePassword, setOpenModalChangePassword] = useState(false);

  const router = useRouter();
  const isPageAdd = router.asPath?.includes('add');
  const isPageEdit = router.asPath?.includes('edit');

  const isCRUD = isPageEdit || isPageAdd;

  const handleGoToAdmin = () => {
    router.push('/admin/dashboard');
    setAdminPage('dashboard');
  };

  const handleAddGoToPage = () => {
    router.push(`/admin/${adminPage}`);
    setAdminPage(adminPage);
  };

  const handleGoTo = () => {
    isCRUD && handleAddGoToPage();
  };

  const handleGetPage = (page) => {
    setAdminPage(page);
  };

  const handleShowSideBarMobile = () => {
    setShowSideBarMobile(true);
  };

  const handleHideSideBarMobile = () => {
    setShowSideBarMobile(false);
  };

  const handleOpenModal = () => {
    setOpenModalChangePassword(!openModalChangePassword);
  };

  return (
    <Layout
      style={{
        margin: 'auto',
        minHeight: '100vh',
      }}
      className={styles['admin']}
    >
      <Sider
        width="260px"
        collapsedWidth="0"
        breakpoint="md"
        reverseArrow
        style={{ backgroundColor: 'transparent' }}
        className={styles['sidebar__pc__wrapper']}
      >
        <div className={styles['sidebar__pc']}>
          <AdminSideBar className={styles['side__bar']} page={adminPage} handleGetPage={handleGetPage} />
        </div>
      </Sider>
      {showSideBarMobile && (
        <div className={styles['sidebar__mobile']}>
          <div className={styles['sidebar__mobile__hide']} onClick={handleHideSideBarMobile}></div>
          <div className={styles['sidebar__mobile__show']}>
            <AdminSideBar
              page={adminPage}
              handleGetPage={handleGetPage}
              navBarMobile={showSideBarMobile}
              handleOpenModal={handleOpenModal}
            />
          </div>
        </div>
      )}
      <Layout
        className="site-layout"
        style={{
          backgroundColor: '#f8f9fc',
        }}
      >
        <div className={styles['menu__mobile']}>
          <div className={styles['menu__mobile__icon']} onClick={handleShowSideBarMobile}>
            <Image src={adminImages.iconMenuMobile} alt="iconMenuMobile" />
          </div>
        </div>
        <Header
          style={{
            padding: 0,
          }}
          className={styles['header__container']}
        >
          <div className={styles['container__header-wrapper']}>
            <div className={styles['header__admin']}>
              <HeaderAdmin handleOpenModal={handleOpenModal} />
            </div>
            {openModalChangePassword && (
              <div className={styles['modal__wrapper']}>
                <ChangePassword handleCloseModal={handleOpenModal} />
              </div>
            )}
          </div>
        </Header>
        <Content
          style={{
            margin: '0 16px 16px',
          }}
        >
          <div className={styles['content__navBar']}>
            <h1>{adminPage}</h1>
            <ol className={styles['content__navBar__page']}>
              <li className={styles['content__navBar__page-admin']} onClick={handleGoToAdmin}>
                admin
              </li>
              <li>›</li>
              <li className={isCRUD && styles['content__navBar__page-admin']} onClick={handleGoTo}>
                {adminPage}
              </li>
              {isCRUD && (
                <span className={styles['content__navBar__page__add']}>
                  <li>›</li>
                  {isPageAdd && <li>add</li>}
                  {isPageEdit && <li>add</li>}
                </span>
              )}
            </ol>
          </div>
          <div className={styles['content__children']}>{children}</div>
        </Content>
        <Footer className={styles['admin__footer']}>
          <div className={styles['admin__footer']}>Copyright © 2023 RELIPA CO., LTD. All Rights Reserved.</div>
        </Footer>
      </Layout>
    </Layout>
  );
};
export default AdminLayout;
