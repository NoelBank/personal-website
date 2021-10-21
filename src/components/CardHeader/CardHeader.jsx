import { SiGithub, SiTwitter } from "react-icons/si";
import styles from "./CardHeader.module.scss";

const SOCIAL_MEDIA = {
  github: {
    icon: SiGithub,
    prettyName: "GitHub",
  },
  twitter: {
    icon: SiTwitter,
    prettyName: "Twitter",
  },
};

function CardHeader({ type }) {
  const ICON = SOCIAL_MEDIA[type].icon;
  return (
    <div className={styles.base}>
      <ICON className={styles.icon} />
      {SOCIAL_MEDIA[type].prettyName}
    </div>
  );
}

export default CardHeader;
