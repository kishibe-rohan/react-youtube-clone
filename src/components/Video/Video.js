import React from "react";
import { AiFillEye } from "react-icons/ai";
import "./_video.scss";

const Video = () => {
  return (
    <div className="video">
      <div className="video_top">
        <img
          src="https://i.ytimg.com/vi/duJNVv9m2NY/maxresdefault.jpg"
          alt="Thumbnail"
        />
        <span>05:43</span>
      </div>

      <div className="video_title">
        <img
          src="https://pbs.twimg.com/media/EoLqu3tVkAEi4t8.jpg"
          alt="channel_logo"
        />

        <div className="video_details">
          <p>Create an YT Thumbnail</p>
          <span>Steve Suptic Edited</span>
          <span>10K views ◦ 1 week ago</span>
        </div>
      </div>
    </div>
  );
};

export default Video;
