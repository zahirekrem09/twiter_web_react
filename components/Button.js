import React from "react";
import Link from "next/link";
import styles from "./Button.module.css";
import cn from "classnames";

function LinkButton({ href, children, selected, ...props }) {
  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  );
}
function BaseButton({ children, ...props }) {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
}

function Button({ full = false, xl = false, children, className, ...props }) {
  const ButtonComp = props.href ? LinkButton : BaseButton;
  return (
    <ButtonComp
      className={cn(
        styles.button,
        full && styles.fullButton,
        xl && styles.xlButton,
        className
      )}
      {...props}
    >
      {children}
    </ButtonComp>
  );
}

export default Button;
