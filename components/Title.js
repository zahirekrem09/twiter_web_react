import React from "react";
import styles from "./Title.module.css";
import cn from "classnames";

export default function Title({ children, className }) {
  return <h2 className={cn(styles.title, className)}>{children}</h2>;
}
