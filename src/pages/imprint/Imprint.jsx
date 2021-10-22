import styles from "./Imprint.module.scss";
import Layout from "../../components/Layout/Layout";
import ImprintContentLeft from "../../components/ImprintContentLeft/ImprintContentLeft";
import ImprintContentRight from "../../components/ImprintContentRight/ImprintContentRight";
import Backwards from "../../components/Backwards/Backwards";

function Imprint() {
  return (
    <div className={styles.base}>
      <Backwards />
      <Layout
        contentLeft={<ImprintContentLeft />}
        contentRight={<ImprintContentRight />}
      />
    </div>
  );
}

export default Imprint;
