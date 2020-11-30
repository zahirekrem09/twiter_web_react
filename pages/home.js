import React, { useContext, useEffect, useState } from "react";
import "emoji-mart/css/emoji-mart.css";

import Layout from "../components/Layout";
import HeaderMain from "../components/HeaderMain";
import Tweet from "../components/Tweet";
import Title from "../components/Title";
import TweetEditor from "../components/TweetEditor";

import { db } from "../firebase/firebase";

import { TimelineProp } from "../components/icons";

import StoreContext from "../store";

function HomePage() {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(StoreContext);

  useEffect(() => {
    // firebase db  connect

    //TODO✅  add user and post collection
    db.collection("posts")
      .orderBy("datetime", "desc")
      .onSnapshot((snapshot) => {
        const postsData = snapshot.docs.map((doc) => doc.data());
        console.log(postsData);
        setPosts(postsData);
      });
  }, []);
  return (
    <Layout>
      <HeaderMain border icon={<TimelineProp />}>
        <Title>Home</Title>
      </HeaderMain>
      <TweetEditor />
      {posts?.map((post, i) => (
        <Tweet
          key={i}
          // name={user?.display_name}
          // slug={user?.display_name}
          datetime={post.datetime?.toDate()}
          text={post.textTweet}
          // avatar={user?.avatar_img}
          user={post.user}
          photo={post.tweet_img}
          tweetInfo={post.tweetInfo}
          userId={post.userId}
        ></Tweet>
      ))}

      {/* <Tweet
        name="Ekrem Sarı"
        slug="ekrem12"
        datetime={new Date("2020-11-20")}
        text={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum aperiam eos tenetur laborum vero tempora eligendi aspernatur porro natus non recusandae cum, dolorem praesentium officiis quaerat! Tempore dicta officia harum.`}
      ></Tweet> */}
    </Layout>
  );
}

export default HomePage;
