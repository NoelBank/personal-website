import HomeContentLeft from "../../components/HomeContentLeft/HomeContentLeft";
import HomeContentRight from "../../components/HomeContentRight/HomeContentRight";
import Layout from "../../components/Layout/Layout";
import styles from "./Home.module.scss";

function Home() {
  return (
    <div className={styles.base}>
      <Layout
        contentLeft={<HomeContentLeft />}
        contentRight={<HomeContentRight />}
      />
    </div>
  );
}

export default Home;
