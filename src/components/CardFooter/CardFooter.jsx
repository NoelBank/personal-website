import styles from "./CardFooter.module.scss";
import { FiExternalLink, FiStar, FiCalendar, FiMail } from "react-icons/fi";
import { VscRepoForked } from "react-icons/vsc";
import * as dayjs from "dayjs";

function CardExternalLink() {
  return <FiExternalLink className={styles.externalLink} />;
}

function CardMailTo() {
  return <FiMail className={styles.externalLink} />;
}

function CardFooterGithub({ stars, dateModified, forks }) {
  const prettyDate = dayjs(dateModified).format("DD.MM.YYYY");

  return (
    <div className={styles.base}>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <FiStar className={styles.icon} />{" "}
          <span className={styles.statLabel}>{stars}</span>
        </div>
        <div className={styles.stat}>
          <VscRepoForked className={styles.icon} />{" "}
          <span className={styles.statLabel}>{forks}</span>
        </div>
        <div className={styles.stat}>
          <FiCalendar className={styles.icon} />{" "}
          <span className={styles.statLabel}>{prettyDate}</span>
        </div>
      </div>
      <CardExternalLink />
    </div>
  );
}

function CardFooterContact() {
  return (
    <div className={styles.base}>
      <div className={styles.stats}></div>
      <CardMailTo />
    </div>
  );
}

function CardFooter({ type, ...props }) {
  if (type === "github") {
    return <CardFooterGithub {...props} />;
  }

  if (type === "contact") {
    return <CardFooterContact {...props} />;
  }
  return "undefined";
}

export default CardFooter;
