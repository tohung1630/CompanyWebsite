import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import style from './style.module.scss';
import Image from 'next/image';
import HomePageImages from '../../assets/Image/HomePageImages';

const DefaultLayout = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const router = useRouter();

  const namePage = router.asPath?.slice(1);
  const isPage = router.asPath !== '/';

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const updatePosition = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return (
    <div className={style.wrapper}>
      <div>
        <Header className={style.header} scrollYPosition={scrollPosition} />
        {isPage && (
          <div className={style.banner}>
            <div className={style.bannerMargin}></div>
            <div className={style.background}></div>
            <div className={style.imageBannerWrapper}>
              <Image className={style.imageBanner} src={HomePageImages.imageBanner} alt=""></Image>
              <div className={style.namePageBackground}>{namePage}</div>
              <div className={style.namePage}>
                <h2>{namePage}</h2>
              </div>
              <span>
                Home - <p>{namePage}</p>
              </span>
            </div>
          </div>
        )}
        <div className={style.container}>{children}</div>
        <Footer className={style.footer} scrollYPosition={scrollPosition} handleGoToTop={scrollToTop} />
      </div>
    </div>
  );
};

export default DefaultLayout;
