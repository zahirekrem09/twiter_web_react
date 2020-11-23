import React from "react";
import { formatDistanceToNowStrict } from "date-fns";
import Avatar from "./Avatar";
import styles from "./Tweet.module.css";
import cn from "classnames";
import IconButton from "./IconButton";
import * as Icon from "../components/icons";
import { urlObjectKeys } from "next/dist/next-server/lib/utils";

function Tweet({
  tweetInfo,
  avatar,
  photo,
  name,
  slug,
  text,
  children,
  datetime,
}) {
  return (
    <article className={cn(styles.tweet)}>
      <div className={cn(styles.tweetAvatar)}>
        <Avatar src={avatar} />
      </div>
      <div className={cn(styles.tweetBody)}>
        <header className={cn(styles.tweetHeader)}>
          <span className={styles.name}>{name} </span>
          <span className={styles.slug}>@{slug} - </span>
          <span className={styles.date}>
            {formatDistanceToNowStrict(datetime)}
          </span>
        </header>
        <div className={cn(styles.tweetContent)}>{text}</div>
        {photo && (
          <div
          // className={cn(styles.tweetImage)}
          // style={{ backgroundImage: `url(${photo})` }}
          >
            <img
              src={photo}
              alt="tweetimage"
              className={cn(styles.tweetImage)}
            />
          </div>
        )}

        <footer className={cn(styles.tweetFooter)}>
          <div className={cn(styles.tweetFooterIcon)}>
            <IconButton className={styles.icon}>
              <Icon.Reply />
            </IconButton>
            {tweetInfo.reply && <span>{tweetInfo.reply}</span>}
          </div>
          <div className={cn(styles.tweetFooterIcon)}>
            <IconButton className={styles.icon}>
              <Icon.Retweet />
            </IconButton>
            {tweetInfo.retweet && <span>{tweetInfo.retweet}</span>}
          </div>
          <div className={cn(styles.tweetFooterIcon)}>
            <IconButton className={styles.icon}>
              <Icon.Like />
            </IconButton>
            {tweetInfo.like && <span>{tweetInfo.like}</span>}
          </div>
          <div className={cn(styles.tweetFooterIcon)}>
            <IconButton className={styles.icon}>
              <Icon.Share />
            </IconButton>
          </div>
        </footer>
      </div>
      <IconButton className={styles.more}>
        <Icon.More2 />
      </IconButton>
    </article>
  );
}

export default Tweet;
