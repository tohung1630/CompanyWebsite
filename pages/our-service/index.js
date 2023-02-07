import Link from 'next/link';
import Carousel from 'react-elastic-carousel';
import Item from './item';
import { Col, Row, Button, Divider, Table } from 'antd';
import style from './style.module.scss';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 5 },
];

const columns = [
  {
    title: () => (
      <div className={style.div_title_table}>
        <h2>Criteria</h2>
      </div>
    ),
    dataIndex: 'Criteria',
    render: (text) => <div className={style.rend_table}>{text}</div>,
  },
  {
    title: () => (
      <div className={`${style.div_title_table} ${style.div_title_relipa} `}>
        <h2>RELIPA</h2>
      </div>
    ),
    dataIndex: 'RELIPA',
    key: 'RELIPA',
    render: (text) => (
      <div className={style.rend_table}>
        <img src={text} />
      </div>
    ),
  },
  {
    title: () => (
      <div className={style.div_title_table}>
        <h3>A certain company A</h3>
        <p>Major offshore</p>
      </div>
    ),
    dataIndex: 'company_A',
    key: 'company_A',
    render: (text) => (
      <div className={style.rend_table}>
        <img src={text} />
      </div>
    ),
  },
  {
    title: () => (
      <div className={style.div_title_table}>
        <h3>Certain company B</h3>
        <p>Small offshore</p>
      </div>
    ),
    dataIndex: 'company_B',
    key: 'company_B',
    render: (text) => (
      <div className={style.rend_table}>
        <img src={text} />
      </div>
    ),
  },
  {
    title: () => (
      <div className={style.div_title_table}>
        <h3>Certain company C</h3>
        <p>Domestic SI-er</p>
      </div>
    ),
    dataIndex: 'company_C',
    key: 'company_C',
    render: (text) => (
      <div className={style.rend_table}>
        <img src={text} />
      </div>
    ),
  },
];

const data = [
  {
    key: '1',
    Criteria: 'Engineering process implementation',
    RELIPA: 'https://relipa.global/user-page/img/icons/status-1.svg',
    company_A: 'https://relipa.global/user-page/img/icons/status-1.svg',
    company_B: 'https://relipa.global/user-page/img/icons/status-4.svg',
    company_C: 'https://relipa.global/user-page/img/icons/status-2.svg',
  },
  {
    key: '2',
    Criteria: 'Long-term development partner',
    RELIPA: 'https://relipa.global/user-page/img/icons/status-1.svg',
    company_A: 'https://relipa.global/user-page/img/icons/status-3.svg',
    company_B: 'https://relipa.global/user-page/img/icons/status-4.svg',
    company_C: 'https://relipa.global/user-page/img/icons/status-3.svg',
  },
  {
    key: '3',
    Criteria: 'Supports numerous technologies',
    RELIPA: 'https://relipa.global/user-page/img/icons/status-1.svg',
    company_A: 'https://relipa.global/user-page/img/icons/status-2.svg',
    company_B: 'https://relipa.global/user-page/img/icons/status-3.svg',
    company_C: 'https://relipa.global/user-page/img/icons/status-3.svg',
  },
  {
    key: '4',
    Criteria: 'Introducing cutting-edge technology',
    RELIPA: 'https://relipa.global/user-page/img/icons/status-1.svg',
    company_A: 'https://relipa.global/user-page/img/icons/status-1.svg',
    company_B: 'https://relipa.global/user-page/img/icons/status-4.svg',
    company_C: 'https://relipa.global/user-page/img/icons/status-3.svg',
  },
  {
    key: '5',
    Criteria: 'Offering flexible prices',
    RELIPA: 'https://relipa.global/user-page/img/icons/status-1.svg',
    company_A: 'https://relipa.global/user-page/img/icons/status-3.svg',
    company_B: 'https://relipa.global/user-page/img/icons/status-2.svg',
    company_C: 'https://relipa.global/user-page/img/icons/status-3.svg',
  },
  {
    key: '6',
    Criteria: 'Always HoRenSo – (Report, Contact and Consult)',
    RELIPA: 'https://relipa.global/user-page/img/icons/status-1.svg',
    company_A: 'https://relipa.global/user-page/img/icons/status-2.svg',
    company_B: 'https://relipa.global/user-page/img/icons/status-3.svg',
    company_C: 'https://relipa.global/user-page/img/icons/status-2.svg',
  },
  {
    key: '7',
    Criteria: 'Customer feedback is welcomed for services improvement',
    RELIPA: 'https://relipa.global/user-page/img/icons/status-1.svg',
    company_A: 'https://relipa.global/user-page/img/icons/status-2.svg',
    company_B: 'https://relipa.global/user-page/img/icons/status-4.svg',
    company_C: 'https://relipa.global/user-page/img/icons/status-3.svg',
  },
  {
    key: '8',
    Criteria: 'Provide maintenance package',
    RELIPA: 'https://relipa.global/user-page/img/icons/status-1.svg',
    company_A: 'https://relipa.global/user-page/img/icons/status-2.svg',
    company_B: 'https://relipa.global/user-page/img/icons/status-4.svg',
    company_C: 'https://relipa.global/user-page/img/icons/status-2.svg',
  },
];

