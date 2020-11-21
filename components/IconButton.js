import React from "react";

import styles from "./IconButton.module.css";
import cn from "classnames";
import Button from "./Button";

function IconButton({ children, className, ...props }) {
  return (
    <Button className={cn(styles.icon, className)} {...props}>
      {children}
    </Button>
  );
}

export default IconButton;
