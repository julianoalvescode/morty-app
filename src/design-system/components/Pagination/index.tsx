import { PaginationItem } from "./Item";
import * as I from "./types";

import { generatePagesArray } from "../../../presentation/helpers";
import styles from "./pagination.module.scss";

const siblingsCount = 1;
export function Pagination({
  onPageChange,
  totalCountOfRegisters,
  currentPage = 1,
  registersPerPage,
}: I.PaginationProps) {
  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage);

  const previousPage =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPage =
    currentPage < lastPage
      ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount))
      : [];

  return (
    <div className={styles["pagination-container"]}>
      <div>
        <strong className={styles["pagination-text-pages"]}>
          {currentPage}
        </strong>{" "}
        -
        <strong className={styles["pagination-text-pages"]}> {lastPage}</strong>
      </div>
      <div className={styles["pagination-container-button"]}>
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            {currentPage > 2 + siblingsCount && (
              <h2 className={styles["pagination-text"]}>....</h2>
            )}
          </>
        )}
        {previousPage.length > 0 &&
          previousPage.map((page, index) => (
            <PaginationItem
              onPageChange={onPageChange}
              key={index}
              number={page}
            />
          ))}
        <PaginationItem
          onPageChange={onPageChange}
          number={currentPage}
          isCurrent
        />
        {nextPage.length > 0 &&
          nextPage.map((page, index) => (
            <PaginationItem
              onPageChange={onPageChange}
              key={index}
              number={page}
            />
          ))}
        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <h2 className={styles["pagination-text"]}>....</h2>
            )}
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}
      </div>
    </div>
  );
}
