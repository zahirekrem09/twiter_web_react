import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import StoreContext from "../store";
import cn from "classnames";
import useWindowSize from "../hooks/useWindowSize";
import styles from "./HomeLayout.module.css";
import { auth, db, storage } from "../firebase/firebase";

import { Search, Reply, Profile, Twitter } from "./icons";
import ThemeButton from "./ThemeButton";
import RegisterModal from "./RegisterModal";
import { useFormik } from "formik";

function HomeLayout({ children }) {
  const router = useRouter();
  const size = useWindowSize();
  const store = useContext(StoreContext);
  const [showRegister, setShowRegister] = useState(false);
  const [user, setUser] = useState(null);
  const [errMsg, setErrMsg] = useState(null);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      auth
        .signInWithEmailAndPassword(formik.values.email, formik.values.password)
        .catch((err) => setErrMsg(err.message));
    },
  });
  const onModalClose = () => {
    setShowRegister(!showRegister);
  };

  useEffect(() => {
    // auth connect
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [user]);

  useEffect(() => {
    console.log(user);
    user ? router.push("/home") : null;
  }, [user]);

  return (
    <div className={cn(styles.contanier)}>
      <div className={cn(styles.layout)}>
        <div className={cn(styles.left)}>
          <div>
            <div className={cn(styles.icon)}>
              <Search /> <span>Follow your interests.</span>
            </div>
            <div className={cn(styles.icon)}>
              <Profile /> <span>Listen to what people are talking about..</span>
            </div>
            <div className={cn(styles.icon)}>
              <Reply /> <span>Join the conversation.</span>
            </div>
          </div>
        </div>

        <div className={cn(styles.right)}>
          <div className={cn(styles.header)}>
            <div className={cn(styles.headerSub)}>
              <form
                action=""
                className={cn(styles.headerSub)}
                onSubmit={formik.handleSubmit}
              >
                <div className={cn(styles.inputContainer)}>
                  <span> e posta</span>
                  <input
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    name="email"
                  />
                </div>
                <div className={cn(styles.inputContainer)}>
                  <span> password</span>
                  <input
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    name="password"
                  />
                </div>
                <ThemeButton type="submit" className={styles.btn}>
                  Login
                </ThemeButton>
              </form>
            </div>
          </div>

          <div className={cn(styles.content)}>
            <Twitter />
            <div className={cn(styles.text)}>
              <span>See what's happening in the world right now</span>
            </div>
            <div className={cn(styles.subtext)}>
              <span>Join Twitter today.</span>
            </div>

            <div className={styles.btnContainer}>
              <ThemeButton
                full
                className={styles.btnfull}
                onClick={onModalClose}
              >
                Register
              </ThemeButton>
              <ThemeButton full className={styles.btnfull}>
                Login
              </ThemeButton>
            </div>
          </div>
        </div>
      </div>
      <nav className={cn(styles.nav)}>
        <a href="#"> About </a>
        <a href="#"> Help Center </a>
        <a href="#"> Terms of Service </a>
        <a href="#"> Privacy Policy</a>
        <a href="#"> Cookie Policy </a>
        <a href="#"> Advertising </a>
        <a href="#"> information </a>
        <a href="#"> Blog </a>
        <a href="#"> Career </a>
        <a href="#"> Brand Resources </a>
        <a href="#"> Advertisement </a>
        <a href="#"> Marketing </a>
        <a href="#"> Twitter for Business </a>
        <a href="#"> Developers </a>
        <a href="#"> Index </a>
        <a href="#"> Settings </a>
        <div className={styles.cpy}>
          <p>© 2020 Twitter, Inc.</p>
        </div>
      </nav>
      {showRegister && <RegisterModal onModalClose={onModalClose} />}
    </div>
  );
}

export default HomeLayout;
