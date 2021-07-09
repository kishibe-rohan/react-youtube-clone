import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import moment from "moment";
import numeral from "numeral";
import request from "../../api";
import "./_videostretch.scss";

const VideoStretch = ({ video, searchScreen }) => {
  const history = useHistory();
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      title,
      publishedAt,
      thumbnails: { medium },
    },
  } = video;

  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const _videoId = id?.videoId || id;
  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  useEffect(() => {
    const getVideoDetails = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: _videoId,
        },
      });
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };

    getVideoDetails();
  }, [_videoId]);

  const handleVideoClick = () => {
    history.push(`/watch/${_videoId}`);
  };

  return (
    <Row className="py-2 m-1 videoStretch align-items-start">
      <Col
        xs={6}
        md={searchScreen ? 4 : 6}
        className="videoStretch_left"
        onClick={handleVideoClick}
      >
        <LazyLoadImage
          src={medium.url}
          className="videoStretch_thumbnail"
          wrapper="videoStretch_thumbnail-wrapper"
          effect="blur"
        />
        <span className="videoStretch_duration">{_duration}</span>
      </Col>
      <Col xs={6} md={searchScreen ? 8 : 6} className="videoStretch_right p-0">
        <p className="videoStretch_title mb-1">{title}</p>
        <div className="videoStretch_channel d-flex align-items-center my-1">
          <p>{channelTitle}</p>
        </div>
        <div className="videoStretch_details">
          {numeral(views).format("0.a")} views ◦ {moment(publishedAt).fromNow()}
        </div>
      </Col>
    </Row>
  );
};

export default VideoStretch;
