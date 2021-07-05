import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

import Categories from "../../components/Categories/Categories";
import Video from "../../components/Video/Video";
import { getPopularVideos } from "../../redux/actions/videoActions";

const HomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videos } = useSelector((state) => state.popularVideos);
  return (
    <Container>
      <Categories />
      <Row>
        {videos.map((video) => (
          <Col key={video.id} lg={3} md={4}>
            <Video video={video} id={video.id} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeScreen;
