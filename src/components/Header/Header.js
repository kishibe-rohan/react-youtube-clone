import React from "react";
import "./_header.scss";

import { FaBars } from "react-icons/fa";
import { MdNotifications, MdApps } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  return (
    <div className="header border border-dark">
      <FaBars className="header_menu" size={26} />
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
        <img
          src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
          alt="profile"
        />
      </div>
    </div>
  );
};

export default Header;
