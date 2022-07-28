import React from "react";
import "./ContactDetails.css";
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
    <div className="background" onClick={goback}>
      <div className="detail-box">
        <h1>Contact Details</h1>
        <div>
          <p>Name: {contact.name}</p>
          <p>Contact: {contact.contact}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
