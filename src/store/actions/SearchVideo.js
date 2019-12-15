import youtubeSearch from 'youtube-api-v3-search';
import YTApi from '../../api';

const API_KEY = YTApi;

export const initSearchVideo = () => {
  return {
    type: 'INIT_SEARCH_VIDEO',
    loading: true,
    error: false
  }
}

export const successSearchVideo = videos => {
  return {
    type: 'SUCCESS_SEARCH_VIDEO',
    videos,
    loading: false,
    error: false
  }
}

export const ErrorSearchVideo = () => {
  return {
    type: 'ERROR_SEARCH_VIDEO',
    loading: false,
    error: true
  }
}

export const SearchVideo = term => {
  return dispatch => {
    dispatch(initSearchVideo())
    youtubeSearch(API_KEY, {q: term})
      .then(data => dispatch(successSearchVideo(data.items)))
      .catch(() => dispatch(ErrorSearchVideo()))
  }
}