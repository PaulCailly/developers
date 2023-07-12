import React from "react";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Hero from "@site/src/components/Hero";
import Stacks from "@site/src/components/Stacks";
import Chatbot from "../components/Chatbot";

const Home = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <Chatbot />
      <Hero />
      <main>
        <Stacks />
      </main>
    </Layout>
  );
};

export default Home;
