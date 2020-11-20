import React from "react";
import Avatar from "../components/Avatar";

import * as Icons from "../components/icons";
import ProfilBox from "../components/ProfileBox";

export default {
  title: "Icons",
};

export const Icon = () => (
  <div className="icons">
    <Icons.ArrowBottom />
    <Icons.Bookmark />
    <Icons.BookmarkFill />
    <Icons.Emoji />
    <Icons.Explore />
    <Icons.ExplorerFill />
    <Icons.Gif />
    <Icons.Home />
    <Icons.HomeFill />
    <Icons.Like />
    <Icons.Lists />
    <Icons.ListsFill />
    <Icons.Media />
    <Icons.Messages />
    <Icons.MessagesFill />
    <Icons.More />
    <Icons.Notification />
    <Icons.NotificationFill />
    <Icons.Options />
    <Icons.Profile />
    <Icons.ProfileFill />
    <Icons.Question />
    <Icons.Reply />
    <Icons.Retweet />
    <Icons.Search />
    <Icons.Share />
    <Icons.TimelineProp />
    <Icons.Twitter />
  </div>
);

export const AvatarPhoto = () => (
  <Avatar
    src="https://avatars3.githubusercontent.com/u/63649974?s=460&u=2383105e4cd97181c5bc88eaf82909bbda6929b3&v=4"
    alt="Ekrem"
  />
);

export const ProfileAvatar = () => <ProfilBox />;
