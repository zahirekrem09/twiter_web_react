import React from "react";
import styles from "./LayoutMain.module.css";
import cn from "classnames";

function LayoutMain({ children }) {
  return <div className={cn(styles.main)}>{children}</div>;
}

export default LayoutMain;
