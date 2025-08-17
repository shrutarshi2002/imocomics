import React from "react";
import comicsData from "./data";
import ComicsCard from "./ComicsCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
  return (
    <div>
      <Container>
        <Row>
          {comicsData.map((comic) => (
            <Col>
              <ComicsCard
                key={comic.id}
                title={comic.title}
                image={comic.imgsrc}
                story={comic.story}
              ></ComicsCard>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
