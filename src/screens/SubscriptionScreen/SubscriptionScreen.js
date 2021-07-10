import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { getSubscribedChannels } from "../../redux/actions/channelActions";
import "./_subscriptionscreen.scss";
import VideoStretch from "../../components/VideoStretch/VideoStretch";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SubscriptionScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSubscribedChannels());
  }, [dispatch]);

  const { isLoading, videos } = useSelector(
    (state) => state.subscriptionChannels
  );
  return (
    <Container fluid>
      {!isLoading ? (
        videos?.map((video) => (
          <VideoStretch video={video} key={video.id} subScreen />
        ))
      ) : (
        <SkeletonTheme color="#343a40" highlightColor="#3c4147">
          <Skeleton width="100%" height="160px" count={10} />
        </SkeletonTheme>
      )}
    </Container>
  );
};

export default SubscriptionScreen;
