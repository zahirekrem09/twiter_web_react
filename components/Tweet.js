import React, { useEffect, useState } from "react";
import Link from "next/link";
import { formatDistanceToNowStrict } from "date-fns";
import Avatar from "./Avatar";
import styles from "./Tweet.module.css";
import cn from "classnames";
import IconButton from "./IconButton";
import * as Icon from "../components/icons";
import ProfiCard from "./ProfilCard";
import { db } from "../firebase/firebase";

function Tweet({
  tweetInfo,
  photo,
  datetime,
  postUser,
  text,
  userId,
  postId,
  children,
}) {
  const [showModal, setShowModal] = useState(false);
  const onModalClose = () => {
    setTimeout(() => {
      setShowModal(true);
    }, 1000);
  };

  // TODO Delete tweet

  // const delTweet = async () => {
  //   if (userId === user.id) {
  //     // await db.collection("posts").doc(`${postId}`).delete();
  //     // res?.forEach((element) => {
  //     //   element.ref.delete();
  //     //   console.log(`deleted: ${element.id}`);
  //     // });

  //     db.collection("posts")
  //       .doc(postId)
  //       .delete()
  //       .then(function () {
  //         console.log("Document successfully deleted!");
  //       })
  //       .catch(function (error) {
  //         console.error("Error removing document: ", error);
  //       });
  //   }
  // };

  const deleteFromFireStore = async () => {
    //TODO: Modal eklenerek delete yapılacak
    if (userId == postUser.id) {
      await db.collection("posts").doc(postId).delete();
    } else {
      alert("Do not permision");
    }
  };

  const addLikes = () => {
    db.collection("posts")
      .doc(postId)
      .update({
        "tweetInfo.like": tweetInfo.like?.push(userId),
      });
  };
  const addRetweets = () => {
    db.collection("posts")
      .doc(postId)
      .update({
        "tweetInfo.retweet": tweetInfo.retweet?.push(userId),
      });
  };
  return (
    <article className={cn(styles.tweet)}>
      <div className={cn(styles.tweetAvatar)}>
        <Link href="/users/[id]" as={`/users/${postUser?.id}`}>
          <span
            onMouseEnter={() => onModalClose()}
            // onMouseLeave={() => setShowModal(false)}
          >
            <a className={styles.link}>
              <Avatar
                size={50}
                src={postUser?.avatar_img}
                className={cn(styles.avatar)}
              />
            </a>
          </span>
        </Link>
      </div>
      <div
        className={cn(styles.tweetBody)}
        onMouseEnter={() => setShowModal(false)}
      >
        <header className={cn(styles.tweetHeader)}>
          <span className={styles.name}>{postUser?.display_name} </span>
          <span className={styles.slug}>@{postUser?.slug} - </span>
          <span className={styles.date}>
            {datetime && formatDistanceToNowStrict(datetime)}
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
            <IconButton className={styles.icon} onClick={addRetweets}>
              <Icon.Retweet />
            </IconButton>
            {tweetInfo.retweet && <span>{tweetInfo.retweet}</span>}
          </div>
          <div className={cn(styles.tweetFooterIcon)}>
            <IconButton className={styles.icon} onClick={addLikes}>
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
      <IconButton className={styles.more} onClick={deleteFromFireStore}>
        <Icon.More2 />
      </IconButton>
      {showModal && (
        <ProfiCard
          user={postUser}
          // // onMouseEnter={() => onModalClose()}
          // // onMouseLeave={() => setShowModal(false)}
          // onModalClose={onModalClose}
        />
      )}
    </article>
  );
}

export default Tweet;
