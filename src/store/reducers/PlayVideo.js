const INITIAL_STATE = {
  video: {}
}

export default function PlayVideo(state = INITIAL_STATE, action){
  if(action.type === 'PLAY_VIDEO'){
    return {
      video: action.video
    }
  } else {
    return state;
  }
}