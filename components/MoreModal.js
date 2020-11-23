import React from "react";
import styles from "./MoreModal.module.css";
import Button from "./Button";
import * as Icon from "./icons";

const MORE = [
  {
    icon: <Icon.Topics />,
    title: "Topics",
    href: "/more",
  },
  {
    icon: <Icon.Moments />,
    title: "Moments",
    href: "/more",
  },
  {
    icon: <Icon.Ads />,
    title: "Ads",
    href: "/more",
  },
  {
    icon: <Icon.Analytics />,
    title: "Analytics",
    href: "/more",
  },
];

const MoreItem = ({ icon, title, href }) => {
  return (
    <Button href={href}>
      {icon}
      <span>{title}</span>
    </Button>
  );
};

const MoreModal = () => {
  return (
    <div style={styles.modal}>
      {MORE.map((item) => (
        <MoreItem icon={item.icon} title={item.title} href={item.href} />
      ))}
    </div>
  );
};

export default MoreModal;
