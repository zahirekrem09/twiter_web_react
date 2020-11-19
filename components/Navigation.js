import React from "react";

import MenuButton from "./MenuButton";
import {
  Bookmark,
  Explore,
  Home,
  Lists,
  Messages,
  More,
  Profile,
  Twitter,
  Notification,
} from "./icons";

import Title from "./Title";
import styles from "./Navigation.module.css";

function Navigation({ selectedKey }) {
  return (
    <nav className={styles.nav}>
      <MenuButton>
        <Twitter />
      </MenuButton>
      <MenuButton selected={selectedKey === "Home"}>
        <Home />
        <Title>Home</Title>
      </MenuButton>
      <MenuButton>
        <Explore />
        <Title>Explore</Title>
      </MenuButton>
      <MenuButton notify={44}>
        <Notification />
        <Title>Notification</Title>
      </MenuButton>
      <MenuButton>
        <Messages />
        <Title>Messages</Title>
      </MenuButton>
      <MenuButton>
        <Bookmark />
        <Title>Bookmark</Title>
      </MenuButton>
      <MenuButton>
        <Lists />
        <Title>Lists</Title>
      </MenuButton>
      <MenuButton>
        <Profile />
        <Title>Profile</Title>
      </MenuButton>
      <MenuButton>
        <More />
        <Title>More</Title>
      </MenuButton>
    </nav>
  );
}

export default Navigation;
