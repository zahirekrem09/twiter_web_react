import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import Profil from "../components/Profile";
import StoreContext from "../store";
import { db } from "../firebase/firebase";

function ProfilePage() {
  const store = useContext(StoreContext);
  const [posts, setPosts] = useState([]);
  const { user } = useContext(StoreContext);

  useEffect(() => {
    // firebase db  connect

    //TODO✅  add user and post collection
    db.collection("posts")
      .orderBy("datetime", "desc")
      .onSnapshot((snapshot) => {
        const postsData = snapshot.docs.map((doc) => doc.data());
        const userPosts = postsData?.filter((item) => item.user.id == user?.id);
        console.log(userPosts);
        setPosts(userPosts);
      });
  }, []);
  return (
    <Layout>
      <Profil user={store.user} posts={posts} />
    </Layout>
  );
}
export default ProfilePage;
