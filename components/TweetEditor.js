import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
import Avatar from "./Avatar";

import IconButton from "./IconButton";
import {
  Close,
  Media,
  Gif,
  Question,
  Emoji,
  SvgChart,
} from "../components/icons";
import ThemeButton from "./ThemeButton";
import styles from "./TweetEditor.module.css";

const TweetEditor = ({}) => {
  const [toggleEmoji, setToggleEmoji] = useState(false);
  const [textTweet, setTextTweet] = useState("");
  const [showFooter, setShowFooter] = useState(false);

  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setTextTweet(textTweet + emoji);
  };
  const onSubmit = () => {
    alert(textTweet);
  };
  return (
    <div className={styles.body}>
      <div className={styles.avatar}>
        <Avatar />
      </div>
      <div className={styles.content}>
        <TextareaAutosize
          minRows={3}
          className={styles.textarea}
          maxRows={20}
          placeholder="What's happening?"
          type="text"
          onChange={(e) => setTextTweet(e.target.value)}
          onFocus={() => setShowFooter(true)}
          // onBlur={() => setShowFooter(false)}
          value={textTweet}
        />

        {showFooter && (
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
                    style={{
                      position: "absolute",
                      top: "50px",
                      left: "30px",
                    }}
                  />
                )}
              </div>
              <IconButton className={styles.media}>
                <SvgChart />
              </IconButton>
            </div>

            <div>
              <ThemeButton className={styles.tweet} onClick={onSubmit}>
                Tweet
              </ThemeButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TweetEditor;
