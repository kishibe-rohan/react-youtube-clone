import React from "react";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ShowMoreText from "react-show-more-text";
import moment from "moment";
import numeral from "numeral";
import "./_videometadata.scss";

const VideoMetaData = () => {
  return (
    <div className="videoMetaData py-2">
      <div className="videoMetaData_top">
        <h1>Video Title</h1>
        <div className="py-1 d-flex justify-content-between align-items-center ">
          <span>
            {numeral(10000).format("0.a")} views -{" "}
            {moment("2020-06-11").fromNow()}
          </span>

          <div>
            <span style={{ marginRight: "5px" }}>
              <MdThumbUp size={26} />
              {numeral(1000).format("0.a")}
            </span>
            <span style={{ marginRight: "3px" }}>
              <MdThumbDown size={26} />
              {numeral(1000).format("0.a")}
            </span>
          </div>
        </div>
      </div>
      <div className="videoMetaData_channel d-flex justify-content-between align-items-center my-2 py-3">
        <div className="d-flex">
          <img
            src="https://www.pngfind.com/pngs/m/488-4887957_facebook-teerasej-profile-ball-circle-circular-profile-picture.png"
            alt="channel_icon"
            className="mr-3 rounded-circle"
          />
          <div className="d-flex flex-column">
            <span>Shining Wizard</span>
            <span> {numeral(5000).format("0.a")} Subscribers</span>
          </div>
        </div>
        <button className="p-2 m-2 border-0 btn btn-red">Subscribed</button>
      </div>
      <div className="videoMetaData_description">
        <ShowMoreText
          lines={3}
          more="SHOW MORE"
          less="SHOW LESS"
          anchorClass="showMoreText"
          expanded={false}
        >
          This is the description of this video .have some random textSed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. This is the description of this video .have
          some random textSed ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
          ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt{" "}
        </ShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetaData;
