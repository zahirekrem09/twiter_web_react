import React from "react";
import Layout from "../components/Layout";
import HeaderMain from "../components/HeaderMain";
import Lists from "../components/Lists";
import Trends from "../components/Trends";

import SearchBox from "../components/Searcbox";
import { Options } from "../components/icons";
import Happening from "../components/Happening";

function ExplorePage() {
  return (
    <Layout>
      <HeaderMain border icon={<Options />}>
        <SearchBox xl />
      </HeaderMain>

      <Lists title="Trends for you" icon>
        <Trends tag="Τραμπ" />
        <Trends tag="Black Friday" />
        <Trends tag="Κυριακης" />
        <Trends tag="Greek" />
        <Trends tag="Infognomon Politics" />
      </Lists>

      <Lists title="What’s happening">
        <Happening />
        <Happening />
        <Happening />
        <Happening />
        <Happening />
      </Lists>
    </Layout>
  );
}
export default ExplorePage;
