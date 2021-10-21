import styles from "./Layout.module.scss";

function Layout({ contentLeft, contentRight }) {
  return (
    <div className={styles.base}>
      <div className={styles.contentLeft}>{contentLeft}</div>
      <div className={styles.contentRight}>{contentRight}</div>
    </div>
  );
}

export default Layout;
