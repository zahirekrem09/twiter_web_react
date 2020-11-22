import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

import ThemeButton from "./ThemeButton";
import Title from "./Title";
import styles from "./UnfollowModal.module.css";

const textValue =
  "Their Tweets will no longer show up in your home timeline. You can still view their profileü unless their Tweets are protected";

const UnfollowModal = ({ follow, onModalClose, onFollow }) => {
  const unFollowClick = () => {
    onFollow();
    onModalClose();
  };
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.content}>
          <div>
            <Title className={styles.title}> Unfollow @adanalı</Title>
          </div>
          <div>
            <TextareaAutosize
              minRows={4}
              className={styles.textarea}
              type="text"
              value={textValue}
              readOnly
            />
          </div>

          <div className={styles.footer}>
            <ThemeButton className={styles.followbtn} onClick={onModalClose}>
              Cancel
            </ThemeButton>
            <ThemeButton
              onClick={unFollowClick}
              className={styles.followingbtn}
            >
              Unfollow
            </ThemeButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnfollowModal;
