import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Main() {

 
  return (
    <div className="our">
      <div className="btn-div">
        <Link to="/a">
          <button className="btn-a">A</button>
        </Link>
        <Link to="/b">
          <button className="btn-b">B</button>
        </Link>
      </div>
      <div className="text-center">
        <br />
        <br />
        <br />

        <h1 align="center">Hey ! 👋</h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Link to="/user/iron/man " className="btn">
          <Button variant="success" className="btn">
            Click Me!
          </Button>{" "}
        </Link>



        <a  href ="/home">Home Button</a>
      </div>
    </div>
  );
}

export default Main;
