import { useEffect, useState } from 'react';
import Image from 'next/image';
import { SwapLeftOutlined, SwapRightOutlined } from '@ant-design/icons';

import HomePageImages from '../../../assets/Image/HomePageImages';
import style from '../style.module.scss';
import { Col, Row } from 'antd';
import { useRouter } from 'next/router';

const slideData = [
  {
    image: HomePageImages.sliderProduct,
    tittle:
      'To be the top human-centric software service in Vietnam, a partner to inspire, accompany and turn clients every idea reality.',
    name: '',
    seeMore: 'products',
  },
  {
    image: HomePageImages.sliderContact,
    tittle: 'With the expertise in Blockchain and experienced human resources, we give the key for your success.',
    name: 'Let we solve your problem!',
    seeMore: 'contact',
  },
  {
    image: HomePageImages.sliderCompany,
    tittle: '“RELIPA” comes from the acronym "RELIABLE PARTNER"',
    name: 'TOGETHER WE GROW',
    seeMore: 'company',
  },
];

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const router = useRouter();
  let slideInterval;

  const slideLength = slideData.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  const autoSide = () => {
    slideInterval = setInterval(nextSlide, 10000);
  };

  const handleGoToPage = (page) => {
    router.push(page);
  };

  //   useEffect(() => {
  //     setCurrentSlide(0);
  //   }, []);

  useEffect(() => {
    autoSide();
    return () => clearInterval(slideInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);

  return (
    <>
      <div className={style.slideWrapper}>
        <div className={style.iconLeft}>
          <SwapLeftOutlined onClick={prevSlide} />
        </div>
        <div className={style.iconRight}>
          <SwapRightOutlined onClick={nextSlide} />
        </div>
        <div className={style.slideImg}>
          <Image
            className={style.slideImage}
            src={slideData[currentSlide].image}
            alt={slideData[currentSlide].tittle}
          ></Image>
        </div>
      </div>
      <div className={style.slideWrapper1}>
        <Row justify="center" gutter={{ xs: 120, sm: 100, lg: 100, xl: 80 }} className={style.description}>
          <Col xl={24} lg={20} sm={20}>
            <h1>RELIPA</h1>
            <h2>{slideData[currentSlide].name}</h2>
            <p>{slideData[currentSlide].tittle}</p>
            <button onClick={() => handleGoToPage(slideData[currentSlide].seeMore)}>See More</button>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Slider;
