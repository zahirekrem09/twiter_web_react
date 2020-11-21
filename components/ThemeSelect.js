import React, { useContext } from "react";
import StoreContext from "../store";

import styles from "./ThemeSelect.module.css";

const ThemeSelect = () => {
  const store = useContext(StoreContext);

  const THEME = { light: "light", dim: "dim", dark: "dark" };
  return (
    <div className={styles.radioContainer}>
      {["light", "dim", "dark"].map((theme, i) => (
        <label key={i} className={styles.label}>
          <input
            type="radio"
            value={theme}
            name="theme"
            checked={theme === store.theme}
            onChange={(e) => store.changeTheme(e.target.value)}
          />
          {THEME[theme]}
        </label>
      ))}
    </div>
  );
};

export default ThemeSelect;
