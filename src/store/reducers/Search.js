const INITIAL_STATE = {
    videos: [],
    loading: false,
    error: false
}


const Search = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'INIT_SEARCH_VIDEO':
      return {
        videos: [],
        loading: true,
        error: false
      }
    
    case 'SUCCESS_SEARCH_VIDEO':
      return {
        videos: action.videos,
        loading: false,
        error: false
      }

    case 'ErrorSearchVideo': 
    return {
      videos: [],
      loading: false,
      error: true
    }
    default: return state;
  }
}

export default Search;