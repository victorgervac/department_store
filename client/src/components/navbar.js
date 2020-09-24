import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const NavBar = () => {
  return (
    <div>
      <Menu style={styles.navbar}>
        <Link to="/">
          <Menu.Item style={styles.item}>Home</Menu.Item>
        </Link>
        <Link to="/thingsDemo">
          <Menu.Item style={styles.item}>Things</Menu.Item>
        </Link>
        <Link to="/Stores">
          <Menu.Item style={styles.item}>Store</Menu.Item>
        </Link>
      </Menu>
    </div>
  );
};
const styles = {
  navbar: {
    background: "gray",
    padding: "8px",
  },
  item: {
    color: "black",
    fontSize: "15px",
  },
};
export default NavBar;
