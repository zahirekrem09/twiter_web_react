import React from "react";

import Layout from "../components/Layout";
import HeaderMain from "../components/HeaderMain";
import IconButton from "../components/IconButton";
import { TimelineProp } from "../components/icons";

import Tweet from "../components/Tweet";
import Title from "../components/Title";
import TweetEditor from "../components/TweetEditor";

function HomePage() {
  return (
    <Layout>
      <HeaderMain border>
        <Title>Home</Title>
      </HeaderMain>
      <TweetEditor />
      <Tweet
        name="Ekrem Sarı"
        slug="ekrem12"
        datetime={new Date("2020-11-20")}
        text={`Lorem lorem kpkdjap pjdfpefj pajfpE
      
KPEOT`}
      ></Tweet>

      <Tweet
        name="Ekrem Sarı"
        slug="ekrem12"
        datetime={new Date("2020-11-20")}
        text={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum aperiam eos tenetur laborum vero tempora eligendi aspernatur porro natus non recusandae cum, dolorem praesentium officiis quaerat! Tempore dicta officia harum.`}
      ></Tweet>
    </Layout>
  );
}

export default HomePage;
