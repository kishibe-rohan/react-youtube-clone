import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import moment from "moment";
import numeral from "numeral";
import request from "../../api";
import "./_videostretch.scss";

const VideoStretch = ({ video, searchScreen, subScreen, likedScreen }) => {
  const history = useHistory();
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      description,
      title,
      publishedAt,
      thumbnails: { medium },
      resourceId,
    },
  } = video;

  const isVideo = !(id.kind === "youtube#channel" || subScreen);
  const [views, setViews] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  const [duration, setDuration] = useState(null);
  const _videoId = id?.videoId || id;
  const _channelId = resourceId?.channelId || channelId;
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

    if (isVideo) getVideoDetails();
  }, [id, _videoId]);

  useEffect(() => {
    const getChannelDetails = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: _channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default);
    };

    getChannelDetails();
  }, [_channelId]);

  const handleClick = () => {
    isVideo
      ? history.push(`/watch/${_videoId}`)
      : history.push(`/channel/${_channelId}`);
  };

  const thumbnail = !isVideo && "videoStretch_thumbnail-channel";

  return (
    <Row className="py-2 m-1 videoStretch align-items-start">
      <Col
        xs={6}
        md={searchScreen || subScreen || likedScreen ? 4 : 6}
        className="videoStretch_left"
        onClick={handleClick}
      >
        <LazyLoadImage
          src={medium.url}
          className={`videoStretch_thumbnail ${thumbnail}`}
          wrapperClassName="videoStretch_thumbnail-wrapper"
          effect="blur"
        />
        {isVideo && <span className="videoStretch_duration">{_duration}</span>}
      </Col>
      <Col
        xs={6}
        md={searchScreen || subScreen || likedScreen ? 8 : 6}
        className="videoStretch_right p-0"
      >
        <p className="videoStretch_title mb-1">{title}</p>
        <div className="my-1 videoStretch_channel d-flex align-items-center">
          {isVideo && <LazyLoadImage src={channelIcon?.url} effect="blur" />}
          <p className="mb-0">{channelTitle}</p>
        </div>
        {isVideo && (
          <div className="videoStretch_details">
            {numeral(views).format("0.a")} views ◦{" "}
            {moment(publishedAt).fromNow()}
          </div>
        )}

        {(searchScreen || subScreen || likedScreen) && (
          <p className="mt-1 videoStretch_desc">{description}</p>
        )}

        {subScreen && (
          <p className="mt-2">{video.contentDetails.totalItemCount} Videos</p>
        )}
      </Col>
    </Row>
  );
};

export default VideoStretch;
