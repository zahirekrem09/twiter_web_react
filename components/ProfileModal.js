import React from "react";
import cn from "classnames";
import Avatar from "./Avatar";
import Button from "./Button";
import ThemeButton from "./ThemeButton";
import styles from "./ProfilModal.module.css";
import Text from "./Text";
import { Close, HomeFill, Logout } from "./icons";
import IconButton from "./IconButton";

function ProfilModal({ slug, name, logout, avatar }) {
  return (
    <div className={cn(styles.profile)}>
      <div className={cn(styles.header)}>
        <Avatar size={47} className={styles.avatar} src={avatar} />
        <div className={styles.name}>
          <Text bold>{name}</Text>
          <Text className={styles.slug}>@{slug}</Text>
        </div>
      </div>

      <div className={cn(styles.body)} onClick={logout}>
        <IconButton onClick={logout}>
          <Close />
        </IconButton>

        <Text className={styles.slug2}>@{slug}</Text>
      </div>
    </div>
  );
}

export default ProfilModal;
