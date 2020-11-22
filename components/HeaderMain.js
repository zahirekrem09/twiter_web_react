import React from "react";
import styles from "./HeaderMain.module.css";
import cn from "classnames";
import IconButton from "./IconButton";
import { TimelineProp, Options } from "./icons";

function HeaderMain({ children, className, icon }) {
  return (
    <div className={cn(styles.header, className)}>
      {children}
      <IconButton className={styles.theme}>{icon}</IconButton>
    </div>
  );
}

export default HeaderMain;
