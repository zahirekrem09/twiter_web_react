import React from "react";
import styles from "./Layout.module.css";
import cn from "classnames";

function Layout({ children }) {
  return <div className={cn(styles.layout)}>{children}</div>;
}

export default Layout;
