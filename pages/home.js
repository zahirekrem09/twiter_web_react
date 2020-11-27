import React, { useEffect, useState } from "react";
import "emoji-mart/css/emoji-mart.css";

import Layout from "../components/Layout";
import HeaderMain from "../components/HeaderMain";
import Tweet from "../components/Tweet";
import Title from "../components/Title";
import TweetEditor from "../components/TweetEditor";

import { db } from "../firebase/firebase";

import { TimelineProp } from "../components/icons";

function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // firebase db  connect
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
          name={post.name}
          slug={post.slug}
          datetime={post.datetime?.toDate()}
          text={post.textTweet}
          avatar={post.avatar_img}
          photo={post.tweet_img}
          tweetInfo={post.tweetInfo}
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
