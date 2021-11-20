import styles from "./Footer.module.scss";
import packageJson from "../../../package.json";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className={styles.base}>
      {year} - developed with ❤️ by Noel Bank |{` v${packageJson.version}`}
      <div className={styles.links}>
        <Link to="/imprint" className={styles.link}>
          impressum
        </Link>
        -
        <a href="https://status.nbank.dev" target="_blank" rel="noopener noreferrer" className={styles.link}>
          status
        </a>
      </div>
    </div>
  );
}

export default Footer;
