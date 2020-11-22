import React from "react";
import styles from "./LayoutExtra.module.css";
import cn from "classnames";
import SearchBox from "./Searcbox";
import Lists from "./Lists";
import Trends from "./Trends";
import FollowSuggestion from "./FollowSuggestion";

function LayoutExtra({ children }) {
  return (
    <section className={cn(styles.extra)}>
      {/* searchbox */}

      <div className={cn(styles.searchBox)}>
        <SearchBox />
      </div>

      <div className={cn(styles.extraStick)}></div>
      {/* Trends for you   */}
      <Lists title="Trends for you" icon>
        <Trends tag="Τραμπ" />
        <Trends tag="Black Friday" />
        <Trends tag="Κυριακης" />
        <Trends tag="Greek" />
        <Trends tag="Infognomon Politics" />
      </Lists>
      {/* Who to follow */}
      <Lists title="Who to follow">
        <FollowSuggestion />
        <FollowSuggestion />
        <FollowSuggestion />
      </Lists>
      {/* footer */}
    </section>
  );
}

export default LayoutExtra;
