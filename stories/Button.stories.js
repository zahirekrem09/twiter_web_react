import React from "react";

import Button from "../components/Button";
import { Home } from "../components/icons";
import MenuButton from "../components/MenuButton";
import Navigation from "../components/Navigation";
import Title from "../components/Title";

import ThemeButton from "../components/ThemeButton";
import Stack from "../components/Stack";

export default {
  title: "Buttons",
};

export const Normal = () => {
  return <Button>My Button</Button>;
};
export const Menu = () => {
  return (
    <MenuButton>
      <MenuButton>
        <Home />
        <Title>Home</Title>
      </MenuButton>
    </MenuButton>
  );
};

export const Nav = () => {
  return <Navigation selectedKey="Home" />;
};

export const Theme = () => {
  return (
    <Stack>
      <ThemeButton>Tweet</ThemeButton>
      <ThemeButton full>Full Tweet</ThemeButton>
      <ThemeButton full xl>
        {" "}
        Big Tweet
      </ThemeButton>
    </Stack>
  );
};
