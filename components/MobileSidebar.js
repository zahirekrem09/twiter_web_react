import React, { useContext } from "react";
import { useRouter } from "next/router";

import {
  Home,
  Search,
  HomeFill,
  ProfileFill,
  Profile,
  ListsFill,
  Lists,
  Notification,
  NotificationFill,
} from "./icons";
import MenuButton from "./MenuButton";

import styles from "./MobileSidebar.module.css";

function MobileSidebar() {
  const router = useRouter();

  return (
    <div className={styles.mobilesidebar}>
      <MenuButton gray icon href="/">
        {router.pathname == "/" ? (
          <HomeFill className={styles.selected} />
        ) : (
          <Home />
        )}
      </MenuButton>
      <MenuButton gray icon href="/explore">
        {router.pathname == "/explore" ? (
          <Search className={styles.selected} />
        ) : (
          <Search />
        )}
      </MenuButton>
      <MenuButton gray icon href="/notifications">
        {router.pathname == "/notifications" ? (
          <NotificationFill className={styles.selected} />
        ) : (
          <Notification />
        )}
      </MenuButton>
      <MenuButton gray icon href={`/profile`}>
        {router.pathname == `/profile` ? (
          <ProfileFill className={styles.selected} />
        ) : (
          <Profile />
        )}
      </MenuButton>
    </div>
  );
}

export default MobileSidebar;
