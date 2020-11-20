import React from "react";
import styles from "./Avatar.module.css";
import cn from "classnames";

function Avatar({
  src = "https://avatars3.githubusercontent.com/u/63649974?s=460&u=2383105e4cd97181c5bc88eaf82909bbda6929b3&v=4",
  alt = "Ekrem",
  children,
}) {
  return (
    <div className={cn(styles.avatar)}>
      <img src={src} alt={alt} />
    </div>
  );
}

export default Avatar;
