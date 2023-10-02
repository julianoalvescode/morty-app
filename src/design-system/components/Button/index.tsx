import { ButtonCustomProps } from "./types";

import styles from "./button.module.scss";

export function Button({ children, ...rest }: ButtonCustomProps) {
  return (
    <>
      <button {...rest} className={styles.button}>
        {children}
      </button>
    </>
  );
}
