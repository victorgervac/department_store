import React from "react";
import { Header, Card, Button } from "semantic-ui-react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const Stores = () => {
  const [stores, setStores] = useState([]);
  useEffect(() => {
    Axios.get("/api/stores")
      .then((response) => {
        setStores(response.data);
      })
      .catch((error) => {
        alert("Can't Reach Stores");
      });
  }, []);
  const renderStores = () => {
    if (stores.length <= 0) return <h2>No Stores avaliable</h2>;
    return stores.map((store) => (
      <Card>
        <Card.Content>
          <Card.Header>{store.name}</Card.Header>
          <Button color="blue" as={Link} to={`/stores/${store.id}`}>
            View
          </Button>
        </Card.Content>
      </Card>
    ));
  };
  return (
    <div>
      <Header as="h1" style={{ textAlign: "center" }}>
        STORES
      </Header>
      <Card.Group>{renderStores()}</Card.Group>
    </div>
  );
};

export default Stores;
