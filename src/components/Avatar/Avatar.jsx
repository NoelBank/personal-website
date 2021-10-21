import styles from "./Avatar.module.scss";

function Avatar() {
  return (
    <img
      className={styles.base}
      src="https://www.gravatar.com/avatar/b5697326ea4f290539db74a2bb8773de"
      alt="Profilbild Noel Bank"
    />
  );
}

export default Avatar;
