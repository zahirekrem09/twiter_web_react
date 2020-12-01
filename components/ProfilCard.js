import React, { useContext } from "react";
import cn from "classnames";
import Avatar from "./Avatar";
import Button from "./Button";
import ThemeButton from "./ThemeButton";
import styles from "./ProfiCard.module.css";
import Text from "./Text";
import StoreContext from "../store";
import { format, formatDistanceToNowStrict } from "date-fns";

function ProfiCard({
  slug = "ekremsarı",
  name = "Ekrem",
  bio = "Sadece insan!!",
  user,
}) {
  // const { user } = useContext(StoreContext);
  return (
    <div className={cn(styles.profile)}>
      <div className={cn(styles.header)}>
        <Avatar size={47} className={styles.avatar} src={user?.avatar_img} />
        <ThemeButton href="/" className={styles.followingbtn}>
          <span> Following </span>
        </ThemeButton>
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
