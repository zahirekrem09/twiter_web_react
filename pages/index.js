import React, { useEffect, useState } from "react";

import { db, auth } from "../firebase/firebase";

import HomeLayout from "../components/HomeLayout";

function Index() {
  const [posts, setPosts] = useState([]);
  return (
    <div>
      <HomeLayout />
    </div>
  );
}

export default Index;
