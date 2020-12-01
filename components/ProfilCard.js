import React, { useContext } from "react";
import cn from "classnames";
import Avatar from "./Avatar";
import Button from "./Button";
import ThemeButton from "./ThemeButton";
import styles from "./ProfiCard.module.css";
import Text from "./Text";
import StoreContext from "../store";
import { format, formatDistanceToNowStrict } from "date-fns";
import { db } from "../firebase/firebase";

function ProfiCard({
  slug = "ekremsarı",
  name = "Ekrem",
  bio = "Sadece insan!!",
  user,
  onModalClose = () => {},
}) {
  const store = useContext(StoreContext);

  const isFollow = () => {
    if (store.user.following.includes(user.id)) {
      return true;
    } else {
      return false;
    }
  };
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
    <div
      className={cn(styles.profile)}
      onMouseEnter={onModalClose}
      onMouseLeave={onModalClose}
    >
      <div className={cn(styles.header)}>
        <Avatar size={47} className={styles.avatar} src={user?.avatar_img} />
        {isFollow() ? (
          <ThemeButton
            onClick={RemoveFollowing}
            className={styles.followingbtn}
          >
            <span> Following </span>
          </ThemeButton>
        ) : (
          <ThemeButton onClick={addFollowing} className={styles.followbtn}>
            <span> Follow </span>
          </ThemeButton>
        )}
      </div>

      <div className={cn(styles.body)}>
        <div className={styles.name}>
          <Text bold>{user?.display_name}</Text>
          <Text className={styles.slug}>@{user?.slug}</Text>
        </div>

        <Text className={styles.bio}>{user?.bio}</Text>
        <Text className={styles.slug}>
          Joined {user && format(user?.create_date.toDate(), "do  MMMM yyyy")}
        </Text>
        <div className={styles.caption}>
          <span className={styles.follow}>
            <span>
              <Text bold className={styles.count}>
                {user?.following.length}
              </Text>
            </span>

            <Text className={styles.slug}>Following</Text>
          </span>
          <span>
            <span>
              <Text className={styles.count} bold>
                {user?.followers.length}
              </Text>
            </span>
            <Text className={styles.slug}>Followers</Text>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProfiCard;
