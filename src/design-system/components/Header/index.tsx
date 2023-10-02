import { Status } from "@/design-system/components";
import styles from "./header.module.scss";

export function Header() {
  return (
    <>
      <nav className={styles["header-container"]}>
        <h1 className={styles["header-title"]}>Rick and Morty, Portal</h1>
        <Status />
      </nav>
    </>
  );
}
