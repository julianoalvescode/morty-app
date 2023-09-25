import * as I from "./types";

import styles from "./item-pagination.module.scss";

export function PaginationItem({
  number,
  isCurrent = false,
  onPageChange,
}: I.PaginationItem) {
  switch (isCurrent) {
    case true:
      return (
        <button
          className={
            styles["pagination-item-button"] +
            " " +
            styles["pagination-item-button-active"]
          }
        >
          {number}
        </button>
      );
    default:
      return (
        <button
          className={styles["pagination-item-button"]}
          onClick={() => onPageChange(number)}
        >
          {number}
        </button>
      );
  }
}
