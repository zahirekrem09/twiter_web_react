import React, { useContext, useState } from "react";
import { auth, db, storage } from "../firebase/firebase";
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
import StoreContext from "../store";

const TweetEditor = ({}) => {
  const [toggleEmoji, setToggleEmoji] = useState(false);
  const [textTweet, setTextTweet] = useState("");
  const [imgTweet, setImgTweet] = useState("");
  const [image, setImage] = useState(null);
  const [showFooter, setShowFooter] = useState(false);
  const [progress, setProgress] = useState("");

  const { user } = useContext(StoreContext);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  // const handleUpload = async () => {
  //   if (image) {
  //     const id = uuid();
  //     const storageRef = storage.ref(`images/${id}`);
  //     await storageRef.put(image);
  //     storageRef.getDownloadURL().then((url) => {
  //       console.log(url);
  //       setImgTweet(url);
  //     });
  //   }

  //   db.collection("posts").add({
  //     datetime: firebase.firestore.FieldValue.serverTimestamp(),
  //     textTweet: textTweet,
  //     tweet_img: imgTweet,
  //     tweetInfo: { like: null, reply: null, retweet: null },
  //     userId: user?.id,
  //   });

  //   setImage(null);
  //   setTextTweet("");
  // };

  const handleUpload = () => {
    const id = uuid();
    if (image) {
      const uploadTask = storage.ref(`images/${id}`).put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (err) => {
          console.error(err);
          alert(err.message);
        },
        () => {
          storage
            .ref("images")
            .child(id)
            .getDownloadURL()
            .then((url) => {
              db.collection("posts").add({
                datetime: firebase.firestore.FieldValue.serverTimestamp(),
                textTweet: textTweet,
                tweet_img: url,
                tweetInfo: { like: null, reply: null, retweet: null },
                user: user,
              });
              setProgress(0);
              setImage(null);
              setTextTweet("");
            });
        }
      );
    } else {
      db.collection("posts").add({
        datetime: firebase.firestore.FieldValue.serverTimestamp(),
        textTweet: textTweet,
        tweet_img: null,
        tweetInfo: { like: null, reply: null, retweet: null },
        user: user,
      });
      setTextTweet("");
    }
  };

  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setTextTweet(textTweet + emoji);
  };

  return (
    <div className={styles.body}>
      <div className={styles.avatar}>
        <Avatar src={user?.avatar_img} />
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
                      zIndex: 999,
                    }}
                  />
                )}
              </div>
              <IconButton className={styles.media}>
                <SvgChart />
              </IconButton>
            </div>

            <div>
              <ThemeButton
                className={styles.tweet}
                onClick={(e) => handleUpload(e)}
              >
                Tweet
              </ThemeButton>
            </div>
          </div>
        )}
        <div>
          {image?.name}
          <img src={image} alt="" />
        </div>

        {progress > 0 && (
          <div className={styles.progress}>
            <label htmlFor="file">Upload:</label>
            <progress id="file" value={progress} max="100"></progress>
          </div>
        )}
      </div>
    </div>
  );
};

export default TweetEditor;
