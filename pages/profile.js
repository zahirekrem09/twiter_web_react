import React from "react";
import Layout from "../components/Layout";
import ProfiCard from "../components/ProfilCard";
import Profil from "../components/Profile";

function ProfilePage() {
  return (
    <Layout>
      <Profil />
      <ProfiCard />
    </Layout>
  );
}
export default ProfilePage;
