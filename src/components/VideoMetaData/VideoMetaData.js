import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ShowMoreText from "react-show-more-text";
import moment from "moment";
import numeral from "numeral";
import {
  getChannelDetails,
  checkSubscriptionStatus,
} from "../../redux/actions/channelActions";
import "./_videometadata.scss";

const VideoMetaData = ({ video: { snippet, statistics }, videoId }) => {
  const dispatch = useDispatch();
  const { channelId, channelTitle, description, title, publishedAt } = snippet;
  const { viewCount, likeCount, dislikeCount } = statistics;
  const { snippet: channelSnippet, statistics: channelStatistics } =
    useSelector((state) => state.channelDetails.channel);

  const isSubscribed = useSelector(
    (state) => state.channelDetails.isSubscribed
  );

  useEffect(() => {
    dispatch(getChannelDetails(channelId));
    dispatch(checkSubscriptionStatus(channelId));
  }, [dispatch, channelId]);
  return (
    <div className="videoMetaData py-2">
      <div className="videoMetaData_top">
        <h1>{title}</h1>
        <div className="py-1 d-flex justify-content-between align-items-center ">
          <span>
            {numeral(viewCount).format("0.a")} views -{" "}
            {moment(publishedAt).fromNow()}
          </span>

          <div>
            <span style={{ marginRight: "5px" }}>
              <MdThumbUp size={26} />
              {numeral(likeCount).format("0.a")}
            </span>
            <span style={{ marginRight: "3px" }}>
              <MdThumbDown size={26} />
              {numeral(dislikeCount).format("0.a")}
            </span>
          </div>
        </div>
      </div>
      <div className="videoMetaData_channel d-flex justify-content-between align-items-center my-2 py-3">
        <div className="d-flex">
          <img
            src={channelSnippet?.thumbnails?.default?.url}
            alt="channel_icon"
            className="mr-3 rounded-circle"
          />
          <div className="d-flex flex-column">
            <span>{channelTitle}</span>
            <span>
              {" "}
              {numeral(channelStatistics?.subscriberCount).format("0.a")}{" "}
              Subscribers
            </span>
          </div>
        </div>
        <button
          className={`p-2 m-2 border-0 btn ${isSubscribed && "btn-gray"}`}
        >
          {isSubscribed ? "Subscribed" : "Subscribe"}
        </button>
      </div>
      <div className="videoMetaData_description">
        <ShowMoreText
          lines={3}
          more="SHOW MORE"
          less="SHOW LESS"
          anchorClass="showMoreText"
          expanded={false}
        >
          {description}
        </ShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetaData;
