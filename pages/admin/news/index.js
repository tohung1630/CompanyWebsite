import AdminLayout from "../../../layouts/AdminLayout";
import Main from "./Partials/main";

import styles from "./style.module.scss";

const News = () => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["container"]}>
        <Main />
      </div>
    </div>
  );
};

News.Layout = AdminLayout;

export default News;
