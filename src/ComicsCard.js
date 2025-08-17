import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import comicsData from "./data";

function ComicsCard({ title, image, story }) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{story}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default ComicsCard;
