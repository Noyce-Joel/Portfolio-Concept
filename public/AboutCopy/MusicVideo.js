import React from "react";

function MusicVideo({srcUrl}) {
  return (
    <div className="music-video">
      <iframe
        className="music"
        width="auto"
        height="auto"
        src={srcUrl}
        title="YouTube video player"
        frameborder="0"
        
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default MusicVideo;



