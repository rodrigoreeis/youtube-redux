import React, { Component, Fragment } from 'react';
import { connect }  from 'react-redux';
import shortid from 'shortid';
import './styles.css';

import { PlayVideo } from '../../store/actions/PlayVideo';


class VideoList extends Component {

  renderVideo(video){
    return(
      <Fragment key={shortid.generate()}>
        <li 
          className="item"
          onClick={() => this.props.play(video)}
        >
          <figure className="image">
            <img 
              src={video.snippet.thumbnails.medium.url} 
              alt={video.snippet.title} 
            />
          </figure>  
          <div className="content">
            <h3 className="title">{video.snippet.title}</h3>
            <span className="channel">{video.snippet.channelTitle}</span>
          </div>
        </li>  
      </Fragment>
    )
  }

  render(){
    return ( 
      <div className="container-video">
        <ul className="list">
           {
              this.props.videos.map(video => (
                this.renderVideo(video) 
              ))
           }
        </ul>      
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    play: video => dispatch(PlayVideo(video))
  }
}

const mapStateToProps = state => {
  return {
    videos: state.Search.videos,
    loading: state.Search.loading,
    error: state.Search.error,
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(VideoList);