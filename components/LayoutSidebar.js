import React, { useContext } from "react";
import StoreContext from "../store";
import Navigation from "./Navigation";
import ProfilBox from "./ProfileBox";
import ThemeButton from "./ThemeButton";

import { Tweet } from "./icons";

import styles from "./LayoutSidebar.module.css";
import cn from "classnames";

function LayoutSidebar({ flat }) {
  const store = useContext(StoreContext);

  return (
    <div className={cn(styles.sidebar)}>
      {/* flat navbardaki textleri silicek */}
      <Navigation flat={flat} />
      <div className={styles.tweet}>
        <ThemeButton xl full={!flat} onClick={() => store.onModalOpen()}>
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
