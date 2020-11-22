import React, { useContext, useEffect, useState } from "react";
import StoreContext from "../store";
import cn from "classnames";
import Avatar from "./Avatar";
import Button from "./Button";

import styles from "./FollowSuggestion.module.css";
import Text from "./Text";
import ThemeButton from "./ThemeButton";
import UnfollowModal from "./UnfollowModal";

function FollowSuggestion({
  src = "https://pbs.twimg.com/profile_images/1246467440977932292/Wmlicr4o_400x400.jpg",
  slug = "ekremsarı",
  name = "Ekrem",
}) {
  //   const [follow, setFollow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const store = useContext(StoreContext);
  const onModalClose = () => {
    setShowModal(!setShowModal);
  };

  return (
    <div className={cn(styles.content)}>
      <div className={cn(styles.profilBox)}>
        <Button className={cn(styles.avatarbtn)}>
          <Avatar src={src} size={39} className={cn(styles.avatar)} />
        </Button>
        <div className={styles.body}>
          <Text bold>{name}</Text>
          <Text className={styles.slug}>@{slug}</Text>
        </div>
      </div>
      {store.follow ? (
        <ThemeButton
          onClick={() => setShowModal(true)}
          className={styles.followingbtn}
        >
          <span> Following </span>
        </ThemeButton>
      ) : (
        <ThemeButton
          onClick={() => store.onFollow()}
          className={styles.followbtn}
        >
          <span> Follow </span>
        </ThemeButton>
      )}

      {showModal && (
        <UnfollowModal
          showModal={showModal}
          onModalClose={onModalClose}
          follow={store.follow}
          onFollow={store.onFollow}
        />
      )}
    </div>
  );
}

export default FollowSuggestion;
