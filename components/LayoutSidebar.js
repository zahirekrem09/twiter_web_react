import React, { useState } from "react";
import Navigation from "./Navigation";
import ProfilBox from "./ProfileBox";
import ThemeButton from "./ThemeButton";

import { Tweet } from "./icons";

import styles from "./LayoutSidebar.module.css";
import cn from "classnames";
import TweetModal from "./TweetModal";

function LayoutSidebar({ flat }) {
  const [showModal, setShowModal] = useState(false);
  const onModalClose = () => {
    setShowModal(false);
  };
  return (
    <div className={cn(styles.sidebar)}>
      {/* flat navbardaki textleri silicek */}
      <Navigation flat={flat} />
      <div className={styles.tweet}>
        <ThemeButton xl full={!flat} onClick={() => setShowModal(true)}>
          {flat ? <Tweet /> : "Tweet"}
        </ThemeButton>
      </div>
      {/* tweetpop up */}
      {showModal && <TweetModal onModalClose={onModalClose} />}

      <div className={styles.profile}>
        <ProfilBox flat={flat} />
      </div>
    </div>
  );
}

export default LayoutSidebar;
