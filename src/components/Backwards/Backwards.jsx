import { Link } from "react-router-dom";
import styles from "./Backwards.module.scss";
import { FiArrowLeft } from "react-icons/fi";

function Backwards() {
  return (
    <Link to="/" className={styles.base}>
      <FiArrowLeft className={styles.icon} />
    </Link>
  );
}

export default Backwards;
