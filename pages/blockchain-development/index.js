import Link from 'next/link';
import { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import { Col, Row, Button, Modal } from 'antd';
import Item from '../our-service/item';
import style from './style.module.scss';

const OurProducts = [
  {
    id: 1,
    title: 'JAVELL',
    imgOutside: 'https://api.relipa.global/storage/409/javell-3.jpg',
    imgInside: [
      'https://api.relipa.global/storage/409/javell-3.jpg',
      'https://api.relipa.global/storage/410/javell-2.jpg',
      'https://api.relipa.global/storage/411/javell.jpg',
    ],
    Overview: `Reservation Managing system 
    Front: LP, reservation system 
    Back-end: Mouthguard inventory management, order management, user management, diagnosis, and re-examination process management`,
    TypeOfContract: 'Lab-type',
    Technology: ['PHP', 'Laravel', 'VueJS'],
    ResponsibleContent: [],
    TeamStructure: '',
  },
  {
    id: 2,
    title: 'ONO',
    imgOutside: 'https://api.relipa.global/storage/412/ono-big-1.png',
    imgInside: [
      'https://api.relipa.global/storage/412/ono-big-1.png',
      'https://api.relipa.global/storage/413/ono-2.png',
      'https://api.relipa.global/storage/414/ono.png',
    ],
    Overview: `Shuttle bus transportation reservation management system 
    - Complicated business operation report (about 200 screens) 
    - Transportation, Bus, Student, Learner Management 
    - Reservation management
    - Report management 
    - Responsive support`,
    TypeOfContract: 'Lab-type',
    Technology: ['Javascript', 'AngularJS', 'Pusher'],
    ResponsibleContent: ['Requirement Definition', 'Develop', 'Test', 'Release', 'Operate', 'Maintain'],
    TeamStructure: '',
  },
  {
    id: 3,
    title: 'Reservation /Matching service Development',
    imgOutside: 'https://api.relipa.global/storage/457/yotei.jpg',
    imgInside: ['https://api.relipa.global/storage/457/yotei.jpg'],
    Overview: `Website provides matching services that matches the needs about a product or service of both the requesting party and the providing party.
      Functions like job information and contact, help you optimize your personal information management.`,
    TypeOfContract: 'Lab-type',
    Technology: ['PHP', 'Laravel', 'VueJS'],
    ResponsibleContent: [],
    TeamStructure: '',
  },
  {
    id: 4,
    title: 'Vehicle Allocation Management System/ App',
    imgOutside: 'https://api.relipa.global/storage/418/tracking-system-3.jpg',
    imgInside: [
      'https://api.relipa.global/storage/418/tracking-system-3.jpg',
      'https://api.relipa.global/storage/419/tracking-system-2.jpg',
      'https://api.relipa.global/storage/420/tracking-system.jpg',
    ],
    Overview: `The application for connecting with drivers and operators using WebRTC.
      - System tracking real-time position and route of each car through position report using GPS.
      - Provide route simulation function in website.
      - Reservation and arrangement management function.`,
    TypeOfContract: 'Lab-type',
    Technology: ['Javascript', 'Bootstrap', 'WebRTC'],
    ResponsibleContent: [],
    TeamStructure: '',
  },
];

const BlockchainPage = () => {
  const isAModalOpen = OurProducts.map((item) => false);

  const [isModalOpen, setIsModalOpen] = useState(isAModalOpen);
  const showModal = (index) => {
    setIsModalOpen(
      isModalOpen.map((item, i) => {
        if (index == i) {
          return true;
        }
        return false;
      }),
    );
  };
  const handleCancel = (index) => {
    setIsModalOpen(
      isModalOpen.map((item) => {
        return false;
      }),
    );
  };

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.LabType_top}>
          <Row gutter={16}>
            <Col className={style.LabType_top_text} md={12} sm={24}>
              <div className={style.lab_type_text}>
                <ul className={style.list_group}>
                  <li>I want to implement blockchain but have limited resources.</li>
                  <li>I want to convert intellectual property to NFT.</li>
                  <li>Our company have limited human resources to sucessfully build a blockchain system.</li>
                  <li>I want to find a company with valuable experience.</li>
                </ul>
                <div className={style.section_content_header}>
                  <h2 className={style.section_content_title}>Relipa's blockchain development can solve it!</h2>
                </div>
                <div className={style.div_list_group}>
                  Relipa started providing blockchain service in January 2021. Since the immeasurable potential of
                  blockchain in solving advanced problems such as finance, medical care, and logistics, Relipa has been
                  focusing on training excellent engineers to stay ahead of the times.
                </div>
              </div>
            </Col>
            <Col className={style.LabType_top_img} md={12} sm={24}>
              <div>
                <img className={style.img_fluid} src="https://relipa.global/user-page/img/blockchain/img-1.png" />
              </div>
            </Col>
          </Row>
        </div>
        <div className={style.About_Lab_type_Development}>
          <div className={style.section_content}>
            <div className={style.section_content_header}>
              <h2 className={style.section_content_title}>Blockchain Development Service</h2>
            </div>

            <div className={style.overview}>
              <div className={style.overview_inner}>
                <div className={style.overview_item}>
                  <Row gutter={16} className={style.card_body}>
                    <Col className={style.card_content} md={12} sm={24}>
                      <div className={style.card_t}>
                        <div className={style.card_icon}>
                          <img src="https://relipa.global/user-page/img/icons/ruler-pen.svg" />
                        </div>
                        <h3 className={style.card_title}>
                          <a href="#">ICO Service</a>
                        </h3>
                        <div className={style.card_text}>
                          <ul>
                            <li>Consulting & WhitePaper</li>
                            <li>Development</li>
                            <li>UI / UX design</li>
                            <li>Customer support</li>
                          </ul>
                        </div>
                      </div>
                    </Col>
                    <Col className={style.card_thumb} md={12} sm={24}>
                      <div className={style.card_frame}>
                        <img className={style.img_fluid} src="https://relipa.global/user-page/img/lab/overview-1.png" />
                        <div className={style.card_img}>
                          <img
                            className={style.img_fluid}
                            src="https://relipa.global/user-page/img/blockchain/img-2.png"
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <Row gutter={16} className={style.card_body}>
                    <Col className={style.card_content} md={12} sm={24}>
                      <div className={style.card_t2}>
                        <div className={style.card_icon}>
                          <img src="https://relipa.global/user-page/img/icons/keyboard-open.svg" />
                        </div>
                        <h3 className={style.card_title}>
                          <a href="#">NTF-ize existing games (Converting existing games to NFT)</a>
                        </h3>
                        <div className={style.card_text}>
                          <ul>
                            <li>Consulting</li>
                            <li>Pre-sales & Whitelist</li>
                            <li>IDO support</li>
                            <li>Bot measures​</li>
                            <li>Marketplace Development</li>
                          </ul>
                        </div>
                      </div>
                    </Col>
                    <Col className={style.card_thumb} md={12} sm={24}>
                      <div className={style.card_frame2}>
                        <img
                          className={style.img_fluid1}
                          src="https://relipa.global/user-page/img/lab/overview-2.png"
                        />
                        <div className={style.card_img}>
                          <img
                            className={style.img_fluid}
                            src="https://relipa.global/user-page/img/blockchain/img-3.png"
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <Row gutter={16} className={style.card_body}>
                    <Col className={style.card_content} md={12} sm={24}>
                      <div className={style.card_t}>
                        <div className={style.card_icon}>
                          <img src="https://relipa.global/user-page/img/icons/empty-wallet.svg" />
                        </div>
                        <h3 className={style.card_title}>
                          <a href="#">Crypto Wallet Service</a>
                        </h3>
                        <div className={style.card_text}>
                          <ul>
                            <li>Multiple cryptocurrencies</li>
                            <li>Multiple platforms</li>
                            <li>Client side private key storage</li>
                            <li>Push Notification</li>
                          </ul>
                        </div>
                      </div>
                    </Col>
                    <Col className={style.card_thumb} md={12} sm={24}>
                      <div className={style.card_frame}>
                        <img className={style.img_fluid} src="https://relipa.global/user-page/img/lab/overview-3.png" />
                        <div className={style.card_img}>
                          <img
                            className={style.img_fluid}
                            src="https://relipa.global/user-page/img/blockchain/img-4.png"
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <Row gutter={16} className={style.card_body}>
                    <Col className={style.card_content} md={12} sm={24}>
                      <div className={style.card_t2}>
                        <div className={style.card_icon}>
                          <img src="https://relipa.global/user-page/img/icons/simcard.svg" />
                        </div>
                        <h3 className={style.card_title}>
                          <a href="#">Public Chain Development</a>
                        </h3>
                        <div className={style.card_text}>
                          <ul>
                            <li>Proof of concept (POC)</li>
                            <li>Custom blockchain consensus algorithm</li>
                            <li>Smart contract engine</li>
                            <li>Sidechains support</li>
                          </ul>
                        </div>
                      </div>
                    </Col>
                    <Col className={style.card_thumb} md={12} sm={24}>
                      <div className={style.card_frame2}>
                        <img
                          className={style.img_fluid1}
                          src="https://relipa.global/user-page/img/common/frame-4.png"
                        />
                        <div className={style.card_img}>
                          <img
                            className={style.img_fluid}
                            src="https://relipa.global/user-page/img/blockchain/img-5.png"
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <Row gutter={16} className={style.card_body}>
                    <Col className={style.card_content} md={12} sm={24}>
                      <div className={style.card_t}>
                        <div className={style.card_icon}>
                          <img src="https://relipa.global/user-page/img/icons/messages.svg" />
                        </div>
                        <h3 className={style.card_title}>
                          <a href="#">NFT items</a>
                        </h3>
                        <div className={style.card_text}>
                          <ul>
                            <li>Consulting / Development</li>
                          </ul>
                        </div>
                      </div>
                    </Col>
                    <Col className={style.card_thumb} md={12} sm={24}>
                      <div className={style.card_frame}>
                        <img className={style.img_fluid} src="https://relipa.global/user-page/img/common/frame-5.png" />
                        <div className={style.card_img}>
                          <img
                            className={style.img_fluid}
                            src="https://relipa.global/user-page/img/blockchain/img-6.png"
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <Row gutter={16} className={style.card_body}>
                    <Col className={style.card_content} md={12} sm={24}>
                      <div className={style.card_t2}>
                        <div className={style.card_icon}>
                          <img src="https://relipa.global/user-page/img/icons/discover.svg" />
                        </div>
                        <h3 className={style.card_title}>
                          <a href="#">Others</a>
                        </h3>
                        <div className={style.card_text}>
                          <ul>
                            <li>Consulting</li>
                            <li>DAPPS</li>
                            <li>Payment gateway</li>
                          </ul>
                        </div>
                      </div>
                    </Col>
                    <Col className={style.card_thumb} md={12} sm={24}>
                      <div className={style.card_frame2}>
                        <img
                          className={style.img_fluid1}
                          src="https://relipa.global/user-page/img/common/frame-6.png"
                        />
                        <div className={style.card_img}>
                          <img
                            className={style.img_fluid}
                            src="https://relipa.global/user-page/img/blockchain/img-7.png"
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={style.Our_Products}>
          <div className={style.container_section_why}>
            <div className={style.section_content_Why_Choose}>
              <div className={style.section_content_header}>
                <h2 className={style.section_content_title}>Our Products</h2>
              </div>

              <div className={style.swiper_carousel}>
                <Row gutter={16}>
                  {OurProducts.map((item, index) => {
                    return (
                      <Col md={6} sm={24} key={index} className="Our_Products">
                        <div className={style.card_news}>
                          <div className={style.card_thumb_news}>
                            <a onClick={() => showModal(index)}>
                              <img src={item.imgOutside} />
                            </a>
                          </div>
                        </div>

                        <Modal
                          className={`model_news ${style.model_our_pro}`}
                          title={item.title}
                          open={isModalOpen[index]}
                          onCancel={(index) => handleCancel(index)}
                        >
                          <Row gutter={16}>
                            <Col md={12} sm={24}>
                              <Carousel className="Carousel-why">
                                {item.imgInside.map((itemimg, index) => {
                                  return (
                                    <Item className={style.item_why} key={index}>
                                      <div className={style.swiper_slide}>
                                        <div className={style.card_iwt}>
                                          <div className={style.card_thumb_Why}>
                                            <a href="#">
                                              <img src={itemimg} />
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </Item>
                                  );
                                })}
                              </Carousel>
                            </Col>
                            <Col md={12} sm={24}>
                              <div className={style.boxed}>
                                <h4 className={style.boxed_title}>Overview</h4>
                                <div className={style.boxed_text}>{item.Overview}</div>
                              </div>

                              <div className={style.boxed}>
                                <h4 className={style.boxed_title}>Type of contract</h4>
                                <div className={style.boxed_text}>{item.TypeOfContract}</div>
                              </div>

                              <div className={style.boxed}>
                                <h4 className={style.boxed_title}>Technology</h4>
                                <div className={style.boxed_text}>
                                  <div className={style.badges}>
                                    {item.Technology.map((itemText, index) => {
                                      return (
                                        <span className={style.bg_primary_opacity} key={index}>
                                          {itemText}
                                        </span>
                                      );
                                    })}
                                  </div>
                                </div>
                              </div>

                              <div className={style.boxed}>
                                <h4 className={style.boxed_title}>Responsible content</h4>
                                <div className={style.boxed_text}>
                                  <div className={style.badges}>
                                    {item.ResponsibleContent.map((itemText, index) => {
                                      return (
                                        <span className={style.bg_primary_opacity} key={index}>
                                          {itemText}
                                        </span>
                                      );
                                    })}
                                  </div>
                                </div>
                              </div>

                              <div className={style.boxed}>
                                <h4 className={style.boxed_title}>Team structure</h4>
                                <div className={style.boxed_text}></div>
                              </div>
                            </Col>
                          </Row>
                        </Modal>

                        <div className={style.card_body_out}>
                          <a onClick={() => showModal(index)}>
                            <h3 className={style.card_title_out}>{item.title}</h3>
                          </a>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </div>
            </div>
          </div>
        </div>

        <div className={style.button_end}>
          {' '}
          <Button className={style.buttona} href="/products">
            See more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlockchainPage;
