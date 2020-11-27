import React from "react";
import cn from "classnames";
import Avatar from "./Avatar";
import Button from "./Button";
import ThemeButton from "./ThemeButton";
import styles from "./ProfilModal.module.css";
import Text from "./Text";

function ProfilModal({
  slug = "ekremsarı",
  name = "Ekrem",
  logout,
  avatar = "",
}) {
  console.log(avatar);
  return (
    <div className={cn(styles.profile)}>
      <div className={cn(styles.header)}>
        <Avatar size={47} className={styles.avatar} />
        <div className={styles.name}>
          <Text bold>{name}</Text>
          <Text className={styles.slug}>@{slug}</Text>
        </div>
      </div>

      <div className={cn(styles.body)} onClick={logout}>
        <Text bold>log out</Text> <Text className={styles.slug2}>@{slug}</Text>
      </div>
    </div>
  );
}

export default ProfilModal;
