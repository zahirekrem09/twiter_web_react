import React, { useContext, useEffect, useState } from "react";
import StoreContext from "../store";
import cn from "classnames";
import Avatar from "./Avatar";
import Button from "./Button";

import styles from "./FollowSuggestion.module.css";
import Text from "./Text";
import ThemeButton from "./ThemeButton";
import UnfollowModal from "./UnfollowModal";
import { db } from "../firebase/firebase";

function FollowSuggestion({ user }) {
  const [showModal, setShowModal] = useState(false);
  const store = useContext(StoreContext);
  const onModalClose = () => {
    setShowModal(!setShowModal);
  };

  const isFollow = () => {
    // const list = store.user.followers.filter((fol) => fol == user.id);
    if (store.user.following.includes(user.id)) {
      return true;
    } else {
      return false;
    }
  };

  // const addFollowers = () => {
  //   db.collection("users")
  //     .doc(store.user.id)
  //     .update({
  //       followers: [...store.user.followers, user.id],
  //     });
  //   const list = store.user.followers.filter((fol) => fol == user.id);
  //   console.log(list);
  //   console.log(isFollow());
  // };

  const addFollowing = async () => {
    await db
      .collection("users")
      .doc(store.user.id)
      .update({
        following: [...store.user.following, user.id],
      });
    await db
      .collection("users")
      .doc(user.id)
      .update({
        followers: [...store.user.followers, user.id],
      });
  };

  const RemoveFollowing = async () => {
    await db
      .collection("users")
      .doc(store.user.id)
      .update({
        following: store.user.following.filter((fol) => fol !== user.id),
      });
    await db
      .collection("users")
      .doc(user.id)
      .update({
        followers: user.followers.filter((fol) => fol !== store.user.id),
      });
  };

  return (
    <div className={cn(styles.content)}>
      <div className={cn(styles.profilBox)}>
        <Button
          href="/users/[id]"
          as={`/users/${user.id}`}
          className={cn(styles.avatarbtn)}
        >
          <Avatar
            src={user?.avatar_img}
            size={39}
            className={cn(styles.avatar)}
          />
        </Button>
        <div className={styles.body}>
          <Text bold>{user?.display_name}</Text>
          <Text className={styles.slug}>@{user?.slug}</Text>
        </div>
      </div>
      {isFollow() ? (
        <ThemeButton
          onClick={() => setShowModal(true)}
          className={styles.followingbtn}
        >
          <span> Following </span>
        </ThemeButton>
      ) : (
        <ThemeButton onClick={addFollowing} className={styles.followbtn}>
          <span> Follow </span>
        </ThemeButton>
      )}

      {showModal && (
        <UnfollowModal
          showModal={showModal}
          onModalClose={onModalClose}
          follow={store.follow}
          onFollow={store.onFollow}
          RemoveFollowing={RemoveFollowing}
        />
      )}
    </div>
  );
}

export default FollowSuggestion;
