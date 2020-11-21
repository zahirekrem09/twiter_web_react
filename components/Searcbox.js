import React from "react";

import { Search } from "./icons";
import IconButton from "./IconButton";

import styles from "./SearchBox.module.css";
import cn from "classnames";

function SearchBox({
  icon = true,
  text = "Search Twitter",
  className,
  xl = false,
  ...props
}) {
  return (
    <div className={cn(styles.searchBar, xl && styles.large, className)}>
      {icon && (
        <IconButton className={styles.icon}>
          <Search />
        </IconButton>
      )}
      <input {...props} type="text" placeholder={text} />
    </div>
  );
}

export default SearchBox;
