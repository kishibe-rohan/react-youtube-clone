import React from "react";
import "./_sidebar.scss";

import {
  MdSubscriptions,
  MdThumbUp,
  MdExitToApp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
} from "react-icons/md";

const Sidebar = ({ show, handleToggleSidebar }) => {
  return (
    <nav
      onClick={() => handleToggleSidebar(false)}
      className={show ? "sidebar open" : "sidebar"}
    >
      <li>
        <MdHome size={23} />
        <span>Home</span>
      </li>
      <li>
        <MdSubscriptions size={23} />
        <span>Subscriptions</span>
      </li>
      <li>
        <MdThumbUp size={23} />
        <span>Liked videos</span>
      </li>
      <hr />
      <li>
        <MdHistory size={23} />
        <span>History</span>
      </li>
      <li>
        <MdLibraryBooks size={23} />
        <span>Library</span>
      </li>
      <hr />
      <li>
        <MdExitToApp size={23} />
        <span>Log Out</span>
      </li>
      <hr />
    </nav>
  );
};

export default Sidebar;