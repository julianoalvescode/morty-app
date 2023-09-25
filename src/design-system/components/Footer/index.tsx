import styles from "./footer.module.scss";

export function Footer() {
  return (
    <footer className={styles["footer-container"]}>
      <span className={styles["footer-container-text"]}>Made by Barba</span>
    </footer>
  );
}
