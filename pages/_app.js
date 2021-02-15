import React, { useEffect, useState } from "react";
import { auth, db, storage } from "../firebase/firebase";

import "../styles/app.css";
import "emoji-mart/css/emoji-mart.css";
import StoreContext from "../store";

export default function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [follow, setFollow] = useState(false);
  const [user, setUser] = useState(auth.currentUser);
  const [users, setUsers] = useState(null);
  const onModalClose = () => {
    setShowModal(false);
  };
  const onModalOpen = () => {
    setShowModal(true);
  };

  const onFollow = () => {
    setFollow(!follow);
  };

  useEffect(() => {
    const theme = localStorage.getItem("THEME") || "dim";
    setTheme(theme);
  }, []);
  const changeTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem("THEME", theme);
  };

  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) => {
      const users = snapshot.docs.map((doc) => doc.data());
      setUsers(users);
      const user = users.filter((us) => us.id == auth?.currentUser?.uid)[0];
      console.log("context user", user);
      setUser(user);
    });
  }, [auth.currentUser]);

  useEffect(() => {
    document.querySelector("html").classList.remove("light");
    document.querySelector("html").classList.remove("dark");
    document.querySelector("html").classList.remove("dim");
    document.querySelector("html").classList.add(theme?.toString());
  }, [theme]);
  return (
    <StoreContext.Provider
      value={{
        theme,
        changeTheme,
        showModal,
        onModalClose,
        onModalOpen,
        follow,
        onFollow,
        user,
        users,
      }}
    >
      <Component {...pageProps} />
    </StoreContext.Provider>
  );
}
