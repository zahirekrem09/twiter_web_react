import React, { useEffect, useState } from "react";

import "../styles/app.css";
import "emoji-mart/css/emoji-mart.css";
import StoreContext from "../store";

export default function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const onModalClose = () => {
    setShowModal(false);
  };
  const onModalOpen = () => {
    setShowModal(true);
  };

  useEffect(() => {
    const theme = localStorage.getItem("THEME") || "light";
    setTheme(theme);
  }, []);
  const changeTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem("THEME", theme);
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light");
    document.querySelector("html").classList.remove("dark");
    document.querySelector("html").classList.remove("dim");
    document.querySelector("html").classList.add(theme?.toString());
  }, [theme]);
  return (
    <StoreContext.Provider
      value={{ theme, changeTheme, showModal, onModalClose, onModalOpen }}
    >
      <Component {...pageProps} />
    </StoreContext.Provider>
  );
}
