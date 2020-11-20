import React from "react";
import Layout from "../components/Layout";
import LayoutSidebar from "../components/LayoutSidebar";
import LayoutMain from "../components/LayoutMain";
import LayoutExtra from "../components/LayoutExtra";
import useWindowSize from "../hooks/useWindowSize";
import CONST from "../constants";

function HomePage() {
  const size = useWindowSize();
  return (
    <Layout>
      <LayoutSidebar flat={size.width < CONST.DESKTOP_SIZE}>
        sidebar
      </LayoutSidebar>
      <LayoutMain>timeline menü {JSON.stringify(size)}</LayoutMain>
      {size.width > CONST.TABLET_SIZE && <LayoutExtra>extra menü</LayoutExtra>}
    </Layout>
  );
}

export default HomePage;
