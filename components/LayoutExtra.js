import React from "react";
import styles from "./LayoutExtra.module.css";
import cn from "classnames";
import SearchBox from "./Searcbox";

function LayoutExtra({ children }) {
  return (
    <section className={cn(styles.extra)}>
      {/* searchbox */}
      <SearchBox />
      {/* Trends for you   */}
      {/* Who to follow */}
      {/* footer */}
    </section>
  );
}

export default LayoutExtra;
