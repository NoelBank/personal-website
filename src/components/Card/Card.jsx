import styles from "./Card.module.scss";
import classNames from "classnames";

function Card({ url, children, className }) {
  const TAG = url ? "a" : "div";
  const props = url
    ? { href: url, target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <TAG {...props} className={classNames(styles.base, className)}>
      {children}
    </TAG>
  );
}

export default Card;
