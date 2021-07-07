import React from "react";
import { Row, Col } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import moment from "moment";
import numeral from "numeral";
import "./_videostretch.scss";

const VideoStretch = () => {
  const duration = "300";
  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");
  return (
    <Row className="py-2 m-1 videoStretch align-items-center">
      <Col xs={6} md={4} className="videoStretch_left">
        <LazyLoadImage
          src="https://www.pngfind.com/pngs/m/488-4887957_facebook-teerasej-profile-ball-circle-circular-profile-picture.png"
          className="videoStretch_thumbnail"
          wrapper="videoStretch_thumbnail-wrapper"
          effect="blur"
        />
        <span className="videoStretch_duration">{_duration}</span>
      </Col>
      <Col xs={6} md={8} className="videoStretch_right p-0">
        <p className="videoStretch_title mb-1">Video Title</p>
        <div className="videoStretch_channel d-flex align-items-center my-1">
          <p>Channel Name</p>
        </div>
        <div className="videoStretch_details">
          {numeral(1000).format("0.a")} views ◦ {moment("2020-06-11").fromNow()}
        </div>
      </Col>
    </Row>
  );
};

export default VideoStretch;
