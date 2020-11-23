import React, { useContext } from "react";
import useWindowSize from "../hooks/useWindowSize";
import StoreContext from "../store";
import Navigation from "./Navigation";
import ProfilBox from "./ProfileBox";
import ThemeButton from "./ThemeButton";

import { Tweet } from "./icons";

import styles from "./LayoutSidebar.module.css";
import cn from "classnames";

function LayoutSidebar({ flat }) {
  const size = useWindowSize();
  const store = useContext(StoreContext);

  return (
    <div className={cn(styles.sidebar)}>
      {/* flat navbardaki textleri silicek */}
      <Navigation flat={flat} />
      <div className={cn(styles.tweet, size < 510 && styles.stickybutton)}>
        <ThemeButton
          xl
          full={!flat}
          onClick={() => store.onModalOpen()}
          // className={size < 500 && styles.stickybutton}
        >
          {flat ? <Tweet /> : "Tweet"}
        </ThemeButton>
      </div>
      {/* tweetpop up */}

      <div className={styles.profile}>
        <ProfilBox flat={flat} />
      </div>
    </div>
  );
}

export default LayoutSidebar;
