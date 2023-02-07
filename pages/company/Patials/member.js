import { useState } from 'react';
import { Col, Modal, Row } from 'antd';
import Image from 'next/image';

import HomePageImages from '../../../assets/Image/HomePageImages';

import style from '../style.module.scss';

const Member = () => {
  const [openModalCeo, setOpenModalCeo] = useState(false);
  const [openModalHuy, setOpenModalHuy] = useState(false);
  const [openModalTuyen, setOpenModalTuyen] = useState(false);
  const [openModalGiang, setOpenModalGiang] = useState(false);
  return (
    <div>
      <div className={style.memberWrapper}>
        <div className={style.heading}>
          <h1>Core Members</h1>
        </div>
        <Row gutter={32}>
          <Col md={12} sm={24}>
            <Row>
              <Col md={12} sm={12} xs={12}>
                <div className={style.cardMember} onClick={() => setOpenModalCeo(true)}>
                  <Image className={style.cardThumb} src={HomePageImages.memberCEO} alt=""></Image>
                  <span>
                    <h3>Tran Xuan Duc</h3>
                    <p>President and CEO</p>
                  </span>
                </div>
              </Col>
              <Col md={12} sm={12} xs={12}>
                <div className={`${style.cardMember} ${style.cardMemberMar}`} onClick={() => setOpenModalHuy(true)}>
                  <Image className={style.cardThumb} src={HomePageImages.memberHuy} alt=""></Image>
                  <span>
                    <h3>Phung Quang Huy</h3>
                    <p>1st Development Manager</p>
                  </span>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={12} sm={24}>
            <Row>
              <Col md={12} sm={12} xs={12}>
                <div className={style.cardMember} onClick={() => setOpenModalTuyen(true)}>
                  <Image className={style.cardThumb} src={HomePageImages.memberTuyen} alt=""></Image>
                  <span>
                    <h3>Nguyen Quang Tuyen</h3>
                    <p>Representative Director and Vice President</p>
                  </span>
                </div>
              </Col>
              <Col md={12} sm={12} xs={12}>
                <div className={`${style.cardMember} ${style.cardMemberMar}`} onClick={() => setOpenModalGiang(true)}>
                  <Image className={style.cardThumb} src={HomePageImages.memberGiang} alt=""></Image>
                  <span>
                    <h3>Nguyen Kim Giang</h3>
                    <p>Director 2nd Development Manager</p>
                  </span>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Modal
          className={style.modalCeo}
          centered
          open={openModalCeo}
          footer={null}
          onOk={() => setOpenModalCeo(false)}
          onCancel={() => setOpenModalCeo(false)}
        >
          <Row>
            <Col lg={12} sm={24}>
              <div className={style.modalAvatar}>
                <Image src={HomePageImages.imageR} alt="" className={style.modalLogoR}></Image>
                <Image src={HomePageImages.imageR1} alt="" className={style.modalLogoR1}></Image>
                <Image src={HomePageImages.layoutCeo} alt="" className={style.avatarUser}></Image>
              </div>
            </Col>
            <Col lg={12} sm={24}>
              <div className={style.modalTittle}>
                <p className={style.modalDecs}>President and CEO</p>
                <h3>Tran Xuan Duc</h3>
                <p>
                  After graduating from Hanoi University of Science and Technology and Ritsumeikan University, I decided
                  to start the business. I had been working in the IT industry for over ten years and playing a
                  important role as a founder, president and salesman in the company of over 70 employees. I know
                  customers’ needs and assist them in our developing solutions that work well after implementation.
                </p>
              </div>
            </Col>
          </Row>
        </Modal>
        <Modal
          className={style.modalCeo}
          centered
          open={openModalHuy}
          footer={null}
          onOk={() => setOpenModalHuy(false)}
          onCancel={() => setOpenModalHuy(false)}
        >
          <Row>
            <Col lg={12} sm={24}>
              <div className={style.modalAvatar}>
                <Image src={HomePageImages.imageR} alt="" className={style.modalLogoR}></Image>
                <Image src={HomePageImages.imageR1} alt="" className={style.modalLogoR1}></Image>
                <Image src={HomePageImages.layoutHuy} alt="" className={style.avatarUser}></Image>
              </div>
            </Col>
            <Col lg={12} sm={24}>
              <div className={style.modalTittle}>
                <p className={style.modalDecs}>1st Development Manager</p>
                <h3>Phung Quang Huy</h3>
                <p>
                  Graduated from Posts and Telecommunications Institute of Technology, I have 10 years of experiences in
                  webite and app development, as well as expertised in code languages of C #, PHP, and COBOL. Besides
                  more than 3 years of working experiences in Japan, I have been working in a major Japanese company as
                  PM / BrSE development manager.
                </p>
              </div>
            </Col>
          </Row>
        </Modal>
        <Modal
          className={style.modalCeo}
          centered
          open={openModalTuyen}
          footer={null}
          onOk={() => setOpenModalTuyen(false)}
          onCancel={() => setOpenModalTuyen(false)}
        >
          <Row>
            <Col lg={12} sm={24}>
              <div className={style.modalAvatar}>
                <Image src={HomePageImages.imageR} alt="" className={style.modalLogoR}></Image>
                <Image src={HomePageImages.imageR1} alt="" className={style.modalLogoR1}></Image>
                <Image src={HomePageImages.layoutTuyen} alt="" className={style.avatarUser}></Image>
              </div>
            </Col>
            <Col lg={12} sm={24}>
              <div className={style.modalTittle}>
                <p className={style.modalDecs}>Representative Director and Vice President</p>
                <h3>Nguyen Quang Tuyen</h3>
                <p>
                  I graduated from Hanoi University of Science and Technology and Ritsumeikan University and was
                  certified as Scrum PSM web developer. I had been working for Viettel, a Vietnamese leading
                  telecommunication company then continued to develop many products with multitude of customers and
                  showed my sales skills.
                </p>
              </div>
            </Col>
          </Row>
        </Modal>
        <Modal
          className={style.modalCeo}
          centered
          open={openModalGiang}
          footer={null}
          onOk={() => setOpenModalGiang(false)}
          onCancel={() => setOpenModalGiang(false)}
        >
          <Row>
            <Col lg={12} sm={24}>
              <div className={style.modalAvatar}>
                <Image src={HomePageImages.imageR} alt="" className={style.modalLogoR}></Image>
                <Image src={HomePageImages.imageR1} alt="" className={style.modalLogoR1}></Image>
                <Image src={HomePageImages.layoutGiang} alt="" className={style.avatarUser}></Image>
              </div>
            </Col>
            <Col lg={12} sm={24}>
              <div className={style.modalTittle}>
                <p className={style.modalDecs}>Director and General Manager of 2nd Development Department</p>
                <h3>Nguyen Kim Giang</h3>
                <p>
                  Graduated from Hanoi University of Science and Technology and Ritsumeikan University, as well as
                  experienced working with Japanese people, I have enough skills in communication and working style as
                  have obtained the highest level of the Japanese Language Proficiency Test, so I is confident in
                  handling even the most complicated cases. I was the team leader of 20 members and was responsible for
                  various significant projects.
                </p>
              </div>
            </Col>
          </Row>
        </Modal>
      </div>
    </div>
  );
};

export default Member;
