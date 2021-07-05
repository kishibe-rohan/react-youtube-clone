import React from "react";
import { useSelector } from "react-redux";
import "./_header.scss";

import { FaBars } from "react-icons/fa";
import { MdNotifications, MdApps } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";

const Header = ({ handleToggleSidebar }) => {
  const profile = useSelector((state) => state.auth.userProfile);
  const profileImage = profile?.picture;

  return (
    <div className="header">
      <FaBars
        className="header_menu"
        size={26}
        onClick={() => handleToggleSidebar()}
      />
      <img
        src="https://pngimg.com/uploads/youtube/youtube_PNG2.png"
        className="header_logo"
        alt="ReacTube"
      />
      <form>
        <input type="text" placeholder="Search" />
        <button type="submit">
          <AiOutlineSearch size={32} />
        </button>
      </form>
      <div className="header_icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img src={profileImage} alt="profile" />
      </div>
    </div>
  );
};

export default Header;
