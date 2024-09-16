// pages/index.js
import Head from "next/head";
import React from "react";
// Import components
import NavigationBar from "../components/web/NavigationBar";
import Hero from "../components/web/hero";
import FeatureSection1 from "../components/web/FeatureSection1";
import Footer from "../components/web/Footer";
import Pricing from "../components/web/pricing";

export default function Home() {
  return (
    <>
      <Head>
        <title>AnyCopy: AI Copy Assistant Powered by Generative AI</title>
        <meta
          name="description"
          content="Experience a 10x boost in content creation efficiency and quality. Our Generative AI platform revolutionizes how you produce content, delivering engaging, precise copy at an unprecedented scale."
        />
      </Head>
      <div>
        <NavigationBar />
        <Hero />
        <FeatureSection1 />
        <Pricing />
        <Footer />
      </div>
    </>
  );
}