const OurServicePage = () => {
  return (
    <div className={style.wrapper}>
      <div>
        <section>
          <div>
            <div className={style.titleService}>
              <h2 className={style.textService}>Service</h2>
            </div>
            <div className={style.row}>
              <Row className={style.informationService} gutter={16}>
                <Col className={style.detailService} sm={24} md={8}>
                  <div className={style.c_big}>
                    <div className={style.card_thumb}>
                      <a className={style.card_thumb_overlay} href="/lab-type-development">
                        <img
                          className={style.card_img_top}
                          src="https://relipa.global/user-page/img/service/service-img-1.png"
                        />
                      </a>
                    </div>
                    <div className={style.card_body}>
                      <div className={style.card_index}>01.</div>
                      <h3 className={style.card_title}>
                        <a href="/lab-type-development">Lab-type Development</a>
                      </h3>
                      <div className={style.card_text}>
                        Optimal Cost - High Quality - By a dedicated development team, your requirements will be
                        satisfied fast and exceptionally with flexible contract types, your resources will be under
                        long-term high security, so let the project be developed by us!
                      </div>
                      <div className={style.card_bottom}>
                        <div className={style.d_grid}>
                          <Button type="primary" href="/lab-type-development">
                            See more
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className={style.detailService} sm={24} md={8}>
                  <div className={style.c_big}>
                    <div className={style.card_thumb}>
                      <a className={style.card_thumb_overlay} href="/web-system-development">
                        <img
                          className={style.card_img_top}
                          src="https://relipa.global/user-page/img/service/service-img-2.png"
                        />
                      </a>
                    </div>
                    <div className={style.card_body}>
                      <div className={style.card_index}>02.</div>
                      <h3 className={style.card_title}>
                        <a href="/web-system-development">Web/App Development</a>
                      </h3>
                      <div className={style.card_text}>
                        Specializing in providing services such as EC sites, CMS systems, job search websites, and
                        reservation systems, focusing on Javascript / PHP development, we have confidence in Web & App
                        Development and pride to be trusted by many customers.
                      </div>
                      <div className={style.card_bottom}>
                        <div className={style.d_grid}>
                          <Button type="primary" href="/web-system-development">
                            See more
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className={style.detailService} sm={24} md={8}>
                  <div className={style.c_big}>
                    <div className={style.card_thumb}>
                      <a className={style.card_thumb_overlay} href="/blockchain-development">
                        <img
                          className={style.card_img_top}
                          src="https://relipa.global/user-page/img/service/service-img-4.png"
                        />
                      </a>
                    </div>
                    <div className={style.card_body}>
                      <div className={style.card_index}>03.</div>
                      <h3 className={style.card_title}>
                        <a href="/blockchain-development">Blockchain Development</a>
                      </h3>
                      <div className={style.card_text}>
                        ICO service, NFT games conversion, crypto wallet, POC - We meet your all needs. As the awareness
                        of the immeasurable potential of Blockchain, Relipa has been focusing on training excellent
                        engineers to stay ahead of the times.
                      </div>
                      <div className={style.card_bottom}>
                        <div className={style.d_grid}>
                          <Button type="primary" href="/blockchain-development">
                            See more
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <div className={style.Why_Relipa}>
              <div>
                <div className={style.section_content}>
                  <div className={style.section_content_header}>
                    <h2 className={style.section_content_title}>Why Relipa?</h2>
                  </div>
                  <div className={style.content_why_relipa}>
                    <Carousel breakPoints={breakPoints} className="Carousel_why">
                      <Item className={style.item_why}>
                        <div className={style.swiper_slide}>
                          <div className={style.card_iwt}>
                            <div className={style.card_thumb_why}>
                              <a href="#" className={style.a_card}>
                                <img
                                  className={style.img_card}
                                  src="https://relipa.global/user-page/img/icons/idea.svg"
                                />
                              </a>
                            </div>
                            <div className={style.card_body_why}>
                              <div className={style.card_header}>
                                <h5 className={style.card_title_why}>
                                  <a href="#">Leading the way in cutting-edge technology</a>
                                </h5>
                              </div>
                              <div className={style.card_text_why}>
                                o The top company in blockchain, VR/ AR, AI technology.
                                <br />o Qualified development team with the most modern and effective problem solving
                                process.
                              </div>
                            </div>
                          </div>
                        </div>
                      </Item>
                      <Item className={style.item_why}>
                        <div className={style.swiper_slide}>
                          <div className={style.card_iwt}>
                            <div className={style.card_thumb_why}>
                              <a href="#" className={style.a_card}>
                                <img
                                  className={style.img_card}
                                  src="https://relipa.global/user-page/img/icons/money-bag.svg"
                                />
                              </a>
                            </div>
                            <div className={style.card_body_why}>
                              <div className={style.card_header}>
                                <h5 className={style.card_title_why}>
                                  <a href="#">Trustworthy, and satisfactory</a>
                                </h5>
                              </div>
                              <div className={style.card_text_why}>
                                o Thorough engineering process application.
                                <br />o High quality human resources who mainly come from top ranked universities.
                                <br />o Over 120 hours of soft-skill and technical training every year.
                              </div>
                            </div>
                          </div>
                        </div>
                      </Item>
                      <Item className={style.item_why}>
                        <div className={style.swiper_slide}>
                          <div className={style.card_iwt}>
                            <div className={style.card_thumb_why}>
                              <a href="#" className={style.a_card}>
                                <img
                                  className={style.img_card}
                                  src="https://relipa.global/user-page/img/icons/internet.svg"
                                />
                              </a>
                            </div>
                            <div className={style.card_body_why}>
                              <div className={style.card_header}>
                                <h5 className={style.card_title_why}>
                                  <a href="#">Fair price - High-quality</a>
                                </h5>
                              </div>
                              <div className={style.card_text_why}>
                                o 30-50% lower price compared to Japanese firms.
                                <br />o Provide better pricing than other competitors.
                              </div>
                            </div>
                          </div>
                        </div>
                      </Item>
                      <Item className={style.item_why}>
                        <div className={style.swiper_slide}>
                          <div className={style.card_iwt}>
                            <div className={style.card_thumb_why}>
                              <a href="#" className={style.a_card}>
                                <img
                                  className={style.img_card}
                                  src="https://relipa.global/user-page/img/icons/rocket.svg"
                                />
                              </a>
                            </div>
                            <div className={style.card_body_why}>
                              <div className={style.card_header}>
                                <h5 className={style.card_title_why}>
                                  <a href="#">Over-6-years-experience consulting skill</a>
                                </h5>
                              </div>
                              <div className={style.card_text_why}>
                                o Consulting team including members from top universities with high language skills.
                                <br />o Over 6 years experiences in project consulting.
                              </div>
                            </div>
                          </div>
                        </div>
                      </Item>
                      <Item className={style.item_why}>
                        <div className={style.swiper_slide}>
                          <div className={style.card_iwt}>
                            <div className={style.card_thumb_why}>
                              <a href="#" className={style.a_card}>
                                <img
                                  className={style.img_card}
                                  src="https://relipa.global/user-page/img/icons/handshake.svg"
                                />
                              </a>
                            </div>
                            <div className={style.card_body_why}>
                              <div className={style.card_header}>
                                <h5 className={style.card_title_why}>
                                  <a href="#">Highly secure</a>
                                </h5>
                              </div>
                              <div className={style.card_text_why}>
                                o ISO/IEC2700 and ISO9001 certifications.
                                <br />o Specialized technology labs.
                              </div>
                            </div>
                          </div>
                        </div>
                      </Item>
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.Compare}>
              <div className={style.section_content_Compare}>
                <h2 className={style.section_content_title_Compare}>Compare</h2>
              </div>
              <div className="table_compare">
                <Table columns={columns} dataSource={data} pagination={false} />
              </div>
            </div>
            <div className={style.Step_To_Us}>
              <div className={style.section_content_Compare}>
                <h2 className={style.section_content_title_Compare}>Step To Us</h2>
              </div>
              <div className={style.steps}>
                <div className={style.step_item}>
                  <div className={style.step_icon}>
                    <img className={style.img_fluid} src="https://relipa.global/user-page/img/icons/step-icon-1.svg" />
                  </div>
                  <div className={style.step_body}>
                    <div className={style.step_number}>01.</div>
                    <div className={style.step_title}>Contact us</div>
                    <div className={style.step_desc}>
                      Please feel free to contact us.We accept descriptions such as successful cases of offshore
                      development and points for selecting a company.
                    </div>
                  </div>
                </div>
                <div className={style.step_item}>
                  <div className={style.step_icon}>
                    <img className={style.img_fluid} src="https://relipa.global/user-page/img/icons/step-icon-2.svg" />
                  </div>
                  <div className={style.step_body}>
                    <div className={style.step_number}>02.</div>
                    <div className={style.step_title}>We listen</div>
                    <div className={style.step_desc}>
                      In order to turn your ideas into products, it is important to accurately understand your needs.
                      Please, tell us what you want to do.
                    </div>
                  </div>
                </div>
                <div className={style.step_item}>
                  <div className={style.step_icon}>
                    <img className={style.img_fluid} src="https://relipa.global/user-page/img/icons/step-icon-3.svg" />
                  </div>
                  <div className={style.step_body}>
                    <div className={style.step_number}>03.</div>
                    <div className={style.step_title}>Consultant / Propose</div>
                    <div className={style.step_desc}>
                      Once you understand the site configuration, functional requirements, page content, etc., we will
                      present the development, man-hours, estimates, schedule, future expansion, etc.
                    </div>
                  </div>
                </div>
                <div className={style.step_item}>
                  <div className={style.step_icon}>
                    <img className={style.img_fluid} src="https://relipa.global/user-page/img/icons/step-icon-4.svg" />
                  </div>
                  <div className={style.step_body}>
                    <div className={style.step_number}>04.</div>
                    <div className={style.step_title}>Contract / Order</div>
                    <div className={style.step_desc}>
                      We will conclude non-disclosure agreements, system development business basic contracts,
                      outsourcing individual contracts, purchase orders / confirmations, etc. with our customers.
                    </div>
                  </div>
                </div>
                <div className={style.step_item}>
                  <div className={style.step_icon}>
                    <img className={style.img_fluid} src="https://relipa.global/user-page/img/icons/step-icon-5.svg" />
                  </div>
                  <div className={style.step_body}>
                    <div className={style.step_number}>05.</div>
                    <div className={style.step_title}>Design / Development</div>
                    <div className={style.step_desc}>
                      We will proceed with the design and development of design, system and content. You can check the
                      progress with the customer on the test environment and mailing list each time.
                    </div>
                  </div>
                </div>
                <div className={style.step_item}>
                  <div className={style.step_icon}>
                    <img className={style.img_fluid} src="https://relipa.global/user-page/img/icons/step-icon-6.svg" />
                  </div>
                  <div className={style.step_body}>
                    <div className={style.step_number}>06.</div>
                    <div className={style.step_title}>Verification / Confirmation</div>
                    <div className={style.step_desc}>
                      We will perform integration testing, debugging, customer verification and feedback, and capture
                      for the final brush-up.
                    </div>
                  </div>
                </div>
                <div className={style.step_item}>
                  <div className={style.step_icon}>
                    <img className={style.img_fluid} src="https://relipa.global/user-page/img/icons/step-icon-7.svg" />
                  </div>
                  <div className={style.step_body}>
                    <div className={style.step_number}>07.</div>
                    <div className={style.step_title}>Delivery</div>
                    <div className={style.step_desc}>
                      We will deliver on time upon request according to the specifications.
                    </div>
                  </div>
                </div>
                <div className={style.step_item}>
                  <div className={style.step_icon}>
                    <img className={style.img_fluid} src="https://relipa.global/user-page/img/icons/step-icon-8.svg" />
                  </div>
                  <div className={style.step_body}>
                    <div className={style.step_number}>08.</div>
                    <div className={style.step_title}>Release</div>
                    <div className={style.step_desc}>
                      We will accelerate the migration of search engines by performing various settings such as actual
                      release work on the day of release, verification, and Google after release.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurServicePage;
