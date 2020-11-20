import React from "react";
import cn from "classnames";
import Avatar from "./Avatar";
import Button from "./Button";
import { ArrowBottom } from "./icons";
import styles from "./ProfilBox.module.css";
import Text from "./Text";

function ProfilBox({ flat = false, slug = "ekremsarı", name = "Ekrem" }) {
  return (
    <Button className={cn(styles.profilBox)}>
      <Avatar size={39} />
      {!flat && (
        <div className={styles.body}>
          <Text bold>{name}</Text>
          <Text className={styles.slug}>@{slug}</Text>
        </div>
      )}
      {!flat && <ArrowBottom className={styles.arrow} />}
    </Button>
  );
}

export default ProfilBox;
