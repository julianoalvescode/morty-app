import { useState } from "react";
import { useAllCharacter } from "@/presentation/hooks";
import { Card, Pagination, SkeletonCard } from "@/design-system/components";

import styles from "./card-list.module.scss";

export function CardList() {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading } = useAllCharacter({ page });

  if (isLoading) {
    return (
      <>
        <div className={styles["card-list"]}>
          {Array.from({ length: 20 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <div className={styles["card-list"]}>
        {data?.results?.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
      <ul className={styles["card-list-pagination"]}>
        <Pagination
          onPageChange={setPage}
          totalCountOfRegisters={data?.info?.count || 0}
          currentPage={page}
          registersPerPage={20}
        />
      </ul>
    </>
  );
}
