import React from "react";
import { Row, Col } from "react-bootstrap";
import Comments from "../../components/Comments/Comments";
import VideoMetaData from "../../components/VideoMetaData/VideoMetaData";
import VideoStretch from "../../components/VideoStretch/VideoStretch";
import "./_watchscreen.scss";

const WatchScreen = () => {
  return (
    <Row>
      <Col lg={8}>
        <div className="watchScreen_player">
          <iframe
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            title="Bohemian Rhapsody"
            frameBorder="0"
            allowFullScreen
            width="100%"
            height="100%"
          ></iframe>
          <VideoMetaData />
          <Comments />
        </div>
      </Col>

      <Col lg={4}>
        {[...Array(10)].map(() => (
          <VideoStretch />
        ))}
      </Col>
    </Row>
  );
};

export default WatchScreen;
