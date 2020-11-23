import React from "react";
import cn from "classnames";
import Avatar from "./Avatar";
import Button from "./Button";
import ThemeButton from "./ThemeButton";
import styles from "./ProfiCard.module.css";
import Text from "./Text";

function ProfiCard({
  slug = "ekremsarı",
  name = "Ekrem",
  bio = "Sadece insan!!",
}) {
  return (
    <div className={cn(styles.profile)}>
      <div className={cn(styles.header)}>
        <Avatar size={47} className={styles.avatar} />
        <ThemeButton href="/" className={styles.followingbtn}>
          <span> Following </span>
        </ThemeButton>
      </div>

      <div className={cn(styles.body)}>
        <div className={styles.name}>
          <Text bold>{name}</Text>
          <Text className={styles.slug}>@{slug}</Text>
        </div>

        <Text className={styles.bio}>{bio}</Text>
        <Text className={styles.slug}> Joined October 2019</Text>
        <div className={styles.caption}>
          <span className={styles.follow}>
            <span>
              <Text bold className={styles.count}>
                521
              </Text>
            </span>

            <Text className={styles.slug}>Following</Text>
          </span>
          <span>
            <span>
              <Text className={styles.count} bold>
                192
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
