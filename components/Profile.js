import React, { useState } from "react";
import cn from "classnames";
import Avatar from "./Avatar";
import Button from "./Button";
import ThemeButton from "./ThemeButton";
import styles from "./Profil.module.css";
import Text from "./Text";
import ProfileEditModal from "./ProfileEditModal";
import { format, formatDistanceToNowStrict } from "date-fns";

function Profil({ user }) {
  const [showEditProfile, setShowEditProfile] = useState(false);

  const onModalClose = () => {
    setShowEditProfile(!showEditProfile);
  };

  // console.log(user);
  // console.log(user?.create_date.toDate().toDateString());
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
        <ThemeButton className={styles.followbtn} onClick={onModalClose}>
          Edit profile
        </ThemeButton>
        <div className={styles.name}>
          <Text bold>{user?.display_name}</Text>
          <Text className={styles.slug}>@{user?.email.slice(0, 5)}</Text>
        </div>

        <Text className={styles.bio}>{user?.bio}</Text>
        <Text className={styles.slug}>
          {/* {user?.create_date.toDate().toDateString()} */}
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
      {showEditProfile && (
        <ProfileEditModal
          avatar={user?.avatar_img}
          backdrop={user?.backdrop_img}
          name={user?.display_name}
          bio={user?.bio}
          id={user?.id}
          onModalClose={onModalClose}
        />
      )}
    </div>
  );
}

export default Profil;
