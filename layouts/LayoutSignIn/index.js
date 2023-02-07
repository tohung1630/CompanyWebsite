import styles from "./style.module.scss";

const LayoutSignIn = ({ children }) => {
  return (
    <div className={styles["wrapper"]}>
      <div>
        <div className={styles["container"]}>{children}</div>
      </div>
    </div>
  );
};

export default LayoutSignIn;
