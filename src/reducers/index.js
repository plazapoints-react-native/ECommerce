export default (state = {}, action) =>{

  switch (action.type) {
  case 'NAME':
  return {
      ...state,
      name: action.data
    };
  case 'EMAIL':
    return {
      ...state,
      email: action.data
    };
  default:
    return state;
  }

}