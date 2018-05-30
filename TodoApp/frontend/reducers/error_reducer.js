import {CLEAR_ERRORS, RECEIVE_ERRORS} from '../actions/error_actions';
import {merge} from 'lodash';

const initialState = [];

const errorReducer = (state = initialState, action) => {
  Object.freeze(state);
  let stateCopy = [];
  switch (action.type){
    case CLEAR_ERRORS:
      return [];
    case RECEIVE_ERRORS:
      stateCopy = merge([], initialState);
      JSON.parse(action.errors).map(err => stateCopy.push(err)); 
      return stateCopy;
    default: return state;
  }
};

export default errorReducer;
