import React, { useContext } from "react";
import Layout from "../components/Layout";
import Profil from "../components/Profile";
import StoreContext from "../store";

function ProfilePage() {
  const store = useContext(StoreContext);
  return (
    <Layout>
      <Profil user={store.user} />
    </Layout>
  );
}
export default ProfilePage;
