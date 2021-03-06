import React from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./_sidebar.scss";

import {
  MdSubscriptions,
  MdThumbUp,
  MdExitToApp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
} from "react-icons/md";

import { logout } from "../../redux/actions/authActions";

const Sidebar = ({ show, handleToggleSidebar }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = () => {
    dispatch(logout());
    history.push("/");
  };
  return (
    <nav
      onClick={() => handleToggleSidebar(false)}
      className={show ? "sidebar open" : "sidebar"}
    >
      <Link to="/">
        <li>
          <MdHome size={23} />
          <span>Home</span>
        </li>
      </Link>

      <Link to="/feed/subscriptions">
        <li>
          <MdSubscriptions size={23} />
          <span>Subscriptions</span>
        </li>
      </Link>

      <Link to="/feed/liked">
        <li>
          <MdThumbUp size={23} />
          <span>Liked videos</span>
        </li>
      </Link>
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
      <li onClick={handleLogout}>
        <MdExitToApp size={23} />
        <span>Log Out</span>
      </li>
      <hr />
    </nav>
  );
};

export default Sidebar;
