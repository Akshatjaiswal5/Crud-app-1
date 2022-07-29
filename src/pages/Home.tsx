import React from "react";
import Card from "../components/Card";
import Form from "../components/Form";
import { useStoreState } from "../store/hooks";

const Home = () => {
  const contactList = useStoreState((state) => state.contactList);
  return (
    <>
      <div className="absolute left-0 top-0 bg-blue-400 h-full w-1/2">
        {contactList.map((contact) => {
          return <Card key={contact.key} contact={contact} />;
        })}
      </div>
      <div className="absolute bg-blue-400 left-1/2 top-0 h-full w-1/2 grid place-content-center">
        <Form />
      </div>
    </>
  );
};

export default Home;
