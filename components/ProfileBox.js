import React from "react";
import cn from "classnames";
import Avatar from "./Avatar";
import Button from "./Button";
import { ArrowBottom } from "./icons";
import styles from "./ProfilBox.module.css";
import Text from "./Text";

function ProfilBox({ slug = "ekremsarı", name = "Ekrem SARI" }) {
  return (
    <Button className={cn(styles.profilBox)}>
      <Avatar />
      <div className={styles.body}>
        <Text bold>{name}</Text>
        <Text className={styles.slug}>@{slug}</Text>
      </div>
      <ArrowBottom className={styles.arrow} />
    </Button>
  );
}

export default ProfilBox;
