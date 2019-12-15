import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.css';

import { SearchVideo } from '../../store/actions/SearchVideo';

class SearchBar extends Component {
  constructor(props){
    super(props)
    this.props.searchVideo('redux')
  }


  searchTerm = ({ keyCode, target }) => {
    if (keyCode === 13){
      const term = target.value
      this.props.searchVideo(term);
    }
  }

  render() {
    return (
      <div className="search-bar">
          <input 
            className="input"
            placeholder="Search...." 
            onKeyDown={ev => this.searchTerm(ev)}
          />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchVideo: term => dispatch(SearchVideo(term))
  }
}
 
export default connect(null, mapDispatchToProps)(SearchBar);