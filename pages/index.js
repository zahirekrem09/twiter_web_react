import React from "react";

import Layout from "../components/Layout";
import HeaderMain from "../components/HeaderMain";
import Tweet from "../components/Tweet";
import Title from "../components/Title";
import TweetEditor from "../components/TweetEditor";

import { data } from "../data";

import { TimelineProp } from "../components/icons";

function HomePage() {
  return (
    <Layout>
      <HeaderMain border icon={<TimelineProp />}>
        <Title>Home</Title>
      </HeaderMain>
      <TweetEditor />
      {data.map((tweet) => (
        <Tweet
          key={tweet.id}
          name={tweet.name}
          slug={tweet.slug}
          datetime={tweet.datetime}
          text={tweet.text}
          avatar={tweet.avatar_img}
          photo={tweet.tweet_img}
          tweetInfo={tweet.tweetInfo}
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
