import { getTextStatus } from "../../../presentation/helpers";
import { LiveStatusProps } from "./types";

import styles from "./live-status.module.scss";

export function LiveStatus(props: LiveStatusProps) {
  const statusClass = props.status ? styles[props.status] : styles.unknown;

  return (
    <div className={styles["live-status"]}>
      <h5 className={styles["live-status-text"]}>
        {getTextStatus(props.status)}
      </h5>
      <span className={`${styles["live-status-circle"]} ${statusClass}`} />
    </div>
  );
}
