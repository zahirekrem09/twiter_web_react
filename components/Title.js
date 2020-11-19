import React from "react";
import styles from "./Title.module.css";

export default function Title({ children }) {
  return <h2 className={styles.title}>{children}</h2>;
}
