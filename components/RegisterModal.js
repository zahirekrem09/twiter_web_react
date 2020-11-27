import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
import Avatar from "./Avatar";

import TweetEditor from "./TweetEditor";

import IconButton from "./IconButton";
import {
  Close,
  Media,
  Gif,
  Question,
  Emoji,
  SvgChart,
  Twitter,
} from "../components/icons";
import ThemeButton from "./ThemeButton";
import styles from "./RegisterModal.module.css";

const RegisterModal = ({ onModalClose = () => {} }) => {
  const [textTweet, setTextTweet] = useState("");

  const onSubmit = () => {
    alert(textTweet);
    onModalClose();
  };
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <Twitter />
        </div>

        <div className={styles.body}>
          <div className={styles.content}>
            <div className={styles.inputContainer}>
              <span> Full Name</span>
              <input
                type="text"
                onChange={(e) => setTextTweet(e.target.value)}
              />
            </div>
            <div className={styles.inputContainer}>
              <span> Email</span>
              <input
                type="text"
                onChange={(e) => setTextTweet(e.target.value)}
              />
            </div>
            <div className={styles.inputContainer}>
              <span> Password</span>
              <input
                type="text"
                onChange={(e) => setTextTweet(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.btnContainer}>
            <ThemeButton className={styles.btn} onClick={onSubmit}>
              Register
            </ThemeButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
