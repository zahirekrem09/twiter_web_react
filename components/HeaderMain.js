import React from "react";
import styles from "./HeaderMain.module.css";
import cn from "classnames";
import IconButton from "./IconButton";
import { TimelineProp } from "./icons";

function HeaderMain({ children, className }) {
  return (
    <div className={cn(styles.header, className)}>
      {children}
      <IconButton className={styles.theme}>
        <TimelineProp />
      </IconButton>
    </div>
  );
}

export default HeaderMain;
