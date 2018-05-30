export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export function receiveErrors(errors){
  return {type: RECEIVE_ERRORS, errors: errors.responseText};
}

export function clearErrors(errors){
  return {type: CLEAR_ERRORS};
}
