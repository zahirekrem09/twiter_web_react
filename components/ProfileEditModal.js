import React, { useState } from "react";
import cn from "classnames";

import { auth, db, storage } from "../firebase/firebase";

import { Close, Twitter, Media } from "../components/icons";
import ThemeButton from "./ThemeButton";
import styles from "./ProfileEditModal.module.css";
import IconButton from "./IconButton";
import Avatar from "./Avatar";

const ProfileEditModal = ({
  onModalClose = () => {},
  avatar,
  name,
  backdrop,
  bio,
  id,
}) => {
  const [errMsg, setErrMsg] = useState(null);
  const [imgAvatar, setImgAvatar] = useState(null); //url
  const [imgBackdrop, setImgBackdrop] = useState(null);
  const [newName, setName] = useState(name);
  const [newBio, setBio] = useState(bio);
  const [avatar_url, setAvatar] = useState(null);
  const [backdrop_url, setBackdrop] = useState(null);
  const [progress, setProgress] = useState(0);
  // const id = auth.currentUser.uid;

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateBio = (e) => {
    setBio(e.target.value);
  };

  const handleBackdropChange = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0].name);
      setImgBackdrop(e.target.files[0]);
    }
  };

  const handleAvatarChange = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0].name);
      setImgAvatar(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (imgBackdrop) {
      const storageBackdropRef = storage
        .ref(`backdrops/${id}`)
        .put(imgBackdrop);
      storageBackdropRef.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("backdrops")
            .child(id)
            .getDownloadURL()
            .then((url) => {
              console.log("backdrop_url", url);
              setBackdrop(url);
            });
        }
      );
      // storageBackdropRef
      //   .getDownloadURL()
      //   .then((url) => {
      //     console.log(url);
      //     setBackdrop(url);
      //   })
      //   .catch((err) => setErrMsg(err));
    }

    if (imgAvatar) {
      const storageAvatarRef = storage.ref(`avatars/${id}`);
      await storageAvatarRef.put(imgAvatar);

      storageAvatarRef
        .getDownloadURL()
        .then((url) => {
          console.log("avatar_url", url);
          setAvatar(url);
        })
        .catch((err) => setErrMsg(err));
    }

    //TODO✅: add avatar and backdrop

    // await handleAvatarUpload();
    // await handleBackdropUpload();
    // db.collection(`users/${id}`).add({
    //   avatar_img: avatar_url ? avatar_url : avatar,
    //   DisplayName: Dname,
    //   bio: Dbio,
    //   backdrop_img: backdrop_url ? backdrop_url : backdrop,
    //   id: id,
    // });
  };

  const add = async () => {
    await handleUpload().then(() =>
      db
        .collection(`users`)
        .doc(`${id}`)
        .update({
          avatar_img: avatar_url ? avatar_url : avatar,
          display_name: newName,
          bio: newBio,
          backdrop_img: backdrop_url ? backdrop_url : backdrop,
        })
    );
  };

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
          <div className={cn(styles.backdrop)}>
            <img className={cn(styles.backdropimg)} src={backdrop} alt="" />
            <label
              htmlFor="fbackdrop"
              className={styles.backdropMedia}
              style={{ cursor: "pointer" }}
            >
              <IconButton style={{ pointerEvents: "none" }}>
                <Media />
              </IconButton>
              <input
                id="fbackdrop"
                accept="image/*"
                type="file"
                // ref={hiddenFileInput}
                onChange={handleBackdropChange}
                style={{ display: "none" }}
              />
            </label>
          </div>
          <div className={styles.avatarContainer}>
            <Avatar size={134} src={avatar} className={styles.avatar} />
            <label
              htmlFor="avatar"
              className={styles.avatarMedia}
              style={{ cursor: "pointer" }}
            >
              <IconButton
                style={{ pointerEvents: "none" }}
                onClick={() => alert("MEDİA ADD")}
              >
                <Media />
              </IconButton>
              <input
                id="avatar"
                accept="image/*"
                type="file"
                // ref={hiddenFileInput}
                onChange={handleAvatarChange}
                style={{ display: "none" }}
              />
            </label>
          </div>

          <div className={styles.content}>
            <div className={styles.inputContainer}>
              <span> Full Name</span>
              <input
                name="displayName"
                type="text"
                onChange={updateName}
                // value={name}
              />
            </div>
            <div className={styles.inputContainer}>
              <span> Bio</span>
              <input
                type="text"
                onChange={updateBio}
                // value={bio}
                name="bio"
                maxLength={150}
              />
            </div>
            {/* <div className={styles.inputContainer}>
                <span> Location</span>
                <input
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  name="location"
                />
              </div> */}
            <div className={styles.btnContainer}>
              <ThemeButton className={styles.btn} onClick={add}>
                Save
              </ThemeButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditModal;
