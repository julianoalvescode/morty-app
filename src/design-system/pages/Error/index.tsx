import styles from "./error.page.module.scss";

export function ErrorPage() {
  return (
    <main className={styles["error-container"]}>
      <h1 className={styles["error-title"]}>Oops!</h1>
      <h4 className={styles["error-subtitle"]}>
        Parece que essa pagina não existe.
      </h4>
    </main>
  );
}
