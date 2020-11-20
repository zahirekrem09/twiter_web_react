import React from "react";
import cn from "classnames";
import styles from "./Text.module.css";

export default function Text({ bold = false, children, className, ...props }) {
  return (
    <span
      className={cn([styles.text, bold && styles.bold, className])}
      {...props}
    >
      {children}
    </span>
  );
}
