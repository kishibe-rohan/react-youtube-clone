import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Comments from "../../components/Comments/Comments";
import VideoMetaData from "../../components/VideoMetaData/VideoMetaData";
import VideoStretch from "../../components/VideoStretch/VideoStretch";
import {
  getVideoById,
  getRelatedVideos,
} from "../../redux/actions/videoActions";
import "./_watchscreen.scss";

const WatchScreen = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getVideoById(id));
    dispatch(getRelatedVideos(id));
  }, [id, dispatch]);

  const { video, isLoading } = useSelector((state) => state.specificVideo);
  const { videos, isLoading: videosLoading } = useSelector(
    (state) => state.relatedVideos
  );

  return (
    <Row>
      <Col lg={8}>
        <div className="watchScreen_player">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            title={video?.snippet?.title}
            frameBorder="0"
            allowFullScreen
            width="100%"
            height="100%"
          ></iframe>
          {!isLoading ? (
            <VideoMetaData video={video} videoId={id} />
          ) : (
            <h6>Loading</h6>
          )}
          <Comments
            videoId={id}
            totalComments={video?.statistics?.commentCount}
          />
        </div>
      </Col>

      <Col lg={4}>
        {!videosLoading &&
          videos
            ?.filter((video) => video.snippet)
            .map((relatedVideo, index) => (
              <VideoStretch video={relatedVideo} key={index} />
            ))}
      </Col>
    </Row>
  );
};

export default WatchScreen;
