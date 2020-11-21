import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import Avatar from "./Avatar";

import IconButton from "./IconButton";
import { Close } from "../components/icons";
import ThemeButton from "./ThemeButton";
import styles from "./TweetModal.module.css";

const TweetModal = ({ onClick = () => {} }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.avatar}>
          <Avatar />
        </div>
        <div className={styles.body}>
          <div className={styles.content}>
            <TextareaAutosize
              minRows={5}
              className={styles.textarea}
              maxRows={20}
              placeholder="What's happening?"
              type="text"
              // onChange={(e) => setTextTweet(e.target.value)}
              // value={textTweet}
            />
          </div>
          <div className={styles.footer}>
            <IconButton className={styles.close} onClick={onClick}>
              <Close />
            </IconButton>
            <ThemeButton>Tweet</ThemeButton>
          </div>

          {/* <textarea
            className={styles.textarea}
            name=""
            rows="6"
            placeholder="What's happening ?"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default TweetModal;
