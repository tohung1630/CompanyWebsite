import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';

import adminImages from '../../../assets/Image/AdminImage';

import styles from '../style.module.scss';

const UserLanguageMobileItem = ({ handleOpenModalChangePassword }) => {
  const [showLangueNavBar, setShowLangueNavBar] = useState(false);
  const [showUserNavBar, setShowUserNavBar] = useState(false);
  const router = useRouter();

  const handleLangueToggleNavBar = () => {
    setShowUserNavBar(false);
    setShowLangueNavBar(!showLangueNavBar);
  };

  const handleUserToggleNavBar = () => {
    setShowLangueNavBar(false);
    setShowUserNavBar(!showUserNavBar);
  };

  return (
    <div className={styles['user__language__mobile']}>
      <button className={styles['user__language__mobile__btn']}>
        <div className={styles['user__language__mobile__btn__item']} onClick={handleLangueToggleNavBar}>
          <Image
            className={styles['user__language__mobile__btn__img']}
            src={adminImages.sideIconLangueWhite}
            alt="iconLangue"
          />
          <p className={styles['user__language__mobile__btn__tittle']}>Language</p>
        </div>
        {showLangueNavBar && (
          <>
            <nav className={styles['user__language__mobile__btn__nav']}>
              <li>VI</li>
              <li>EN</li>
            </nav>
            <div className={styles['user__language__mobile__btn__wrapper']} onClick={handleLangueToggleNavBar}></div>
          </>
        )}
      </button>
      <button className={styles['user__language__mobile__btn']}>
        <div className={styles['user__language__mobile__btn__item']} onClick={handleUserToggleNavBar}>
          <Image
            className={styles['user__language__mobile__btn__img']}
            src={adminImages.sideIconUserWhite}
            alt="iconUser"
          />
          <p className={styles['user__language__mobile__btn__tittle']}> Profile</p>
        </div>
        {showUserNavBar && (
          <>
            <nav className={styles['user__language__mobile__btn__nav']}>
              <li onClick={handleOpenModalChangePassword}>Change password</li>
              <li
                onClick={() => {
                  router.push('/admin/signin');
                }}
              >
                Logout
              </li>
            </nav>
            <div className={styles['user__language__mobile__btn__wrapper']} onClick={handleUserToggleNavBar}></div>
          </>
        )}
      </button>
    </div>
  );
};

export default UserLanguageMobileItem;
