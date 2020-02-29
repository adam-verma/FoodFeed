import React from "react";

function VideoPlayer({ children }) {
  return (
    <video id="myplayer" className="video-js vjs-default-skin" poster="" controls preload="auto">
    <source src="http://www.domain.com/live_manifest.m3u8" type="application/x-mpegURL"
    />
    </video>
  );
}

export default VideoPlayer;