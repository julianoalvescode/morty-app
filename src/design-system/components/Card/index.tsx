import { CardProps } from "./types";
import { LiveStatus } from "@/design-system/components";

import styles from "./card.module.scss";
import { getNumberEpisode } from "@/presentation/helpers";

export function Card(params: CardProps) {
  if (!params) {
    return <></>;
  }

  return (
    <div className={styles.card}>
      <div className={styles["card-info-text-container"]}>
        <h1 className={styles["card-title"]}>{params?.name}</h1>
      </div>
      <img
        className={styles["card-image"]}
        src={params?.image}
        alt={params?.name}
        loading="lazy"
      />
      <div className={styles["card-info-insider"]}>
        <div className={styles["card-info-text-container"]}>
          <p className={styles["card-info-text"]}>
            Última localização conhecida:
          </p>
          <h3 className={styles["card-info-text-main"]}>
            {params?.location?.name}
          </h3>
        </div>
        <div className={styles["card-info-text-container"]}>
          <p className={styles["card-info-text"]}>
            {getNumberEpisode(params?.episode)}
          </p>
          <LiveStatus status={params?.status} />
        </div>
      </div>
    </div>
  );
}
