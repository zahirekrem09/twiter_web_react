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
      <ThemeButton xl full>
        Tweet
      </ThemeButton>
      <ProfilBox />
    </div>
  );
}

export default LayoutSidebar;
