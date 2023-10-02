import { CardList, Footer, Header } from "@/design-system/components";

import styles from "./home.module.scss";
export default function Home() {
  return (
    <>
      <main className={styles["home-container"]}>
        <aside className={styles["home-grid-items"]}>
          <Header />
          <CardList />
          <Footer />
        </aside>
      </main>
    </>
  );
}
