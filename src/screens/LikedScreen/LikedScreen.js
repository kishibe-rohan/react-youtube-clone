import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Container } from "react-bootstrap";

import { getLikedVideos } from "../../redux/actions/videoActions";
import VideoStretch from "../../components/VideoStretch/VideoStretch";

const LikedScreen = () => {
  const dispatch = useDispatch();
  const { videos, isLoading } = useSelector((state) => state.likedVideos);

  useEffect(() => {
    dispatch(getLikedVideos());
  }, [dispatch]);

  return (
    <Container>
      {!isLoading ? (
        videos?.map((video) => (
          <VideoStretch video={video} key={video.id.videoId} likedScreen />
        ))
      ) : (
        <SkeletonTheme color="#343a40" highlightColor="#3c4147">
          <Skeleton width="100%" height="130px" count={10} />
        </SkeletonTheme>
      )}
    </Container>
  );
};

export default LikedScreen;
