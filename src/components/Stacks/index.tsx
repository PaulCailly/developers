import React from "react";
import styles from "./styles.module.css";

type Stack = {
  title: string;
  Icon: React.ComponentType<React.ComponentProps<"svg">>;
};

const stacks: Stack[] = [
  {
    title: "JS",
    Icon: require("@site/static/img/js.svg").default,
  },
  {
    title: "React",
    Icon: require("@site/static/img/react.svg").default,
  },
  {
    title: "Next.js",
    Icon: require("@site/static/img/nextjs.svg").default,
  },
  {
    title: "Angular",
    Icon: require("@site/static/img/angular.svg").default,
  },
  {
    title: "Vue",
    Icon: require("@site/static/img/vue.svg").default,
  },

  {
    title: "iOS",
    Icon: require("@site/static/img/ios.svg").default,
  },
  {
    title: "Android",
    Icon: require("@site/static/img/android.svg").default,
  },
];

const Stacks = () => {
  return (
    <section className={styles.features}>
      {stacks.map(({ title, Icon }) => (
        <Icon aria-label={title} className={styles.icon} role="img" />
      ))}
    </section>
  );
};

export default Stacks;
