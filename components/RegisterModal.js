import React, { useState } from "react";

import "emoji-mart/css/emoji-mart.css";

import { useFormik } from "formik";
import { auth, db, storage } from "../firebase/firebase";
import firebase from "firebase";

import { Close, Twitter } from "../components/icons";
import ThemeButton from "./ThemeButton";
import styles from "./RegisterModal.module.css";
import IconButton from "./IconButton";

const validate = (values) => {
  const errors = {};
  if (!values.displayName) {
    errors.displayName = "Required";
  } else if (values.displayName.length > 15) {
    errors.displayName = "Must be 15 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const RegisterModal = ({ onModalClose = () => {} }) => {
  const [errMsg, setErrMsg] = useState(null);

  const formik = useFormik({
    initialValues: {
      displayName: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      auth
        .createUserWithEmailAndPassword(
          formik.values.email,
          formik.values.password
        )
        .then((authUser) => {
          // console.log(authUser.user.uid);
          db.collection("users")
            .doc(authUser.user.uid)
            .set({
              avatar_img:
                "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
              display_name: formik.values.displayName,
              email: authUser.user.email,
              slug: authUser.user.email.slice(
                0,
                authUser.user.email.indexOf("@")
              ),
              bio: "",
              backdrop_img: "https://via.placeholder.com/350x150",
              id: authUser.user.uid,
              following: [],
              followers: [],
              create_date: firebase.firestore.FieldValue.serverTimestamp(),
            });
        })
        .catch((err) => setErrMsg(err.message));

      onModalClose();
    },
  });

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <Twitter />
          <IconButton className={styles.close} onClick={onModalClose}>
            <Close />
          </IconButton>
        </div>

        <div className={styles.body}>
          <div className={styles.content}>
            <form onSubmit={formik.handleSubmit}>
              <div className={styles.inputContainer}>
                <span> Full Name</span>
                <input
                  name="displayName"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.displayName}
                />
              </div>
              <div className={styles.inputContainer}>
                <span> Email</span>
                <input
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  name="email"
                />
              </div>
              <div className={styles.inputContainer}>
                <span> Password</span>
                <input
                  type="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  name="password"
                />
              </div>
              <div className={styles.btnContainer}>
                <ThemeButton type="submit" className={styles.btn}>
                  Register
                </ThemeButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
