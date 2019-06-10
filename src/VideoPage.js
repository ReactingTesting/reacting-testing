import React from "react";
import "./VideoPage.css";

export default function VideoPage() {
  return (
    <div className="youtube-page-container">
      <div className="info-big-title">Videos</div>
      <div className="info-title youtube-text">React</div>
      <div className="info-text youtube-text">
        React video #1
      </div>
      <iframe
        title="react-vid-1"
        className="video-frame"
        src="https://www.youtube.com/embed/MhkGQAoc7bc"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen="allowFullScreen"
      />

      <div className="info-text youtube-text">
      React video #2
      </div>
      <iframe
        title="ctm-the-musical"
        className="video-frame"
        src="https://www.youtube.com/embed/Ke90Tje7VS0"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen="allowFullScreen"
      />

    </div>
  );
}
