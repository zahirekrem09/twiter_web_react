import React, { useContext, useState } from "react";
import cn from "classnames";
import Avatar from "./Avatar";
import Button from "./Button";
import ThemeButton from "./ThemeButton";
import styles from "./Profil.module.css";
import Text from "./Text";
import ProfileEditModal from "./ProfileEditModal";
import { format } from "date-fns";
import Tweet from "./Tweet";
import StoreContext from "../store";
import UnfollowModal from "./UnfollowModal";
import { db } from "../firebase/firebase";

function Profil({ user, posts }) {
  const store = useContext(StoreContext);
  const [showEditProfile, setShowEditProfile] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const onModalClose = () => {
    setShowEditProfile(!showEditProfile);
  };

  const onModalCloseUn = () => {
    setShowModal(!setShowModal);
  };

  const isFollow = () => {
    // const list = store.user.followers.filter((fol) => fol == user.id);
    if (store.user?.following?.includes(user.id)) {
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
        following: [...store.user?.following, user.id],
      });
    await db
      .collection("users")
      .doc(user.id)
      .update({
        followers: [...store.user?.followers, user.id],
      });
  };

  const RemoveFollowing = async () => {
    await db
      .collection("users")
      .doc(store.user.id)
      .update({
        following: store.user?.following?.filter((fol) => fol !== user.id),
      });
    await db
      .collection("users")
      .doc(user.id)
      .update({
        followers: user?.followers?.filter((fol) => fol !== store.user.id),
      });
  };

  return (
    <div className={cn(styles.profile)}>
      <div className={cn(styles.backdrop)}>
        <img
          className={cn(styles.backdropimg)}
          src={user?.backdrop_img}
          alt="backdrop"
        />
      </div>
      <Avatar size={134} className={styles.avatar} src={user?.avatar_img} />
      <div className={cn(styles.body)}>
        {
          store.user?.id == user?.id ? (
            <ThemeButton className={styles.followbtn} onClick={onModalClose}>
              Edit profile
            </ThemeButton>
          ) : isFollow() ? (
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
          )

          // (
          //   <ThemeButton
          //     className={styles.followbtn}
          //     onClick={() => alert("foloow")}
          //   >
          //     Follow
          //   </ThemeButton>
          // )
        }

        <div className={styles.name}>
          <Text bold>{user?.display_name}</Text>
          <Text className={styles.slug}>@{user?.slug}</Text>
        </div>

        <Text className={styles.bio}>{user?.bio}</Text>
        <Text className={styles.slug}>
          {/* {user?.create_date.toDate().toDateString()} */}
          Joined {user && format(user?.create_date?.toDate(), "do  MMMM yyyy")}
        </Text>
        <div className={styles.caption}>
          <span className={styles.follow}>
            <span>
              <Text bold className={styles.count}>
                {/* {Array.from(new Set(user?.followers)).length} */}
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
      <div className={styles.footer}>
        <Button href={"/profile"} className={cn(styles.themeButton)}>
          <Text bold className={styles.count}>
            Tweets
          </Text>
        </Button>
        <Button href={"/profile"} className={cn(styles.themeButton)}>
          <Text bold className={styles.count}>
            Tweets & replies
          </Text>
        </Button>
        <Button href={"/profile"} className={cn(styles.themeButton)}>
          <Text bold className={styles.count}>
            Media
          </Text>
        </Button>
        <Button href={"/profile"} className={cn(styles.themeButton)}>
          <Text bold className={styles.count}>
            Likes
          </Text>
        </Button>
      </div>
      {posts?.map((post, i) => (
        <Tweet
          key={i}
          datetime={post.datetime?.toDate()}
          text={post.textTweet}
          postUser={user}
          user={post.user}
          photo={post.tweet_img}
          tweetInfo={post.tweetInfo}
          userId={post.userId}
        ></Tweet>
      ))}
      {showEditProfile && (
        <ProfileEditModal
          avatar={user?.avatar_img}
          backdrop={user?.backdrop_img}
          name={user?.display_name}
          bio={user?.bio}
          id={user?.id}
          slug={user?.slug}
          onModalClose={onModalClose}
        />
      )}

      {showModal && (
        <UnfollowModal
          showModal={showModal}
          onModalClose={onModalCloseUn}
          follow={store.follow}
          onFollow={store.onFollow}
          RemoveFollowing={RemoveFollowing}
        />
      )}
    </div>
  );
}

export default Profil;
