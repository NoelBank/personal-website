import Avatar from "../Avatar/Avatar";
import styles from "./HomeContentLeft.module.scss";
import Typed from "react-typed";
import SocialMediaBadge from "../SocialMediaBadge/SocialMediaBadge";

function HomeContentLeft() {
  return (
    <>
      <div className={styles.personal}>
        <Avatar />
        <h3>Hi, ich bin Noel Bank.</h3>
      </div>
      <div className={styles.intro}>
        <h1 className={styles.headline}>
          <Typed
            strings={[
              "Application Developer aus Hannover.",
              "Application Developer aus Leidenschaft.",
            ]}
            typeSpeed={60}
            backDelay={2000}
            backSpeed={60}
          />
        </h1>

        <p className={styles.description}>
          Seit 2016 erschaffe ich Digitale Anwendungen für mich, meine Freunde
          und Kunden. Aktuell Arbeite ich als Application Developer bei der{" "}
          <a
            href="https://neoskop.de"
            target="_blank"
            rel="noopener noreferrer"
          >
            Neoskop GmbH
          </a>{" "}
          und beschäftige mich meistens mit React.js, Node.js, TypeScript und
          allem, was mit Frontend zu tun hat.
        </p>

        <p className={styles.description}>
          In meiner Freizeit kann ich nicht aufhören schöne Anwendungen zu
          entwickeln. Daher unterstütze ich verschiedene Projekte, im bereich
          der Entwicklung.
        </p>
      </div>
      <div className={styles.socialMedia}>
        <SocialMediaBadge type="github" />
        <SocialMediaBadge type="twitter" />
        <SocialMediaBadge type="instagram" />
      </div>
    </>
  );
}

export default HomeContentLeft;
