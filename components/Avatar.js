import React from "react";
import styles from "./Avatar.module.css";
import cn from "classnames";

function Avatar({
  src = "https://pbs.twimg.com/profile_images/1180781660247379968/BVoqMOft_400x400.jpg",
  alt = "avatar",
  size = 47,
  className,
  children,
  ...props
}) {
  return (
    <div
      className={cn(styles.avatar, className)}
      style={{ width: size, height: size }}
      {...props}
    >
      <img src={src} alt={alt} style={{ width: size, height: size }} />
    </div>
  );
}

export default Avatar;
