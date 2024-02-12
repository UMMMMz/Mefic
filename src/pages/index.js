import Experience from "../components/Experience";
import Layout from "../components/Layout";
import Head from "next/head";
const Home = () => {
    return (
      <>
        <Head>
          <title>MEFIC</title>
        </Head>
        <Layout>
         <Experience/>
        </Layout>
      </>
    );
  };
  export default Home;