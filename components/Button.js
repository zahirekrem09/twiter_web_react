import React from "react";
import styles from "./Button.module.css";
import cn from "classnames";

function Button({ full = false, xl = false, children, className, ...props }) {
  return (
    <button
      type="button"
      className={cn(
        styles.button,
        full && styles.fullButton,
        xl && styles.xlButton,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
