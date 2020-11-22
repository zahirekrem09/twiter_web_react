import React from "react";
import { useRouter } from "next/router";
import cn from "classnames";

import { MENU } from "../constants/index";
import styles from "./Navigation.module.css";

import MenuButton from "./MenuButton";
import Title from "./Title";

function Navigation({ flat = false }) {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      {MENU.map((menu, i) => {
        const showTitle = !flat && menu.title.length > 0;
        const selected = router.pathname === menu.path;
        return (
          <MenuButton
            key={i}
            notify={menu.notify}
            selected={selected}
            href={menu.path}
            className={styles.MenuButton}
          >
            {selected ? menu.iconSelected : menu.icon}
            {showTitle && <Title>{menu.title}</Title>}
          </MenuButton>
        );
      })}
    </nav>
  );
}

export default Navigation;
