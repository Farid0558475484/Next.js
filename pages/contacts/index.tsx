import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import { FC } from "react";
import { contactType } from "../../types";

type ContactsTypeProps = {
  contacts: contactType[];
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { contacts: data },
  };
};

const Contacts: FC<ContactsTypeProps> = ({ contacts }) => (
  <>
    <Head>
      <title>Contacts</title>
    </Head>

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
