import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Categories from "../../components/Categories/Categories";
import Video from "../../components/Video/Video";

const HomeScreen = () => {
  return (
    <Container>
      <Categories />
      <Row>
        {[...new Array(20)].map(() => (
          <Col lg={3} md={4}>
            <Video />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeScreen;
