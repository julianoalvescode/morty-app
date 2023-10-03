import styles from "./footer.module.scss";

export function Footer() {
  return (
    <footer className={styles["footer-container"]}>
      <a
        href="https://github.com/julianoalvescode"
        className={styles["footer-container-text"]}
        target="_blank"
      >
        Made by Barba
      </a>
    </footer>
  );
}
