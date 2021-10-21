import Card from "../Card/Card";
import CardFooter from "../CardFooter/CardFooter";
import styles from "./ContactCard.module.scss";

function ContactCard() {
  return (
    <Card
      className={styles.card}
      url={
        "mailto:info@nbank.dev?subject=Ich%20will%20mit%20dir%20zusammen%20arbeiten."
      }
    >
      <div className={styles.subheadline}>Du hast eine Vision?</div>
      <div className={styles.headline}>
        Hier kannst du mich am besten erreichen!
      </div>
      <CardFooter type="contact" />
    </Card>
  );
}

export default ContactCard;
