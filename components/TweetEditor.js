import React, { useState } from "react";
import { db, storage } from "../firebase/firebase";
import firebase from "firebase";
import { v4 as uuid } from "uuid";
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
  const [image, setImage] = useState(null);
  const [showFooter, setShowFooter] = useState(false);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    const id = uuid();

    const storageRef = storage.ref(`images/${id}`);
    // const imageRef = firebase
    //   .database()
    //   .ref("posts")
    //   .child("tweet_img")
    //   .child(id);
    await storageRef.put(image);

    storageRef.getDownloadURL().then((url) => {
      db.collection("posts").add({
        datetime: firebase.firestore.FieldValue.serverTimestamp(),
        avatar_img:
          "https://pbs.twimg.com/profile_images/1180781660247379968/BVoqMOft_400x400.jpg",
        textTweet: textTweet,
        tweet_img: url,
        name: "ekrem",
        slug: "ekrem12",
        tweetInfo: { like: null, reply: null, retweet: null },
      });
    });
    setImage(null);
    setTextTweet("");

    // uploadTask.on(
    //   "state_changed",
    //   (err) => {
    //     console.error(err);
    //     alert(err.message);
    //   },
    //   () => {
    //     storage
    //       .ref("images")
    //       .child(image.name)
    //       .getDownloadURL()
    //       .then((url) => {
    //         db.collection("posts").add({
    //           timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    //           textTweet: textTweet,
    //           tweet_img: url,
    //           name: "ekrem",
    //           slug: "ekrem12",
    //           avatar_img:
    //             "https://pbs.twimg.com/profile_images/1001759983363641344/pJANPf_h_400x400.jpg",
    //         });

    //         setImage(null);
    //         setTextTweet("");
    //       });
    //   }
    // );
  };

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

  // Create a reference to the hidden file input element
  // const hiddenFileInput = React.useRef(null);

  // // Programatically click the hidden file input element
  // // when the Button component is clicked
  // const handleClick = (event) => {
  //   hiddenFileInput.current.click();
  // };
  // // Call a function (passed as a prop from the parent component)
  // // to handle the user-selected file
  // const handleChange = (event) => {
  //   const fileUploaded = event.target.files[0];
  //   props.handleFile(fileUploaded);
  // };
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
              <label htmlFor="file-input" style={{ cursor: "pointer" }}>
                <IconButton
                  className={styles.media}
                  style={{ pointerEvents: "none" }}
                >
                  <Media />
                </IconButton>
              </label>

              <input
                id="file-input"
                accept="image/*"
                type="file"
                // ref={hiddenFileInput}
                onChange={handleChange}
                style={{ display: "none" }}
              />
              <label htmlFor="file-input" style={{ cursor: "pointer" }}>
                <IconButton
                  className={styles.media}
                  style={{ pointerEvents: "none" }}
                >
                  <Gif />
                </IconButton>
              </label>

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
              <ThemeButton className={styles.tweet} onClick={handleUpload}>
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
