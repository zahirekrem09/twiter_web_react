import React, { useEffect, useLayoutEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./LayoutExtra.module.css";
import cn from "classnames";
import SearchBox from "./Searcbox";
import Lists from "./Lists";
import Trends from "./Trends";
import FollowSuggestion from "./FollowSuggestion";
import { db } from "../firebase/firebase";

function LayoutExtra({ children }) {
  const router = useRouter();
  // console.log(router.pathname);
  const [users, setUsers] = useState([]);
  // const [fusers, setFusers] = useState([]);

  // const showMore = () => {
  //   setFusers([...fusers, users.slice(fusers.length, fusers.length + 5)]);
  // };

  // console.log(fusers);

  useEffect(() => {
    // firebase db  connect
    db.collection("users").onSnapshot((snapshot) => {
      const usersData = snapshot.docs.map((doc) => doc.data());
      // console.log(usersData);
      setUsers(usersData);
    });
  }, []);

  // useLayoutEffect(() => {
  //   showMore();
  // }, []);
  return (
    <section className={cn(styles.extra)}>
      {/* searchbox */}

      <div className={cn(styles.searchBox)}>
        <SearchBox />
      </div>

      <div className={cn(styles.extraStick)}></div>
      {/* Trends for you   */}

      {router.pathname !== "/explore" && (
        <Lists title="Trends for you" icon>
          <Trends tag="Τραμπ" />
          <Trends tag="Black Friday" />
          <Trends tag="Κυριακης" />
          <Trends tag="Greek" />
          <Trends tag="Infognomon Politics" />
        </Lists>
      )}

      {/* Who to follow */}
      <Lists title="Who to follow">
        {users.map((user) => (
          <FollowSuggestion key={user.id} user={user} />
        ))}
      </Lists>

      {/* footer */}
    </section>
  );
}

export default LayoutExtra;
