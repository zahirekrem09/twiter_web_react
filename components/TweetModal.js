import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
import Avatar from "./Avatar";

import IconButton from "./IconButton";
import { Close, Media, Gif, Question, Emoji } from "../components/icons";
import ThemeButton from "./ThemeButton";
import styles from "./TweetModal.module.css";

const TweetModal = ({ onClick = () => {} }) => {
  const [toggleEmoji, setToggleEmoji] = useState(false);
  const [textTweet, setTextTweet] = useState("");
  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setTextTweet(textTweet + emoji);
  };
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
              onChange={(e) => setTextTweet(e.target.value)}
              value={textTweet}
            />
          </div>
          <div className={styles.footer}>
            <div className={styles.iconBar}>
              <IconButton className={styles.media}>
                <Media />
              </IconButton>
              <IconButton className={styles.media}>
                <Gif />
              </IconButton>
              <IconButton className={styles.media}>
                <Question />
              </IconButton>
              <div style={{ position: "relative" }}>
                <IconButton
                  className={styles.media}
                  onClick={() => setToggleEmoji(!toggleEmoji)}
                >
                  <Emoji />
                </IconButton>
                {toggleEmoji && (
                  <Picker
                    theme="auto"
                    onSelect={addEmoji}
                    style={{ position: "absolute", top: "50px", left: "30px" }}
                  />
                )}
              </div>
            </div>
            <div>
              <ThemeButton>Tweet</ThemeButton>
            </div>

            <IconButton className={styles.close} onClick={onClick}>
              <Close />
            </IconButton>
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
