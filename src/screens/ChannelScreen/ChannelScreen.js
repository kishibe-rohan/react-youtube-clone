import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import numeral from "numeral";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import {
  getVideosByChannel,
  getChannelDetails,
} from "../../redux/actions/channelActions";
import Video from "../../components/Video/Video";

import "./_channelscreen.scss";

const ChannelScreen = () => {
  const { channelId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideosByChannel(channelId));
    dispatch(getChannelDetails(channelId));
  }, [dispatch, channelId]);

  const { videos, isLoading } = useSelector((state) => state.channelVideos);
  const { snippet, statistics } = useSelector(
    (state) => state.channelDetails.channel
  );

  return (
    <>
      <div className="px-5 py-2 my-2 d-flex justify-content-between align-items-center channelHeader">
        <div className="d-flex align-items-center">
          <img src={snippet?.thumbnails?.default?.url} />
          <div classname="channelHeader_details ml-3">
            <h3>{snippet?.title}</h3>
            <span>
              {numeral(statistics?.subscriberCount).format("0.a")} Subscribers
            </span>
          </div>
        </div>
        <button>Subscribed</button>
      </div>

      <Container>
        <Row className="mt-2">
          {!isLoading
            ? videos?.map((video) => (
                <Col md={4} lg={3}>
                  <Video video={video} />
                </Col>
              ))
            : [...Array(20)].map(() => (
                <Col md={4} lg={3}>
                  <SkeletonTheme color="#343a40" highlightColor="#324147">
                    <Skeleton width="100%" height="140px" />
                  </SkeletonTheme>
                </Col>
              ))}
        </Row>
      </Container>
    </>
  );
};

export default ChannelScreen;