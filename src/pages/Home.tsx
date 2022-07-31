import React from "react";
import Card from "../components/Card";
import Form from "../components/Form";
import { useStoreState } from "../store/hooks";

const Home = () => {
  const contactList = useStoreState((state) => state.contactList);
  return (
    <div className="columns">
      <div className="column">
        {contactList.map((contact) => {
          return <Card key={contact.key} contact={contact} />;
        })}
      </div>
      <div className="column level-item">
        <Form />
      </div>
    </div>
  );
};

export default Home;
