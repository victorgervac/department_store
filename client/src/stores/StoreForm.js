import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import Axios from "axios";

const StoreForm = ({ history }) => {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    console.log(name);
    Axios.post("/api/stores", { name })
      .then((res) => {
        history.push("/stores");
      })
      .catch((err) => {
        alert("failed to add store");
      });
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Input
        label="Name"
        placeholder="Enter Store Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Form.Button color="blue">Submit</Form.Button>
    </Form>
  );
};
export default StoreForm;
