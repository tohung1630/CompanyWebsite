import { Col, Row } from 'antd';
import Image from 'next/image';
import HomePageImages from '../../assets/Image/HomePageImages';
import Member from './Patials/member';

import style from './style.module.scss';

const CompanyPage = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <Row>
          <Col lg={20} sm={24} className={style.content}>
            <div className={style.heading}>
              <h1>Company Profile</h1>
              <Row gutter={{ lg: 40 }}>
                <Col className={style.info} lg={12} sm={24}>
                  <h2>Japanese Corporation</h2>
                  <ul className={style.listInfo}>
                    <li className={style.infoItem}>
                      <Row justify={'space-between'}>
                        <Col lg={8}>
                          <h3>Company</h3>
                        </Col>
                        <Col lg={16}>
                          <p>Relipa Japan Joint Stock Company</p>
                        </Col>
                      </Row>
                    </li>
                    <li className={style.infoItem}>
                      <Row justify={'space-between'}>
                        <Col lg={8}>
                          <h3>Established</h3>
                        </Col>
                        <Col lg={16}>
                          <p>2018</p>
                        </Col>
                      </Row>
                    </li>
                    <li className={style.infoItem}>
                      <Row justify={'space-between'}>
                        <Col lg={8}>
                          <h3>CEO</h3>
                        </Col>
                        <Col lg={16}>
                          <p>Tran Xuan Duc</p>
                        </Col>
                      </Row>
                    </li>
                    <li className={style.infoItem}>
                      <Row justify={'space-between'}>
                        <Col lg={8}>
                          <h3>Address</h3>
                        </Col>
                        <Col lg={16}>
                          <p>Japan, Tokyo, 1-14-14 Tomigaya, Shibuya-ku, Tokyo Stanford Annex Building 3F</p>
                        </Col>
                      </Row>
                    </li>
                    <div classNam={style.map}>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12965.633070051217!2d139.691427!3d35.666948!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbfbe989a567f68c4!2zKOagqinjgrnjgr_jg7Pjg5Xjgqnjg7zjg4k!5e0!3m2!1sja!2sjp!4v1674098414040!5m2!1sja!2sjp"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        width="100%"
                        height={400}
                      ></iframe>
                    </div>
                    <li className={style.infoItem}>
                      <Row justify={'space-between'}>
                        <Col lg={8}>
                          <h3>Business description</h3>
                        </Col>
                        <Col lg={16}>
                          <p>Offshore development for Japanese companies</p>
                        </Col>
                      </Row>
                    </li>
                    <li className={style.infoItem}>
                      <Row justify={'space-between'}>
                        <Col lg={8}>
                          <h3>Email</h3>
                        </Col>
                        <Col lg={16}>
                          <p>sales@relipasoft.com</p>
                        </Col>
                      </Row>
                    </li>
                    <li className={style.infoItem}>
                      <Row justify={'space-between'}>
                        <Col lg={8}>
                          <h3>Phone number</h3>
                        </Col>
                        <Col lg={16}>
                          <p>(+81) 3 6804 9294</p>
                        </Col>
                      </Row>
                    </li>
                  </ul>
                </Col>
                <Col lg={12} sm={24} className={style.info}>
                  <h2>Vietnam Headquarters</h2>
                  <ul className={style.listInfo}>
                    <li className={style.infoItem}>
                      <Row justify={'space-between'}>
                        <Col lg={8}>
                          <h3>Company</h3>
                        </Col>
                        <Col lg={16}>
                          <p>Relipa Co., Ltd.</p>
                        </Col>
                      </Row>
                    </li>
                    <li className={style.infoItem}>
                      <Row justify={'space-between'}>
                        <Col lg={8}>
                          <h3>Established</h3>
                        </Col>
                        <Col lg={16}>
                          <p>2016</p>
                        </Col>
                      </Row>
                    </li>
                    <li className={style.infoItem}>
                      <Row justify={'space-between'}>
                        <Col lg={8}>
                          <h3>CEO</h3>
                        </Col>
                        <Col lg={16}>
                          <p>Tran Xuan Duc</p>
                        </Col>
                      </Row>
                    </li>
                    <li className={style.infoItem}>
                      <Row justify={'space-between'}>
                        <Col lg={8}>
                          <h3>Address</h3>
                        </Col>
                        <Col lg={16}>
                          <p>
                            22F, B Tower, Song Da Building, Pham Hung Street, My Dinh 1, Nam Tu Liem, Ha Noi, Viet Nam
                          </p>
                        </Col>
                      </Row>
                    </li>
                    <div classNam={style.map}>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.376044344458!2d105.77887151443572!3d21.01763439353504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454ac16f4b913%3A0xe05c647fe184c739!2sRELIPA%20CO.%2C%20LTD!5e0!3m2!1svi!2s!4v1675053336557!5m2!1svi!2s"
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        width="100%"
                        height={400}
                      ></iframe>
                    </div>
                    <li className={style.infoItem}>
                      <Row justify={'space-between'}>
                        <Col lg={8}>
                          <h3>Business description</h3>
                        </Col>
                        <Col lg={16}>
                          <p>Offshore development for Japanese companies</p>
                        </Col>
                      </Row>
                    </li>
                    <li className={style.infoItem}>
                      <Row justify={'space-between'}>
                        <Col lg={8}>
                          <h3>Email</h3>
                        </Col>
                        <Col lg={16}>
                          <p>sales@relipasoft.com</p>
                        </Col>
                      </Row>
                    </li>
                    <li className={style.infoItem}>
                      <Row justify={'space-between'}>
                        <Col lg={8}>
                          <h3>Phone number</h3>
                        </Col>
                        <Col lg={16}>
                          <p>(+84) 24 3200 4725</p>
                        </Col>
                      </Row>
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
            <div>
              <div className={style.heading}>
                <h1>CEO Message</h1>
              </div>
              <div className={style.ceoMessage}>
                <Image className={style.imageCeo} src={HomePageImages.CEO} alt=""></Image>
                <div className={style.ceoTittle}>
                  <p>
                    Our company, Relipa Co., Ltd. is a system development company headquartered in Hanoi, Vietnam, and
                    was established in 2016 by me as founder and 2 co-founders, all are Vietnamese graduated from the
                    University of Science and Technology in Vietnam and Ritsumeikan University in Japan. After 2 years
                    from establishment in 2016, we officially launched a Japanese branch and have consistently provided
                    offshore development services specialized for Japanese market.
                  </p>
                  <p>
                    As a young student in a developing country like Vietnam, when I had the opportunity to study abroad
                    in Japan at the age of 21, I was really impressed by the state-of-the-art technologies and modern
                    facilities in such a developed country which I had never seen in my home country.
                  </p>
                  <p>
                    All the very first steps in Japan had made me personally aware of the big gap between 2 countries.
                    On the other hand, throughout my studies in Ritsumeikan University, I surprizingly found that the
                    gap in terms of IT related industrial technologies between Vietnam and Japan was considerably small.
                    This was the reason why I decided to challenge myself in introducing new technologies in this field,
                    so that I can contribute my own knowledge and skills to the development of my home countries
                    Vietnam, Japan and the relationship between 2 countries.
                  </p>
                  <p>
                    After graduating, I made use of the know-how accumulated during the course of universities and
                    working experiences from companies to build a company with my colleagues.
                  </p>
                  <p>
                    I am really proud of the quality of human resources in Relipa. We have many engineers with a deep
                    understanding of the Japanese mind, who had been by living in Japan for a certain period of time for
                    studying or working. Besides, our engineers with the ability to use Japanese fluently are confident
                    in responding face-to-face requirement definitions. In addition, as we have many engineers from
                    Vietnam is top-ranked IT universities such as Hanoi University of Science and Technology, we provide
                    high-quality services with up-to-date technology and continuously updated skills.
                  </p>
                  <p>
                    Since February 2020, the Corona virus has spread all over the world and had a great impact on our
                    daily lives. As you become accustomed to the New normal, in the global trend of digital
                    transformation waves (DX), Relipa will try our best to become your reliable partner.
                  </p>
                </div>
                <div className={style.ceoSign}>
                  <p>President and CEO</p>
                  <h3>TRAN XUAN DUC</h3>
                </div>
              </div>
            </div>
            <div className={style.MVWrapper}>
              <div className={style.heading}>
                <h1>Mission & Values</h1>
              </div>
              <div className={style.missionItem}>
                <h2>Mission</h2>
                <div className={style.missionDecs}>
                  Relipa exists to enhance growth mindset for modern young generation, create a positive,
                  knowledge-sharing environment and people-first attitude for all members. By doing so, we provide
                  professional and reliable services to our customers.
                </div>
              </div>
              <div className={style.missionItem}>
                <h2>Vision</h2>
                <div>
                  To be the top human-centric software service in Vietnam, a partner to inspire, accompany and turn
                  clients every idea reality.
                </div>
              </div>
              <div className={style.missionItem}>
                <h2>Core Values</h2>
                <div>
                  <p>Proactive</p> <p>Flexible</p> <p>Collaborative</p>
                </div>
              </div>
            </div>
            <Member />
          </Col>
          <Col lg={4} sm={0} xs={0} className={style.navBar}>
            <ul>
              <li>
                <a href="#">Company Profile</a>
              </li>
              <li>
                <a href="#">CEO Message</a>
              </li>
              <li>
                <a href="#">Mission & Values</a>
              </li>
              <li>
                <a href="#">Core Members</a>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CompanyPage;
