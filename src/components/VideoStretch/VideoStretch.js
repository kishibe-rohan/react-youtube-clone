import React from "react";
import { Row, Col } from "react-bootstrap";
import moment from "moment";
import numeral from "numeral";
import "./_videostretch.scss";

const VideoStretch = () => {
  return (
    <Row className="py-2 m-1 videoStretch align-items-center">
      <Col xs={6} className="videoHorizontal_left"></Col>
    </Row>
  );
};

export default VideoStretch;
