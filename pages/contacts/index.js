import Heading from "../../components/Heading";
import Head from "next/head";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { contacts: data },
  };
};

const Contacts = ({ contacts }) => (
  <>
    <Head>
      <title>Contacts</title>
    </Head>
    <Heading text="Contacts list:" />
    <ul>
      {contacts.map((contacts) => (
        <li key={contacts.id}>
          <strong>{contacts.name}</strong>({contacts.email})
        </li>
      ))}
    </ul>
  </>
);

export default Contacts;
