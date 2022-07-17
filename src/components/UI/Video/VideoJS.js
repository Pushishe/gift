import React from 'react';
import './VideoJS.css'
import VideoPlayer from 'react-video-js-player'

const VideoJS = (props) => {
  const videoSrc = props.videoSrc;

  return (
    <div className='video'>
      <VideoPlayer
        src={videoSrc}
      />
    </div>
  );
}

export default VideoJS;
