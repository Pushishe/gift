import React from 'react';
import './AudioJS.css'
import ReactAudioPlayer from 'react-audio-player';

const AudioJS = (props) => {
  const audio = props.audio

  return (
    <div>
      <ReactAudioPlayer 
        src={audio}
        controls
      />
    </div>
  );
}

export default AudioJS;
