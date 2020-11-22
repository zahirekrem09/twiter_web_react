import React from "react";
import cn from "classnames";
import Avatar from "./Avatar";
import Button from "./Button";
import ThemeButton from "./ThemeButton";
import styles from "./Profil.module.css";
import Text from "./Text";

function Profil({
  slug = "ekremsarı",
  name = "Ekrem",
  backdrop = "https://pbs.twimg.com/profile_banners/1180780272561934338/1570355340/600x200",
  bio = "Sadece insan!!",
}) {
  return (
    <div className={cn(styles.profile)}>
      <div className={cn(styles.backdrop)}>
        <img className={cn(styles.backdropimg)} src={backdrop} alt="" />
      </div>
      <Avatar size={134} className={styles.avatar} />
      <div className={cn(styles.body)}>
        <ThemeButton href="/" className={styles.followbtn}>
          <span> Edit profile </span>
        </ThemeButton>
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
    </div>
  );
}

export default Profil;
