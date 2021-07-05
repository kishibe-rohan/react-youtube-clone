import React, { useState, useEffect } from "react";
import moment from "moment";
import numeral from "numeral";
import request from "../../api";
import "./_video.scss";

const Video = ({ video, id }) => {
  const {
    snippet: {
      title,
      channelId,
      channelTitle,
      publishedAt,
      thumbnails: { medium },
    },
  } = video;

  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");
  const _videoId = id?.videoId || id;

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

  return (
    <div className="video">
      <div className="video_top">
        <img src={medium.url} alt="Thumbnail" />
        <span>{_duration}</span>
      </div>

      <div className="video_title">
        <img src={channelIcon?.url} alt="channel_logo" />

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
