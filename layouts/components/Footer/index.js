import Image from 'next/image';
import { useRouter } from 'next/router';
import { InstagramFilled } from '@ant-design/icons';
import { FacebookFilled, TwitterCircleFilled, YoutubeFilled, RightOutlined } from '@ant-design/icons/lib/icons';
import { Col, Row } from 'antd';

import HomePageImages from '../../../assets/Image/HomePageImages';
import style from './style.module.scss';

const Footer = ({ scrollYPosition, handleGoToTop }) => {
  const router = useRouter();

  const handlePageChange = (pageName) => {
    router.push(pageName);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <Row gutter={{ xs: 40, sm: 160 }} justify="center">
          <Col
            className={style.info}
            xs={{
              span: 22,
            }}
            sm={{
              span: 22,
            }}
            lg={{
              span: 11,
            }}
            xl={{
              span: 12,
            }}
          >
            <Row justify={{ sm: 'center', lg: 'start' }}>
              <Image
                onClick={() => handlePageChange('/')}
                src={HomePageImages.logoColorWhite}
                alt="logo"
                className={style.footerLogo}
              ></Image>
            </Row>

            <Row justify={{ sm: 'center', lg: 'start' }}>
              <span className={style.socials}>
                <a
                  className={style.iconFacebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/relipasoft"
                >
                  <FacebookFilled className={style.socialIcon} />
                </a>
                <a
                  className={style.iconFacebook}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/relipasoft/"
                >
                  <InstagramFilled className={style.socialIcon} />
                </a>
                <a
                  className={style.iconFacebook}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.youtube.com/channel/UCeNpaMMmiR0Aon3m-Gmhd7Q/featured"
                >
                  <YoutubeFilled className={style.socialIcon} />
                </a>
                <a
                  className={style.iconFacebook}
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/relipasoft"
                >
                  <TwitterCircleFilled className={style.socialIcon} />
                </a>
              </span>
            </Row>

            <Row justify={{ xs: 'center', sm: 'start' }}>
              <div className={style.infoContent}>
                <ul>
                  <h3>Japan</h3>
                  <li>
                    <Image src={HomePageImages.iconLocation} alt="icon location" className={style.iconLocation}></Image>
                    1-14-14 Tomigaya, Shibuya-ku, Tokyo 151-0063 Stanford Annex Building 3F
                  </li>
                  <li>
                    <Image src={HomePageImages.iconPhone} alt="icon location" className={style.iconPhone}></Image>
                    <a href={'tel:(+81)3 6804 9294'}>(+81)3 6804 9294</a>
                  </li>
                  <li>
                    <Image src={HomePageImages.iconSms} alt="icon location" className={style.iconSms}></Image>
                    <a href={`mailto:sales@relipasoft.com`}>sales@relipasoft.com</a>
                  </li>
                </ul>
                <ul>
                  <h3>Viet Nam</h3>
                  <li>
                    <Image src={HomePageImages.iconLocation} alt="icon location" className={style.iconLocation}></Image>
                    22F, B Tower, Song Da Building, Pham Hung Street, My Dinh 1, Nam Tu Liem, Ha Noi, Viet Nam
                  </li>
                  <li>
                    <Image src={HomePageImages.iconPhone} alt="icon location" className={style.iconPhone}></Image>
                    <a href={`tel:${+842432004725}`}>(+84)24 3200 4725</a>
                  </li>
                  <li>
                    <Image src={HomePageImages.iconSms} alt="icon location" className={style.iconSms}></Image>
                    <a href={`mailto:sales@relipasoft.com`}>sales@relipasoft.com</a>
                  </li>
                </ul>
              </div>
            </Row>
          </Col>
          <Col
            className={style.contact}
            xs={{
              span: 22,
            }}
            sm={{
              span: 22,
            }}
            lg={{
              span: 11,
            }}
            xl={{
              span: 12,
            }}
          >
            <Row justify={{ sm: 'space-between' }}>
              <Col
                xs={{
                  span: 16,
                }}
                sm={{
                  span: 16,
                }}
                lg={{
                  span: 14,
                }}
              >
                <div className={style.contactList}>
                  <h3>Corporate information</h3>
                  <ul>
                    <li>
                      <RightOutlined className={style.rightIcon} />
                      Company Profile
                    </li>
                    <li>
                      <RightOutlined className={style.rightIcon} />
                      Representative message
                    </li>
                    <li>
                      <RightOutlined className={style.rightIcon} />
                      Introducing core members
                    </li>
                    <li>
                      <RightOutlined className={style.rightIcon} />
                      Mission and core values
                    </li>
                  </ul>
                </div>
                <div className={style.contactList}>
                  <h3>Business description</h3>
                  <ul>
                    <li onClick={() => handlePageChange('our-service')}>
                      <RightOutlined className={style.rightIcon} />
                      Ours Services
                    </li>
                    <li onClick={() => handlePageChange('lab-type-development')}>
                      <RightOutlined className={style.rightIcon} />
                      Lab-type
                    </li>
                    <li onClick={() => handlePageChange('web-system-development')}>
                      <RightOutlined className={style.rightIcon} />
                      Web/App
                    </li>
                    <li onClick={() => handlePageChange('blockchain-development')}>
                      <RightOutlined className={style.rightIcon} />
                      Blockchain
                    </li>
                  </ul>
                </div>
                <div className={style.contactList}>
                  <h3>Development results</h3>
                  <ul>
                    <li onClick={() => handlePageChange('products')}>
                      <RightOutlined className={style.rightIcon} />
                      Products
                    </li>
                    <li>
                      <RightOutlined className={style.rightIcon} />
                      Web/App
                    </li>
                    <li>
                      <RightOutlined className={style.rightIcon} />
                      Blockchain
                    </li>
                    <li>
                      <RightOutlined className={style.rightIcon} />
                      Mobile application
                    </li>
                  </ul>
                </div>
              </Col>
              <Col
                xs={{
                  span: 8,
                }}
                sm={{
                  span: 8,
                }}
                lg={{
                  span: 10,
                }}
              >
                <div className={style.contactList}>
                  <h3>Products</h3>
                  <ul>
                    <li onClick={() => handlePageChange('news')}>
                      <RightOutlined className={style.rightIcon} />
                      News
                    </li>
                    <li onClick={() => handlePageChange('blogs')}>
                      <RightOutlined className={style.rightIcon} />
                      Blogs
                    </li>
                  </ul>
                </div>
                <div className={style.contactList}>
                  <h3>Inquiry</h3>
                  <ul>
                    <li onClick={() => handlePageChange('products')}>
                      <RightOutlined className={style.rightIcon} />
                      Inquiry
                    </li>
                    <li onClick={() => handlePageChange('privacy')}>
                      <RightOutlined className={style.rightIcon} />
                      Privacy Policy
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      {scrollYPosition > 1000 && (
        <div className={style.listAction}>
          <Image src={HomePageImages.callPhone} alt="" className={style.callPhone}></Image>
          <Image src={HomePageImages.gotoTop} alt="" className={style.gotoTop} onClick={handleGoToTop}></Image>
          <Image src={HomePageImages.message} alt="" className={style.message}></Image>
        </div>
      )}
      <div className={style.footerTittle}>Copyright © 2023 RELIPA CO., LTD. All Rights Reserved.</div>
    </div>
  );
};

export default Footer;
