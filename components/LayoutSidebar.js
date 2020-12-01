import React, { useContext, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import StoreContext from "../store";
import Navigation from "./Navigation";
import ProfilBox from "./ProfileBox";
import ProfileModal from "./ProfileModal";
import ThemeButton from "./ThemeButton";
import { auth, db, storage } from "../firebase/firebase";

import { Tweet } from "./icons";

import styles from "./LayoutSidebar.module.css";
import cn from "classnames";
import { useRouter } from "next/router";

function LayoutSidebar({ flat }) {
  const size = useWindowSize();
  const store = useContext(StoreContext);
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const { user } = useContext(StoreContext);
  const handleLogout = () => {
    auth.signOut();
    router.push("/");
    setShowModal(false);
  };

  return (
    <div className={cn(styles.sidebar)}>
      {/* flat navbardaki textleri silicek */}
      <Navigation flat={flat} />

      {}
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

      <div className={styles.profile} onClick={() => setShowModal(!showModal)}>
        <ProfilBox
          flat={flat}
          name={user?.display_name}
          avatar={user?.avatar_img}
          slug={user?.slug}
        />
      </div>
      {showModal && (
        <ProfileModal
          logout={handleLogout}
          name={user?.display_name}
          slug={user?.slug}
          avatar={user?.avatar_img}
        />
      )}
    </div>
  );
}

export default LayoutSidebar;
