import React from "react";

import { MENU } from "../constants/index";
import styles from "./Navigation.module.css";

import MenuButton from "./MenuButton";
import Title from "./Title";

function Navigation({ flat = false, selectedKey = "home" }) {
  return (
    <nav className={styles.nav}>
      <p>{JSON.stringify(flat)}</p>

      {MENU.map((menu, i) => {
        const showTitle = !flat && menu.title.length > 0;
        const selected = selectedKey === menu.key;
        return (
          <MenuButton key={i} notify={menu.notify} selected={selected}>
            {selected ? menu.iconSelected : menu.icon}
            {showTitle && <Title>{menu.title}</Title>}
          </MenuButton>
        );
      })}
    </nav>
  );
}

export default Navigation;
