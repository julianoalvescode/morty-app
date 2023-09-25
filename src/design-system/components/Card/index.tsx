import { CardProps } from "./types";
import { LiveStatus } from "./../Live";

import styles from "./card.module.scss";

export function Card(params: CardProps) {
  if (!params) {
    return <></>;
  }

  return (
    <div className={styles.card}>
      <img
        className={styles["card-image"]}
        src={params?.image}
        alt={params?.name}
      />
      <div className={styles["card-info-insider"]}>
        <div className={styles["card-info-text-container"]}>
          <h1 className={styles["card-title"]}>{params?.name}</h1>
          <LiveStatus status={params?.status} />
        </div>
        <div className={styles["card-info-text-container"]}>
          <h4 className={styles["card-info-text"]}>Last known location:</h4>
          <h3 className={styles["card-info-text-main"]}>
            {params?.location?.name}
          </h3>
        </div>
        <div className={styles["card-info-text-container"]}></div>
      </div>
    </div>
  );
}
