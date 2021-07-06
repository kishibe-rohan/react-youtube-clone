import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Col, Row } from "react-bootstrap";
import LoadingSkeleton from "../../components/LoadingSkeleton/LoadingSkeleton";
import Categories from "../../components/Categories/Categories";
import Video from "../../components/Video/Video";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/actions/videoActions";

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videos, isLoading } = useSelector((state) => state.popularVideos);

  return (
    <Container>
      <Categories />

      <Row>
        {!isLoading
          ? videos.map((video) => (
              <Col key={video.id} lg={3} md={4}>
                <Video video={video} id={video.id} />
              </Col>
            ))
          : [...Array(20)].map(() => (
              <Col lg={3} md={4}>
                <LoadingSkeleton />
              </Col>
            ))}
      </Row>
    </Container>
  );
};

export default HomeScreen;
