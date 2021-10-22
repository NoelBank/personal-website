import { SiGithub, SiTwitter, SiInstagram } from "react-icons/si";

import styles from "./SocialMediaBadge.module.scss";

const SOCIAL_MEDIA = {
  github: {
    icon: SiGithub,
    prettyName: "GitHub",
    url: "https://github.com/NoelBank",
  },
  twitter: {
    icon: SiTwitter,
    prettyName: "Twitter",
    url: "https://twitter.com/nbankhnvr",
  },
  instagram: {
    icon: SiInstagram,
    prettyName: "Instagram",
    url: "https://instagram.com/noel.bank",
  },
  git: {
    icon: SiInstagram,
    prettyName: "Instagram",
    url: "https://instagram.com/noel.bank",
  },
};

function SocialMediaBadge({ type }) {
  const ICON = SOCIAL_MEDIA[type].icon;

  return (
    <a
      className={styles.base}
      href={SOCIAL_MEDIA[type].url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <ICON className={styles.icon} />
      {SOCIAL_MEDIA[type].prettyName}
    </a>
  );
}

export default SocialMediaBadge;
