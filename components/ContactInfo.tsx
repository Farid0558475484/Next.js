import { contactType } from "../types";
import { FC } from "react";

type contactInfoProps = {
  contact: contactType;
};

const ContactInfo: FC<contactInfoProps> = ({ contact }) => {
  const { name, email, address } = contact || {};
  const { street, suite, city, zipcode } = address || {};

  if (!contact) {
    return <h1>Empty Info...</h1>;
  }

  return (
    <>
      <div>
        <strong>Email:</strong>
        {email}
      </div>

      <div>
        <strong>Address:</strong>
        {` ${street}, ${suite}, ${city}, ${zipcode}`}
      </div>
    </>
  );
};
export default ContactInfo;
