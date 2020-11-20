import React from "react";
import Navigation from "./Navigation";
import ProfilBox from "./ProfileBox";
import ThemeButton from "./ThemeButton";

import styles from "./LayoutSidebar.module.css";
import cn from "classnames";

function LayoutSidebar({ flat }) {
  return (
    <div className={cn(styles.sidebar)}>
      {/* flat navbardaki textleri silicek */}
      <Navigation flat={flat} />
      <div className={styles.tweet}>
        <ThemeButton xl full={!flat}>
          {flat ? "aa" : "Tweet"}
        </ThemeButton>
      </div>

      <div className={styles.profile}>
        {" "}
        <ProfilBox flat={flat} />
      </div>
    </div>
  );
}

export default LayoutSidebar;
