import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Profil from "../../components/Profile";
import StoreContext from "../../store";
import { db } from "../../firebase/firebase";

function UserDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [posts, setPosts] = useState([]);
  const { user, users } = useContext(StoreContext);

  const postUser = users?.filter((us) => us.id == id)[0];

  //   console.log(users);
  //   console.log(postUser);

  useEffect(() => {
    // firebase db  connect

    //TODO✅  add user and post collection
    db.collection("posts")
      .orderBy("datetime", "desc")
      .onSnapshot((snapshot) => {
        const postsData = snapshot.docs.map((doc) => doc.data());
        const userPosts = postsData?.filter((item) => item.user.id == id);
        console.log(userPosts);
        setPosts(userPosts);
      });
  }, []);
  return (
    <Layout>
      <Profil user={postUser} posts={posts} />
    </Layout>
  );
}

export default UserDetailPage;
