import styles from "./Avatar.module.scss";

function Avatar() {
  return (
    <img
      className={styles.base}
      src="https://gravatar.com/userimage/147666338/1a3341f02dbe89e49db1fa067d2c4e92.jpeg?size=256"
      alt="Profilbild Noel Bank"
    />
  );
}

export default Avatar;
