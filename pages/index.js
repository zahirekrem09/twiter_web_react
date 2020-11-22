import React, { useState, useContext } from "react";
import StoreContext from "../store";

import Layout from "../components/Layout";
import HeaderMain from "../components/HeaderMain";
import Tweet from "../components/Tweet";
import Title from "../components/Title";
import TweetEditor from "../components/TweetEditor";

import { data } from "../data";
import TweetModal from "../components/TweetModal";
import { TimelineProp } from "../components/icons";

function HomePage() {
  const store = useContext(StoreContext);
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
          photo={tweet.photo}
          tweetInfo={tweet.tweetInfo}
        ></Tweet>
      ))}

      {store.showModal && (
        <TweetModal
          showModal={store.showModal}
          onModalClose={store.onModalClose}
        />
      )}

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
