import React from "react";
import styles from "./Stack.module.css";
import cn from "classnames";

function Stack({ column = false, children }) {
  return (
    <div className={cn(styles.stack, column && styles.column)}>{children}</div>
  );
}

export default Stack;
