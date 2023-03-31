import Heading from "../../components/Heading";
import Head from "next/head";
import Link from "next/link";

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
          <Link href={`/contacts/${contacts.id}`}>{contacts.name}</Link>
        </li>
      ))}
    </ul>
  </>
);

export default Contacts;
