import Head from "next/head";
import Socials from "../components/Socials";
import styles from "../styles/Home.module.scss";

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.API_HOST}/socials`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { socials: data },
  };
};

const Home = ({ socials }) => (
  <div className={styles.wrapper}>
    <Head>
      <title>Home</title>
    </Head>
    <h1>Ferid Hacizade</h1>
    <Socials socials={socials} />
  </div>
);

export default Home;
