import React from "react";
import styles from "./LayoutMain.module.css";
import cn from "classnames";

function LayoutMain({ children }) {
  return (
    <div className={cn(styles.main)}>
      <div className={cn(styles.header)}></div>
      <div className={cn(styles.content)}>{children}</div>
    </div>
  );
}

export default LayoutMain;
