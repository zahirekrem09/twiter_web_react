import React from "react";
import styles from "./Trends.module.css";
import { Link } from "react-router-dom";
import cn from "classnames";
import * as Icon from "../components/icons";
import IconButton from "./IconButton";
import Title from "./Title";

function Trends({ tag, className }) {
  return (
    <div className={cn(styles.trends, className)}>
      <Title className={cn(styles.tag)}>{tag}</Title>
      <IconButton className={cn(styles.more)}>
        <Icon.More2 />
      </IconButton>
    </div>
  );
}

export default Trends;
