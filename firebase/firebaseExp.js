import { createContext, useEffect, useState } from "react";

// import { firestore, auth } from "./firebase";
import firebase from "firebase";

export const Context = createContext();

function App() {
  const [query, setQuery] = useState("");
  const [queryData, setQueryData] = useState();
  const [hasSession, setSession] = useState(false);
  const [favorites, setFavorites] = useState();

  const getFavorites = async () => {
    const userRef = firestore.doc(`users/${auth.currentUser?.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
      console.log("No such document!");
    } else {
      setFavorites(snapshot.data().favorites);
    }
  };

  const createFavorites = async (data) => {
    const userRef = firestore.doc(`users/${auth.currentUser?.uid}`);
    await userRef.set({ favorites: [data] });
  };

  const addToFavorites = async (data) => {
    const userRef = firestore.doc(`users/${auth.currentUser?.uid}`);
    await userRef.update({
      favorites: firebase.firestore.FieldValue.arrayUnion(data),
    });
  };

  const removeFromFavorites = async (data) => {
    const userRef = firestore.doc(`users/${auth.currentUser?.uid}`);
    await userRef.update({
      favorites: firebase.firestore.FieldValue.arrayRemove(data),
    });
  };

  return (
    <Context.Provider
      value={{
        query,
        queryData,
        baseUrl,
        apiKey,
        hasSession,
        auth,
        setSession,
        favorites,
        createFavorites,
        addToFavorites,
        removeFromFavorites,
        getFavorites,
      }}
    >
      <Header
        onSearch={(value) => {
          setQuery(value);
        }}
      />
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/details/:id" component={Details} />
        <Route path="/favorites" component={Favorites} />
        <Route component={Error} />
      </Switch>
    </Context.Provider>
  );
}

export default App;
