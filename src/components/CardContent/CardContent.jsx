import styles from "./CardContent.module.scss";

function CardContent({ title, description }) {
  return (
    <div className={styles.base}>
      {title && <div className={styles.title}>{title}</div>}
      <div className={styles.description}>
        {description ||
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore."}
      </div>
    </div>
  );
}

export default CardContent;
