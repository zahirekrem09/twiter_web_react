import React from "react";
import styles from "./Lists.module.css";
import { Link } from "react-router-dom";
import cn from "classnames";
import * as Icon from "../components/icons";
import IconButton from "./IconButton";
import Title from "./Title";
// import Link from "next/link";

function Lists({ title, icon, children, src }) {
  return (
    <div className={cn(styles.lists)}>
      <div className={cn(styles.item, !icon && styles.single)}>
        <Title className={cn(styles.title)}>{title}</Title>
        <IconButton className={cn(styles.icon)}>
          {icon && <Icon.Options />}
        </IconButton>
      </div>

      <div className={cn(styles.body)}>{children}</div>

      <div className={cn(styles.more)}>
        <a to={src}>Show more</a>
      </div>
    </div>
  );
}

export default Lists;
