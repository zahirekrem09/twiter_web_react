import React from "react";
import styles from "./LayoutExtra.module.css";
import cn from "classnames";

function LayoutExtra({ children }) {
  return <div className={cn(styles.extra)}>{children}</div>;
}

export default LayoutExtra;
