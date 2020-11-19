import React from "react";
import Button from "./Button";
import styles from "./MenuButton.module.css";
import cn from "classnames";

function MenuButton({ notify, selected, children, ...props }) {
  return (
    <Button
      className={cn(styles.navButton, selected && styles.navButtonSelected)}
    >
      {children}
      {notify && <span className={styles.notify}>{notify}</span>}
    </Button>
  );
}

export default MenuButton;
