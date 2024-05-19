import About from "@/components/About";
import Contact from "@/components/Contact";
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Services from "@/components/Services";
import WorkWithMe from "@/components/WorkWithMe";
import Head from "next/head";
const Hero = () => {
  return (
    <>
      <Head>
        <title>Portfolio - Abeer Ahmed</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <Layout>
        <Header />
        <About />
        <WorkWithMe />
        <Services />
        <Contact />
      </Layout>
    </>
  );
};

export default Hero;
