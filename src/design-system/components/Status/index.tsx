import { useAllCharacter } from "@/presentation/hooks";
import styles from "./status.module.scss";
import { Button } from "@/design-system/components/Button";

import { FaSync } from "react-icons/fa";

export function Status() {
  const { isSuccess, isError, refetch } = useAllCharacter();

  return (
    <>
      {isSuccess && (
        <>
          <span
            aria-aria-description="Status in API"
            className={`${styles["status-circle"]} status-circle--online`}
          />
        </>
      )}
      {isError && (
        <>
          <Button onClick={() => refetch()}>
            Retry
            <FaSync color="var(--color-yellow)" />
          </Button>
        </>
      )}
    </>
  );
}
