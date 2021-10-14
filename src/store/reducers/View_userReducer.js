const initialState = {
    View_user: []
  }
  const View_userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'USER_GETREQUEST_SUCCES':
        return {
          ...state,
          View_user: action.payload,
        }
      default:
        return state
    }
  }
  export default View_userReducer;
  