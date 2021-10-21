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
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita <a href="#id">kasd gubergren</a>, no sea takimata
          sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr.
        </p>

        <p className={styles.description}>
          sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
          aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
          dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est Lorem ipsum dolor sit amet.
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
