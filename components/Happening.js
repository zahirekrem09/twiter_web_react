import React from "react";
import cn from "classnames";
import Avatar from "./Avatar";
import { formatDistanceToNowStrict } from "date-fns";

import styles from "./Happening.module.css";
import Text from "./Text";

function Happening({
  name = "Toronto Star",
  image = "https://pbs.twimg.com/media/EnXZFeAXMAYtBy-?format=jpg&name=240x240",
  text = "Raptors sign Fred VanVleet to four-year, $85-million deal",
  datetime = new Date(),
}) {
  return (
    <div className={cn(styles.happening)}>
      <div className={cn(styles.profilBox)}>
        <div className={styles.body}>
          <Avatar size={20} />
          <Text className={styles.name}>{name} - </Text>
          <span className={styles.date}>
            {formatDistanceToNowStrict(datetime)}
          </span>
        </div>
        <Text bold>{text}</Text>
      </div>
      <div>
        <img className={styles.img} src={image} alt={text} />
      </div>
    </div>
  );
}

export default Happening;
