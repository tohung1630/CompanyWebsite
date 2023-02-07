import AdminLayout from "../../../layouts/AdminLayout";
import Dashboard from "./Partials/main";
import styles from "./style.module.scss";

const DashBoard = () => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["container"]}>
        <Dashboard />
      </div>
    </div>
  );
};

DashBoard.Layout = AdminLayout;

export default DashBoard;
