import React from "react";
import { useDispatch } from "react-redux";
import "./_loginscreen.scss";

import { login } from "../../redux/actions/authActions";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <div className="login">
      <div className="login_container">
        <img src="https://pngimg.com/uploads/youtube/youtube_PNG2.png" />
        <button onClick={handleLogin}>Sign In With Google</button>
        <p>
          ReacTube | An YouTube clone made with React leveraging the YouTube API
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;
