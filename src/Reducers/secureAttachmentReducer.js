import {
  FETCH_SECURE_ATTACHMENT_MILESTONE,
  EDIT_SECURE_ATTACHMENT_MILESTONE,
  FINISHED_ASSESSTMENT_SECURE_ATTACHMENT
} from '../Types';

const INITIALSTATE = {
  finished_assesstment: false,
  answers: 0,
}

export default (state = INITIALSTATE, action) => {
  switch (action.type) {
    case FETCH_SECURE_ATTACHMENT_MILESTONE:
      return {...state, main_info: action.payload.main_info, milestones: action.payload.milestones }
    case EDIT_SECURE_ATTACHMENT_MILESTONE:
      // localStorage.secure_attachment = JSON.stringify(action.payload.milestones);
      let nState = { ...state };
      nState.milestones = action.payload.milestones
      nState.answers = action.payload.answers
      return {...nState}
    case FINISHED_ASSESSTMENT_SECURE_ATTACHMENT:
      let newState = {...state};
      newState.finished_assesstment = action.payload
      return { ...newState }
    default:
      return state;
  }
}