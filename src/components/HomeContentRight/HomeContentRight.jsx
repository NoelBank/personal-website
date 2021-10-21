import useGithub from "../../hooks/apis/useGithub";
import Card from "../Card/Card";
import ContactCard from "../ContactCard/ContactCard";

import Footer from "../Footer/Footer";
import GithubCard from "../GithubCard/GithubCard";
import styles from "./HomeContentRight.module.scss";

function HomeContentRight() {
  const { githubData } = useGithub();

  return (
    <>
      <div className={styles.cards}>
        <ContactCard />
      </div>
      <div className={styles.cards}>
        {githubData ? (
          githubData.map((data) => <GithubCard key={data.id} data={data} />)
        ) : (
          <Card />
        )}
      </div>
      <Footer />
    </>
  );
}

export default HomeContentRight;
