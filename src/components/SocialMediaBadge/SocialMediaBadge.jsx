import { SiGithub, SiTwitter, SiInstagram } from "react-icons/si";
import { FaTwitch, FaDiscord } from "react-icons/fa";

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
  twitch: {
    icon: FaTwitch,
    prettyName: "Twitch",
    url: "https://twitch.tv/NoelBank",
  },
  discord: {
    icon: FaDiscord,
    prettyName: "Discord",
    url: "https://discordapp.com/users/200573122980741121",
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
      <span>{SOCIAL_MEDIA[type].prettyName}</span>
    </a>
  );
}

export default SocialMediaBadge;
