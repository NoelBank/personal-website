import styles from "./ImprintContentLeft.module.scss";
import Typed from "react-typed";

function ImprintContentLeft() {
  return (
    <div className={styles.base}>
      <h1 className={styles.headline}>
        <Typed
          strings={["Was sein muss, muss sein!"]}
          typeSpeed={60}
          backDelay={2000}
          backSpeed={60}
        />
      </h1>
      <h5>Angaben gemäß § 5 TMG </h5>
      <p>
        Mailboxde.com GmbH
        <br />
        nbank, ID 176434
        <br />
        Äussere Weberstr. 57
        <br />
        02763 Zittau, GERMANY
        <br />
      </p>
      <h5>Kontakt</h5>
      <p>
        <strong>Telefon</strong>: auf Anfrage
        <br />
        <strong>E-Mail</strong>: info@nbank.dev
      </p>
    </div>
  );
}

export default ImprintContentLeft;
