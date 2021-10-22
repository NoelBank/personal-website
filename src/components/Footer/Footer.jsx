import styles from "./Footer.module.scss";
import packageJson from "../../../package.json";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className={styles.base}>
      developed with {year} ❤️ by Noel Bank |{` v${packageJson.version}`}
      <div className={styles.links}>
        <Link to="/imprint" className={styles.link}>
          impressum
        </Link>
      </div>
    </div>
  );
}

export default Footer;
