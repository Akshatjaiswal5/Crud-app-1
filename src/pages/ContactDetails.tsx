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
    <div
      className="grid place-items-center h-screen w-screen bg-blue-400"
      onClick={goback}
    >
      <div className="flex-col text-center h-1/3 w-1/3 m-auto bg-blue-100 gap-2 rounded-lg py-8 drop-shadow-md">
        <h1 className="font-sans font-bold mt-15 text-2xl">{contact.name}</h1>
        <div className="mt-5 font-semibold text-md">
          <p>+91-{contact.contact}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
