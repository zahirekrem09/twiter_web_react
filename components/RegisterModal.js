import React, { useState } from "react";

import "emoji-mart/css/emoji-mart.css";

import { useFormik } from "formik";
import { auth, db, storage } from "../firebase/firebase";
import firebase from "firebase";
import * as Yup from "yup";
import { Close, Twitter } from "../components/icons";
import ThemeButton from "./ThemeButton";
import styles from "./RegisterModal.module.css";
import IconButton from "./IconButton";

const validationSchema = Yup.object({
  displayName: Yup.string()
    .required("Display Name is required")
    .min(3, "Name must be at least 3 characters"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .required("Please enter your password")
    .matches(
      /^.*(?=.{6,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 6 characters, one uppercase, one number and one special case character"
    ),
});

const RegisterModal = ({ onModalClose = () => {} }) => {
  const [errMsg, setErrMsg] = useState(null);

  const formik = useFormik({
    initialValues: {
      displayName: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
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

      // onModalClose();
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
                  {...formik.getFieldProps("displayName")}
                />
              </div>
              {formik.touched.displayName && formik.errors.displayName ? (
                <span className={styles.error}>
                  {formik.errors.displayName}
                </span>
              ) : null}
              <div className={styles.inputContainer}>
                <span> Email</span>
                <input
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  name="email"
                  {...formik.getFieldProps("email")}
                />
              </div>
              {formik.touched.email && formik.errors.email ? (
                <span className={styles.error}>{formik.errors.email}</span>
              ) : null}
              <div className={styles.inputContainer}>
                <span> Password</span>
                <input
                  type="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  name="password"
                  {...formik.getFieldProps("password")}
                />
              </div>
              {formik.touched.password && formik.errors.password ? (
                <span className={styles.error}>{formik.errors.password}</span>
              ) : null}
              <div className={styles.btnContainer}>
                <ThemeButton
                  type="submit"
                  disabled={!(formik.isValid && formik.dirty)}
                  className={styles.btn}
                >
                  Register
                </ThemeButton>
              </div>
            </form>
            <span className={styles.error}> {errMsg}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
