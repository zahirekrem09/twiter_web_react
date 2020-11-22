import React, { useState } from "react";
import cn from "classnames";
import Avatar from "./Avatar";
import Button from "./Button";

import styles from "./FollowSuggestion.module.css";
import Text from "./Text";
import ThemeButton from "./ThemeButton";

function FollowSuggestion({
  src = "https://pbs.twimg.com/profile_images/1246467440977932292/Wmlicr4o_400x400.jpg",
  slug = "ekremsarı",
  name = "Ekrem",
}) {
  const [follow, setFollow] = useState(false);
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

      <ThemeButton
        onClick={() => setFollow(!follow)}
        className={follow ? styles.followingbtn : styles.followbtn}
      >
        <span> {follow ? "Following" : "Follow"} </span>
      </ThemeButton>
    </div>
  );
}

export default FollowSuggestion;
