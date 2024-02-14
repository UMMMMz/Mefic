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
  export default Home;import Layout from "../components/Layout";
import Head from "next/head";
import Icon from "../components/Model";
const Home = () => {
    
    return (
      
        
    <div className="wrap">
      <Icon className="scrolling-icon" />
      
      <div className="page1"></div>
   
      </div>
    

      

    );
  };
  export default Home;