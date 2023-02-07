import { useRouter } from "next/router";
import { useState } from "react";
import { deleteCookie } from "cookies-next";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";

import adminImages from "../../../assets/Image/AdminImage";
import { logout } from "../../../redux/slices/loginSlices";

import styles from "../style.module.scss";

const HeaderAdmin = ({ handleOpenModal }) => {
  const dispatch = useDispatch();
  const [showLangueNavBar, setShowLangueNavBar] = useState(false);
  const [showUserNavBar, setShowUserNavBar] = useState(false);
  const router = useRouter();

  const handleLangueToggleNavBar = () => {
    setShowLangueNavBar(!showLangueNavBar);
  };

  const handleUserToggleNavBar = () => {
    setShowUserNavBar(!showUserNavBar);
  };

  return (
    <div className={styles["container__header"]}>
      <button className={styles["container__header__btn"]}>
        <Image
          className={styles["container__header__btn-img"]}
          src={adminImages.sideIconLangue}
          alt="iconLangue"
          onClick={handleLangueToggleNavBar}
        />
        {showLangueNavBar && (
          <>
            <nav className={styles["container__header__btn__nav"]}>
              <li onClick={handleLangueToggleNavBar}>VI</li>
              <li onClick={handleLangueToggleNavBar}>EN</li>
            </nav>
            <div
              className={styles["container__header__btn__wrapper"]}
              onClick={handleLangueToggleNavBar}
            ></div>
          </>
        )}
      </button>
      <button className={styles["container__header__btn"]}>
        <Image
          className={styles["container__header__btn-img"]}
          src={adminImages.sideIconUser}
          alt="iconUser"
          onClick={handleUserToggleNavBar}
        />
        {showUserNavBar && (
          <>
            <nav className={styles["container__header__btn__nav"]}>
              <li
                onClick={() => {
                  handleOpenModal();
                  handleUserToggleNavBar();
                }}
              >
                Change password
              </li>
              <li
                onClick={() => {
                  deleteCookie("access_token");
                  dispatch(logout());
                  router.push("/admin/signin");
                  handleUserToggleNavBar();
                }}
              >
                Logout
              </li>
            </nav>
            <div
              className={styles["container__header__btn__wrapper"]}
              onClick={handleUserToggleNavBar}
            ></div>
          </>
        )}
      </button>
    </div>
  );
};

export default HeaderAdmin;
