import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Image from 'next/image';

import SideBarMobileItem from './SideBarMobileItem';
import adminImages from '../../../assets/Image/AdminImage';
import { GetDataStaticPage } from '../../../redux/slices/staticPageSlices';

import styles from '../style.module.scss';

const AdminSideBar = ({ handleGetPage, page, navBarMobile, handleOpenModal }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleNextDashboard = () => {
    router.push('/admin/dashboard');
  };

  const handleNext = (index) => {
    handleGetPage(index);
  };

  const handleGetApiDataStatic = () => {
    dispatch(GetDataStaticPage());
  };

  useEffect(() => {
    if (page === 'dashboard') {
      router.push('/admin/dashboard');
      return;
    }
    if (page === 'banner') {
      router.push('/admin/banner');
      return;
    }
    if (page === 'blogs') {
      router.push('/admin/blogs');
      return;
    }
    if (page === 'news') {
      router.push('/admin/news');
      return;
    }
    if (page === 'products') {
      router.push('/admin/products');
      return;
    }
    if (page === 'static-pages') {
      router.push('/admin/static-pages');
      return;
    }
    if (page === 'tags') {
      router.push('/admin/tags');
      return;
    }
    if (page === 'client-voice') {
      router.push('/admin/client-voice');
      return;
    }
    if (page === 'contact') {
      router.push('/admin/contact');
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar__header']} onClick={handleNextDashboard}>
        <Image className={styles['sidebar__header__img']} src={adminImages.sideLogo} alt="Logo" />
        Relipa cms
      </div>
      <div className={styles['sidebar__list']}>
        {navBarMobile && (
          <div className={styles['sidebar__list__mobile__item']}>
            <SideBarMobileItem handleOpenModalChangePassword={handleOpenModal} />
          </div>
        )}
        <div
          className={
            page === 'dashboard'
              ? `${styles['sidebar__list__item']} ${styles['sidebar__list__item-active']}`
              : styles['sidebar__list__item']
          }
          onClick={() => handleNext('dashboard')}
        >
          <Image
            className={styles['sidebar__list__item-icon']}
            src={page === 'dashboard' ? adminImages.sideIconDashBoard : adminImages.sideIconDashBoardWhite}
            alt="sideIconDashBoard"
          />
          Dashboard
        </div>
        <div
          className={
            page === 'banner'
              ? `${styles['sidebar__list__item']} ${styles['sidebar__list__item-active']}`
              : styles['sidebar__list__item']
          }
          onClick={() => handleNext('banner')}
        >
          <Image
            className={styles['sidebar__list__item-icon']}
            src={page === 'banner' ? adminImages.sideIconBanner : adminImages.sideIconBannerWhite}
            alt="sideIconBanner"
          />
          Banner
        </div>
        <div
          className={
            page === 'blogs'
              ? `${styles['sidebar__list__item']} ${styles['sidebar__list__item-active']}`
              : styles['sidebar__list__item']
          }
          onClick={() => handleNext('blogs')}
        >
          <Image
            className={styles['sidebar__list__item-icon']}
            src={page === 'blogs' ? adminImages.sideIconBlogs : adminImages.sideIconBlogsWhite}
            alt="sideIconBlogs"
          />
          Blogs
        </div>
        <div
          className={
            page === 'news'
              ? `${styles['sidebar__list__item']} ${styles['sidebar__list__item-active']}`
              : styles['sidebar__list__item']
          }
          onClick={() => handleNext('news')}
        >
          <Image
            className={styles['sidebar__list__item-icon']}
            src={page === 'news' ? adminImages.sideIconNews : adminImages.sideIconNewsWhite}
            alt="sideIconNews"
          />
          News
        </div>
        <div
          className={
            page === 'products'
              ? `${styles['sidebar__list__item']} ${styles['sidebar__list__item-active']}`
              : styles['sidebar__list__item']
          }
          onClick={() => handleNext('products')}
        >
          <Image
            className={styles['sidebar__list__item-icon']}
            src={page === 'products' ? adminImages.sideIconProducts : adminImages.sideIconProductsWhite}
            alt="sideIconProducts"
          />
          Products
        </div>
        <div
          className={
            page === 'static-pages'
              ? `${styles['sidebar__list__item']} ${styles['sidebar__list__item-active']}`
              : styles['sidebar__list__item']
          }
          onClick={() => {
            handleNext('static-pages');
            handleGetApiDataStatic();
          }}
        >
          <Image
            className={styles['sidebar__list__item-icon']}
            src={page === 'static-pages' ? adminImages.sideIconProducts : adminImages.sideIconProductsWhite}
            alt="sideIconProducts"
          />
          Static Pages
        </div>
        <div
          className={
            page === 'tags'
              ? `${styles['sidebar__list__item']} ${styles['sidebar__list__item-active']}`
              : styles['sidebar__list__item']
          }
          onClick={() => handleNext('tags')}
        >
          <Image
            className={styles['sidebar__list__item-icon']}
            src={page === 'tags' ? adminImages.sideIconTags : adminImages.sideIconTagsWhite}
            alt="sideIconTags"
          />
          Tags
        </div>
        <div
          className={
            page === 'client-voice'
              ? `${styles['sidebar__list__item']} ${styles['sidebar__list__item-active']}`
              : styles['sidebar__list__item']
          }
          onClick={() => handleNext('client-voice')}
        >
          <Image
            className={styles['sidebar__list__item-icon']}
            src={page === 'client-voice' ? adminImages.sideIconClientVoice : adminImages.sideIconClientVoiceWhite}
            alt="sideIconClientVoice"
          />
          Client Voice
        </div>
        <div
          className={
            page === 'contact'
              ? `${styles['sidebar__list__item']} ${styles['sidebar__list__item-active']}`
              : styles['sidebar__list__item']
          }
          onClick={() => handleNext('contact')}
        >
          <Image
            className={styles['sidebar__list__item-icon']}
            src={page === 'contact' ? adminImages.sideIconUser : adminImages.sideIconUserWhite}
            alt="sideIconUser"
          />
          Contact
        </div>
      </div>
      <div className={styles['sidebar__background-image']}></div>
    </div>
  );
};

export default AdminSideBar;
