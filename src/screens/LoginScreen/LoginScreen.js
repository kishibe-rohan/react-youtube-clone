import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./_loginscreen.scss";

import { login } from "../../redux/actions/authActions";
import { useHistory } from "react-router-dom";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const accessToken = useSelector((state) => state.auth.accessToken);

  const handleLogin = () => {
    dispatch(login());
  };

  useEffect(() => {
    if (accessToken) history.push("/");
  }, [accessToken, history]);

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
