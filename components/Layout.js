import React from "react";
import cn from "classnames";
import useWindowSize from "../hooks/useWindowSize";
import CONST from "../constants";
import styles from "./Layout.module.css";
import LayoutSidebar from "../components/LayoutSidebar";
import LayoutMain from "../components/LayoutMain";
import LayoutExtra from "../components/LayoutExtra";
import MobileSidebar from "./MobileSidebar";

function Layout({ children }) {
  const size = useWindowSize();
  return (
    <div className={cn(styles.layout)}>
      {size.width <= 500 && <MobileSidebar />}
      {size.width > 500 && (
        <LayoutSidebar flat={size.width < CONST.DESKTOP_SIZE} />
      )}
      {/* <LayoutSidebar flat={size.width < CONST.DESKTOP_SIZE}>
        sidebar
      </LayoutSidebar> */}

      <LayoutMain>{children}</LayoutMain>

      {size.width > CONST.TABLET_SIZE && <LayoutExtra>extra menü</LayoutExtra>}
    </div>
  );
}

export default Layout;
