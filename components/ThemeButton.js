import React from "react";
import Button from "./Button";
import styles from "./ThemeButton.module.css";
import cn from "classnames";

function ThemeButton({ OnClick, className, children, ...props }) {
  return (
    <Button className={cn(styles.themeButton, className)} {...props}>
      {children}
    </Button>
  );
}

export default ThemeButton;
