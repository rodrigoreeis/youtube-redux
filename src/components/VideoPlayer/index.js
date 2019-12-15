import React from 'react';
import { connect } from 'react-redux';
import { Embed } from 'semantic-ui-react';
import './styles.css';

const VideoPlayer = props => {
  const handleClick = () => {
    console.log(props);
  }
  return ( 
    <div className="video-player" onClick={handleClick}>
      {
        !props.video.id && (
          <div className="advertisement">
            <p>Olha um video para reproduzir</p>
          </div>
        )
      }
      {
        props.video.id && (
          <div className="advertisement">
            <Embed id={props.video.id.videoId} 
              source='youtube'
            />
            <h2>{props.video.snippet.title}</h2>
            <p>{props.video.snippet.description}</p>
          </div>
        )
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    video: state.PlayVideo.video 
  }
}

export default connect(mapStateToProps, null)(VideoPlayer);