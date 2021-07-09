import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";

import { getVideosBySearch } from "../../redux/actions/videoActions";
import VideoStretch from "../../components/VideoStretch/VideoStretch";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SearchScreen = () => {
  const { query } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVideosBySearch(query));
  }, [query, dispatch]);

  const { videos, isLoading } = useSelector((state) => state.searchVideos);

  return (
    <Container>
      {!isLoading ? (
        videos?.map((video) => (
          <VideoStretch video={video} key={video.id.videoId} searchScreen />
        ))
      ) : (
        <SkeletonTheme color="#343a40" highlightColor="#3c4147">
          <Skeleton width="100%" height="130px" count={10} />
        </SkeletonTheme>
      )}
    </Container>
  );
};

export default SearchScreen;
