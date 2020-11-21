import React from "react";

import Layout from "../components/Layout";
import Tweet from "../components/Tweet";

function HomePage() {
  return (
    <Layout>
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
