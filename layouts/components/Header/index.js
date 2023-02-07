import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Col, Row } from 'antd';
import { MenuOutlined, CloseOutlined, CaretDownOutlined } from '@ant-design/icons';

import HomePageImages from '../../../assets/Image/HomePageImages';
import style from './style.module.scss';

const Header = ({ scrollYPosition }) => {
  const [page, setPage] = useState('/');
  const [languageActive, setLanguageActive] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const router = useRouter();
  const isPageHome = router.asPath;

  const handlePageChange = (pageName) => {
    setPage(pageName);
    if (pageName === 'services') {
      return;
    }
    setShowNavbar(false);
    router.push(`/${pageName}`);
    setOpenModal(false);
  };

  const handleLanguageChange = (item) => {
    setLanguageActive(item);
  };

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleOpenNavMobile = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className={style.wrapper}>
      <div
        className={
          isPageHome === '/' && scrollYPosition < 20
            ? `${style.headerWrapper} ${style.headerTransparent}`
            : style.headerWrapper
        }
      >
        <header className={style.header}>
          <Row
            className={style.contentRow}
            gutter={{ xs: 40, sm: 80, lg: 160 }}
            justify={'space-between'}
            align="middle"
          >
            <Col
              xs={{
                span: 8,
              }}
              sm={{
                span: 8,
              }}
              lg={{
                span: 4,
              }}
              xl={{
                span: 4,
              }}
            >
              <Row justify={'start'}>
                <Image
                  onClick={() => handlePageChange('/')}
                  className={style.logo}
                  src={
                    isPageHome === '/' && scrollYPosition < 20
                      ? HomePageImages.logoColorWhite
                      : HomePageImages.logoColorBlue
                  }
                  alt="logo"
                />
              </Row>
            </Col>
            <Col
              xs={{
                span: 2,
              }}
              sm={{
                span: 2,
              }}
              lg={{
                span: 14,
              }}
              xl={{
                span: 14,
              }}
            >
              <nav className={openModal ? `${style.navBar} ${style.navBarMobile}` : style.navBar}>
                <li
                  className={page === 'company' ? style.itemAction : style.navBarItem}
                  onClick={() => handlePageChange('company')}
                >
                  Company
                </li>

                <li
                  className={page === 'services' ? style.itemAction : style.navBarItem}
                  onClick={() => {
                    handlePageChange('services');
                    handleShowNavbar();
                  }}
                >
                  Services <CaretDownOutlined />
                  {showNavbar && (
                    <>
                      <ul className={style.navServices}>
                        <li className={style.navServicesItem} onClick={() => handlePageChange('our-service')}>
                          Our Service
                        </li>
                        <li className={style.navServicesItem} onClick={() => handlePageChange('lab-type-development')}>
                          Lab-type Development
                        </li>
                        <li
                          className={style.navServicesItem}
                          onClick={() => handlePageChange('web-system-development')}
                        >
                          Web/App Development
                        </li>
                        <li
                          className={style.navServicesItem}
                          onClick={() => handlePageChange('blockchain-development')}
                        >
                          Blockchain Development
                        </li>
                      </ul>
                      <div className={style.navServiceWrapper}></div>
                    </>
                  )}
                </li>
                <li
                  className={page === 'products' ? style.itemAction : style.navBarItem}
                  onClick={() => handlePageChange('products')}
                >
                  Products
                </li>
                <li
                  className={page === 'news' ? style.itemAction : style.navBarItem}
                  onClick={() => handlePageChange('news')}
                >
                  News
                </li>
                <li
                  className={page === 'blogs' ? style.itemAction : style.navBarItem}
                  onClick={() => handlePageChange('blogs')}
                >
                  blogs
                </li>
                <li
                  className={page === 'contact' ? style.itemAction : style.navBarItem}
                  onClick={() => handlePageChange('contact')}
                >
                  Contact
                </li>
              </nav>
            </Col>
            <Col
              xs={{
                span: 0,
              }}
              sm={{
                span: 0,
              }}
              lg={{
                span: 3,
              }}
              xl={{
                span: 2,
              }}
            >
              <nav className={style.language}>
                <li
                  className={
                    languageActive === true ? `${style.languageAction} ${style.languageItem}` : style.languageItem
                  }
                  onClick={() => handleLanguageChange(true)}
                >
                  JP
                </li>
                /
                <li
                  className={
                    languageActive === false ? `${style.languageAction} ${style.languageItem}` : style.languageItem
                  }
                  onClick={() => handleLanguageChange(false)}
                >
                  EN
                </li>
              </nav>
            </Col>

            <Col
              xs={{
                span: 8,
              }}
              sm={{
                span: 12,
              }}
              lg={{
                span: 0,
              }}
            >
              <Row justify={'end'}>
                {!openModal && (
                  <MenuOutlined
                    className={page === '/' && scrollYPosition > 20 ? style.iconMobile : style.iconMobileWhite}
                    onClick={handleOpenNavMobile}
                  />
                )}
                {openModal && (
                  <CloseOutlined
                    className={page === '/' && scrollYPosition > 20 ? style.iconMobile : style.iconMobileWhite}
                    onClick={handleOpenNavMobile}
                  />
                )}
              </Row>
            </Col>
          </Row>
        </header>
      </div>
    </div>
  );
};

export default Header;
