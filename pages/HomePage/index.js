import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Carousel, Col, Row } from 'antd';
import { SwapLeftOutlined, SwapRightOutlined } from '@ant-design/icons';

import HomePageImages from '../../assets/Image/HomePageImages';
import Slider from './Patials/Slider';
import style from './style.module.scss';

const HomePage = () => {
  const [pageFooter, setPageFooter] = useState('news');
  const refService = useRef();
  const refVoice = useRef();
  const router = useRouter();

  const handleGoToPage = (page) => {
    router.push(page);
  };

  const handleSetPage = (namePage) => {
    setPageFooter(namePage);
  };

  return (
    <div className="wrapper__homepage">
      <div className={style.container}>
        <Slider />
        <div className={style.content}>
          <Image className={style.imageHeader} src={HomePageImages.imageService} alt="img"></Image>
          <div className={style.slideItemWrapper}>
            <Carousel draggable slidesToShow={5} ref={refService} swipeToSlide={true} className={style.slideListItem}>
              <div className={style.slideItem}>
                <Image className={style.imgSlide} src={HomePageImages.imageSlideItem1} alt="img"></Image>
                <div className={style.imgDesc}>
                  <div>0.1</div>
                  <h2>Lab-type Development</h2>
                  <p>
                    A dedicated development team by our company is built for the customers project, and we commit to the
                    final goals as a member of the project.
                  </p>
                  <button onClick={() => handleGoToPage('lab-type-development')}>See More</button>
                </div>
              </div>
              <div className={style.slideItem}>
                <Image className={style.imgSlide} src={HomePageImages.imageSlideItem2} alt="img"></Image>
                <div className={style.imgDesc}>
                  <div>0.2</div>
                  <h2>Web/App Development</h2>
                  <p>We have confidence in Web & App Development and pride to be trusted by many customers.</p>
                  <button onClick={() => handleGoToPage('web-system-development')}>See More</button>
                </div>
              </div>
              <div className={style.slideItem}>
                <Image className={style.imgSlide} src={HomePageImages.imageSlideItem1} alt="img"></Image>
                <div className={style.imgDesc}>
                  <div>0.3</div>
                  <h2>Blockchain Development</h2>
                  <p>
                    Relipa has highly skilled blockchain developers and experts. We provide services for customers who
                    Want to ....
                  </p>
                  <button onClick={() => handleGoToPage('blockchain-development')}>See More</button>
                </div>
              </div>
              <div className={style.slideItem}>
                <Image className={style.imgSlide} src={HomePageImages.imageSlideItem1} alt="img"></Image>
                <div className={style.imgDesc}>
                  <div>0.1</div>
                  <h2>Lab-type Development</h2>
                  <p>
                    A dedicated development team by our company is built for the customers project, and we commit to the
                    final goals as a member of the project.
                  </p>
                  <button onClick={() => handleGoToPage('lab-type-development')}>See More</button>
                </div>
              </div>
              <div className={style.slideItem}>
                <Image className={style.imgSlide} src={HomePageImages.imageSlideItem2} alt="img"></Image>
                <div className={style.imgDesc}>
                  <div>0.2</div>
                  <h2>Web/App Development</h2>
                  <p>We have confidence in Web & App Development and pride to be trusted by many customers.</p>
                  <button onClick={() => handleGoToPage('web-system-development')}>See More</button>
                </div>
              </div>
              <div className={style.slideItem}>
                <Image className={style.imgSlide} src={HomePageImages.imageSlideItem1} alt="img"></Image>
                <div className={style.imgDesc}>
                  <div>0.3</div>
                  <h2>Blockchain Development</h2>
                  <p>
                    Relipa has highly skilled blockchain developers and experts. We provide services for customers who
                    Want to ....
                  </p>
                  <button onClick={() => handleGoToPage('blockchain-development')}>See More</button>
                </div>
              </div>
            </Carousel>
            <SwapLeftOutlined
              className={style.btnPrev}
              onClick={() => {
                refService.current.prev();
              }}
            />
            <SwapRightOutlined
              className={style.btnNext}
              onClick={() => {
                refService.current.next();
              }}
            />
          </div>
          <div>
            <Image className={style.imageHeader} src={HomePageImages.ourClient} alt="img"></Image>
            <Row justify={'center'}>
              <Col md={6} sm={12}>
                <div className={style.logoItem}>
                  <a href="#">
                    <Image className={style.logoImage} src={HomePageImages.logoLeeWays} alt="logo"></Image>
                  </a>
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div className={style.logoItem}>
                  <a href="#">
                    <Image className={style.logoImage} src={HomePageImages.logoLevias} alt="logo"></Image>
                  </a>
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div className={style.logoItem}>
                  <a href="#">
                    <Image className={style.logoImage} src={HomePageImages.logoApto} alt="logo"></Image>
                  </a>
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div className={style.logoItem}>
                  <a href="#">
                    <Image className={style.logoImage} src={HomePageImages.logoHmacs} alt="logo"></Image>
                  </a>
                </div>
              </Col>
              <Col className={style.logoItemRow2} md={6} sm={12}>
                <div className={style.logoItem}>
                  <a href="#">
                    <Image className={style.logoImage} src={HomePageImages.logoAreteco} alt="logo"></Image>
                  </a>
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div className={style.logoItem}>
                  <a href="#">
                    <Image className={style.logoImage} src={HomePageImages.logoKyoto} alt="logo"></Image>
                  </a>
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div className={style.logoItem}>
                  <a href="#">
                    <Image className={style.logoImage} src={HomePageImages.logoLinkBal} alt="logo"></Image>
                  </a>
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div className={style.logoItem}>
                  <a href="#">
                    <Image className={style.logoImage} src={HomePageImages.logoKip} alt="logo"></Image>
                  </a>
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div className={style.logoItem}>
                  <a href="#">
                    <Image className={style.logoImage} src={HomePageImages.logoCcc} alt="logo"></Image>
                  </a>
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div className={style.logoItem}>
                  <a href="#">
                    <Image className={style.logoImage} src={HomePageImages.logoWoodPecker} alt="logo"></Image>
                  </a>
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div className={style.logoItem}>
                  <a href="#">
                    <Image className={style.logoImage} src={HomePageImages.logoQuad} alt="logo"></Image>
                  </a>
                </div>
              </Col>
            </Row>
          </div>
          <div className={`home-page__voice ${style.voice}`}>
            <Image className={style.imageHeader} src={HomePageImages.imageVoice} alt="img"></Image>
            <Image className={style.useVoiceBackground} src={HomePageImages.imageUserBackground} alt="img"></Image>
            <Carousel draggable ref={refVoice} swipeToSlide={true}>
              <div className={style.voiceContainer}>
                <div className={style.voiceContent}>
                  <Image className={style.useVoices} src={HomePageImages.imageUserPM} alt="img"></Image>
                  <div className={style.voiceDesc}>
                    <h1>Akira Hosono / General Manager</h1>
                    <h2>HIMACS, Ltd.</h2>
                    <p>
                      As this time we just wanted to develop an experimental project, requirements from our side was
                      still really ambiguous. Although we did not require a expertised architecture plan, Relipa
                      provided us a surprizingly suitable development team, as well as develop a prototype with high
                      satisfaction level. Another point I have to mention is that I was very amazed about the quality of
                      the human resource from the company. I also impressed that Relipa designed and developed the
                      product that exactly meets our requirements and accessible without any technical indication from
                      our company. That was really amazing.
                    </p>
                  </div>
                </div>
              </div>
              <div className={style.voiceContainer}>
                <div className={style.voiceContent}>
                  <Image className={style.useVoices} src={HomePageImages.imageUserCTO} alt="img"></Image>
                  <div className={style.voiceDesc}>
                    <h1>Ryohei Kamiya / CTO</h1>
                    <h2>LEEWAYS Co., Ltd</h2>
                    <p>
                      Our two companies became partners in the project of front-end Web and Application development. We
                      developed by sharing GitHub repository, deciding the responsibilities of each side through
                      communication between our engineers and Relipa. If GitHub and Slack are often used to inform
                      requirements in Japanese, all those requirements would be handled at a amazingly high speed.
                      Moreover, if the requirements given are ambiguous, the company will check carefully by appropriate
                      questions to ensure that there will be no conflict or disagreement exist. Although 1 year of
                      cooperation was somehow short, I was really impressed by the high responding speed, as well as the
                      company had been trying their best to improve speed and quality day after day compared to the
                      first day we joined partnership.
                    </p>
                  </div>
                </div>
              </div>
              <div className={style.voiceContainer}>
                <div className={style.voiceContent}>
                  <Image className={style.useVoices} src={HomePageImages.imageUserCEO} alt="img"></Image>
                  <div className={style.voiceDesc}>
                    <h1>Kensaku Takagi / CEO</h1>
                    <h2>Areteco Holdings Co., Ltd</h2>
                    <p>
                      Our company is a Media Website Design and Management business. We had been cooperating with Relipa
                      is managers, Mr Duc and Mr Tuyen for many years since its establishment. Not only the knowledge or
                      experience, human resource was also reliable. Relipa is not just an IT outsoursing enterprise
                      which satisfies the requirements from customers, they become a reliable partner who commit all to
                      the final goal and your success. We have launched media and together raised its monthly PV from 0
                      to over 100 million. Relipa was responsibility of everything from infrastructure development to UI
                      design. We have seen multitude of offshore developers in Vietnam and Japan, but few can be
                      reliable.
                    </p>
                  </div>
                </div>
              </div>
            </Carousel>
            <SwapLeftOutlined
              className={`${style.btnPrev} ${style.btnVoice}`}
              onClick={() => {
                refVoice.current.prev();
              }}
            />
            <SwapRightOutlined
              className={`${style.btnNext} ${style.btnVoice}`}
              onClick={() => {
                refVoice.current.next();
              }}
            />
          </div>
          <div className={style.voiceFooter}>
            <Row gutter={80}>
              <Col md={8} sm={24} xs={24}>
                <div className={style.NBHeading}>
                  <Row>
                    <Col md={24} sm={8}>
                      {pageFooter == 'news' ? (
                        <h2 className={`${style.NBTittle} ${style.active}`}>News</h2>
                      ) : (
                        <h2 className={`${style.NBTittle} ${style.active}`}>Blog</h2>
                      )}
                    </Col>
                    <Col md={24} sm={8}>
                      {pageFooter === 'news' ? (
                        <h2 className={style.NBTittle} onClick={() => handleSetPage('blogs')}>
                          Blog
                        </h2>
                      ) : (
                        <h2 className={style.NBTittle} onClick={() => handleSetPage('news')}>
                          News
                        </h2>
                      )}
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col md={16} sm={24} xs={24}>
                <ul className={style.listNBItem}>
                  <li className={style.NBItem}>
                    <div className={style.card}>
                      <Image
                        className={style.cardThumb}
                        src={HomePageImages.imageNewItem1}
                        alt="card thur item"
                      ></Image>
                      <div className={style.cardBody}>
                        <h5>2022-12-21</h5>
                        <span>
                          <p>New Year’s Day 2023 and Vietnamese Lunar New Year 2023 Announcement</p>
                          <SwapRightOutlined className={style.cardBtn} />
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className={style.NBItem}>
                    <div className={style.card}>
                      <Image
                        className={style.cardThumb}
                        src={HomePageImages.imageNewItem1}
                        alt="card thur item"
                      ></Image>
                      <div className={style.cardBody}>
                        <h5>2022-12-21</h5>
                        <span>
                          <p>New Year’s Day 2023 and Vietnamese Lunar New Year 2023 Announcement</p>
                          <SwapRightOutlined className={style.cardBtn} />
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className={style.NBItem}>
                    <div className={style.card}>
                      <Image
                        className={style.cardThumb}
                        src={HomePageImages.imageNewItem1}
                        alt="card thur item"
                      ></Image>
                      <div className={style.cardBody}>
                        <h5>2022-12-21</h5>
                        <span>
                          <p>New Year’s Day 2023 and Vietnamese Lunar New Year 2023 Announcement</p>
                          <SwapRightOutlined className={style.cardBtn} />
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className={style.NBItem}>
                    <div className={style.card}>
                      <Image
                        className={style.cardThumb}
                        src={HomePageImages.imageNewItem1}
                        alt="card thur item"
                      ></Image>
                      <div className={style.cardBody}>
                        <h5>2022-12-21</h5>
                        <span>
                          <p>New Year’s Day 2023 and Vietnamese Lunar New Year 2023 Announcement</p>
                          <SwapRightOutlined className={style.cardBtn} />
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className={style.NBItem}>
                    <div className={style.card}>
                      <Image
                        className={style.cardThumb}
                        src={HomePageImages.imageNewItem1}
                        alt="card thur item"
                      ></Image>
                      <div className={style.cardBody}>
                        <h5>2022-12-21</h5>
                        <span>
                          <p>New Year’s Day 2023 and Vietnamese Lunar New Year 2023 Announcement</p>
                          <SwapRightOutlined className={style.cardBtn} />
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
                <button className={style.NBBtnSeeMore} onClick={() => handleGoToPage(pageFooter)}>
                  See more
                </button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
