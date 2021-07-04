import React from "react";
import "./_loginscreen.scss";

const LoginScreen = () => {
  return (
    <div className="login">
      <div className="login_container">
        <img src="https://pngimg.com/uploads/youtube/youtube_PNG2.png" />
        <button>Sign In With Google</button>
        <p>
          ReacTube | An YouTube clone made with React leveraging the YouTube API
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;
