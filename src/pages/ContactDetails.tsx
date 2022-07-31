import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useStoreState } from "../store/hooks";
import PageNotFound from "./404Page";

const ContactDetails = () => {
  const params = useParams();
  const contactList = useStoreState((state) => state.contactList);
  const contact = contactList.find((contact) => contact.key === params.key);
  const navigate = useNavigate();
  const goback = () => {
    navigate(-1);
  };

  if (!contact) return <PageNotFound />;

  return (
    <div className=" level-item" onClick={goback}>
      <div className="box p-6">
        <h1 className=" is-size-3 has-text-weight-semibold">{contact.name}</h1>
        <div className="">
          <p>+91-{contact.contact}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
