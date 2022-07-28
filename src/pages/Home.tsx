import React from "react";
import "./Home.css";
import Card from "../components/Card";
import Form from "../components/Form";
import { useStoreState } from "../store/hooks";

const Home = () => {
  const contactList = useStoreState((state) => state.contactList);
  return (
    <>
      <div className="left-panel">
        {contactList.map((contact) => {
          return <Card key={contact.key} contact={contact} />;
        })}
      </div>
      <div className="right-panel">
        <Form />
      </div>
    </>
  );
};

export default Home;
