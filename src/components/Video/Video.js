import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import moment from "moment";
import numeral from "numeral";
import request from "../../api";
import "./_video.scss";

const Video = ({ video, id }) => {
  const history = useHistory();
  const {
    snippet: {
      title,
      channelId,
      channelTitle,
      publishedAt,
      thumbnails: { medium },
    },
    contentDetails,
  } = video;

  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");
  const _videoId = id?.videoId || contentDetails?.videoId || id;

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

  useEffect(() => {
    const getChannelDetails = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });

      setChannelIcon(items[0].snippet.thumbnails.default);
    };

    getChannelDetails();
  }, [channelId]);

  const handleVideoClick = () => {
    history.push(`/watch/${_videoId}`);
  };

  return (
    <div className="video">
      <div className="video_top" onClick={handleVideoClick}>
        <LazyLoadImage src={medium.url} effect="blur" />
        <span className="video_top_duration">{_duration}</span>
      </div>

      <div className="video_title">
        <LazyLoadImage src={channelIcon?.url} effect="blur" />

        <div className="video_details">
          <p>{title}</p>
          <span>{channelTitle}</span>
          <span>
            {numeral(views).format("0.a")} views ◦{" "}
            {moment(publishedAt).fromNow()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Video;
