import { combineReducers } from 'redux'

import Search from './Search';
import PlayVideo from './PlayVideo';

const rootReducer = combineReducers({
  Search,
  PlayVideo
})

export default rootReducer;