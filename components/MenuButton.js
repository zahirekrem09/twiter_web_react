import React from "react";
import Button from "./Button";
import styles from "./MenuButton.module.css";
import cn from "classnames";

function MenuButton({ href, notify, selected, children, ...props }) {
  return (
    <Button
      className={cn(styles.navButton, selected && styles.navButtonSelected)}
      href={href}
      {...props}
    >
      {notify > 0 && <span className={styles.notify}>{notify}</span>}
      {children}
    </Button>
  );
}

export default MenuButton;
