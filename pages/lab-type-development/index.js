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

const LabTypeDevelopmentPage = () => {
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
                <div className={style.section_content_header}>
                  <h2 className={style.section_content_title}>
                    We build a development team dedicating to each project and commit to the project’s goal.
                  </h2>
                </div>
                <ul className={style.list_group}>
                  <li>Fast and exceptional.</li>
                  <li>Qualified design specifications in development process.</li>
                  <li>Reliable and competent.</li>
                </ul>
                <div className={style.section_content_header}>
                  <h2 className={style.section_content_title}>Advantages</h2>
                </div>
                <ul className={style.list_group}>
                  <li>Less development costs.</li>
                  <li>Flexible contract types.</li>
                </ul>
              </div>
            </Col>
            <Col className={style.LabType_top_img} md={12} sm={24}>
              <div>
                <img className={style.img_fluid} src="https://relipa.global/user-page/img/lab/img-1.png" />
              </div>
            </Col>
          </Row>
        </div>
        <div className={style.About_Lab_type_Development}>
          <div className={style.section_content}>
            <div className={style.section_content_header}>
              <h2 className={style.section_content_title}>About Lab-type Development</h2>
            </div>

            <div className={style.overview}>
              <div className={style.overview_inner}>
                <div className={style.overview_item}>
                  <Row gutter={16} className={style.card_body}>
                    <Col className={style.card_content} md={12} sm={24}>
                      <div className={style.card_t}>
                        <div className={style.card_icon}>
                          <img src="https://relipa.global/user-page/img/icons/people.svg" />
                        </div>
                        <h3 className={style.card_title}>
                          <a href="#">About</a>
                        </h3>
                        <div className={style.card_text}>
                          <ul>
                            <li>We will provide you with a dedicated development team.</li>
                            <li>
                              Your resources will be under long-term high security, so let the project be developed by
                              us!
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Col>
                    <Col className={style.card_thumb} md={12} sm={24}>
                      <div className={style.card_frame}>
                        <img className={style.img_fluid} src="https://relipa.global/user-page/img/lab/overview-1.png" />
                        <div className={style.card_img}>
                          <img className={style.img_fluid} src="https://relipa.global/user-page/img/lab/img-2.png" />
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <Row gutter={16} className={style.card_body}>
                    <Col className={style.card_content} md={12} sm={24}>
                      <div className={style.card_t2}>
                        <div className={style.card_icon}>
                          <img src="https://relipa.global/user-page/img/icons/calendar.svg" />
                        </div>
                        <h3 className={style.card_title}>
                          <a href="#">Work hours and breaks</a>
                        </h3>
                        <div className={style.card_text}>
                          <ul>
                            <li>
                              Working hours are 40 hours per week with the daily period of 8 hours (Monday-Friday).
                            </li>
                            <li>RELIPA developers work from 140 to 180 hours per month.</li>
                            <li>
                              The times are as follows: start time: 10:00, end time: 19:00, break time: 14:00 to 15:00
                              (Japan time)
                            </li>
                            <li>Holidays are Vietnamese national holidays with one paid leave per month.​</li>
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
                          <img className={style.img_fluid} src="https://relipa.global/user-page/img/lab/img-3.png" />
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <Row gutter={16} className={style.card_body}>
                    <Col className={style.card_content} md={12} sm={24}>
                      <div className={style.card_t}>
                        <div className={style.card_icon}>
                          <img src="https://relipa.global/user-page/img/icons/task-square.svg" />
                        </div>
                        <h3 className={style.card_title}>
                          <a href="#">Contract Type</a>
                        </h3>
                        <div className={style.card_text}>
                          <ul>
                            <li>Delegation contract.</li>
                            <li>3 months or more contract period.</li>
                            <li>Closing at month-end, payment will be the following month-end.</li>
                          </ul>
                        </div>
                      </div>
                    </Col>
                    <Col className={style.card_thumb} md={12} sm={24}>
                      <div className={style.card_frame}>
                        <img className={style.img_fluid} src="https://relipa.global/user-page/img/lab/overview-3.png" />
                        <div className={style.card_img}>
                          <img className={style.img_fluid} src="https://relipa.global/user-page/img/lab/img-4.png" />
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={style.section_why}>
          <div className={style.container_section_why}>
            <div className={style.section_content_Why_Choose}>
              <div className={`${style.section_content_header} ${style.white}`}>
                <h2 className={`${style.section_content_title} ${style.white}`}>
                  Why Choose Our Lab-Type Development?
                </h2>
              </div>

              <div className={style.swiper_carousel}>
                <Carousel className="Carousel-why">
                  <Item className={style.item_why}>
                    <div className={style.swiper_slide}>
                      <div className={style.card_iwt}>
                        <div className={style.card_thumb_Why}>
                          <a href="#">
                            <img src="https://relipa.global/user-page/img/lab/img-5.png" />
                          </a>
                        </div>
                        <div className={style.card_index_why}>01</div>
                        <h3 className={style.card_title_why}>
                          <a href="#">90% retention rate from Our Lab-type development using customer.</a>
                        </h3>
                      </div>
                    </div>
                  </Item>
                  <Item className={style.item_why}>
                    <div className={style.swiper_slide}>
                      <div className={style.card_iwt}>
                        <div className={style.card_thumb_Why}>
                          <a href="#">
                            <img src="https://relipa.global/user-page/img/lab/img-6.png" />
                          </a>
                        </div>
                        <div className={style.card_index_why}>02</div>
                        <h3 className={style.card_title_why}>
                          <a href="#">
                            Provides a complete lab-type development that is flexible to accumulate know-how and reduce
                            cost.
                          </a>
                        </h3>
                      </div>
                    </div>
                  </Item>
                </Carousel>
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

export default LabTypeDevelopmentPage;
