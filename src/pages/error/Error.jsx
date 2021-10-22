import styles from "./Error.module.scss";
import Typed from "react-typed";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

function Error() {
  return (
    <div className={styles.base}>
      <h1 className={styles.headline}>
        <Typed
          strings={[
            "Mhh. Sieht nach einem Fehler aus...",
            "Die Seite könnte nicht exisitieren...",
            "Es könnte aber auch ein Serverfehler sein 🤔",
            "Geh am besten zurück zur Startseite!",
          ]}
          typeSpeed={60}
          backDelay={2000}
          backSpeed={60}
          loop
        />
      </h1>

      <Link to="/" className={styles.button}>
        <FiArrowLeft className={styles.icon} />
        Zurück zur Startseite
      </Link>
    </div>
  );
}

export default Error;
