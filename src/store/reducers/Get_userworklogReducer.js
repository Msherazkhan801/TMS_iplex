const initialState = {
    view_userlog:[]
  }
  const Get_userworklogReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'USER_GETREQUEST_SUCCES':
        return {
          ...state,
          view_userlog: action.payload,
        }
      default:
        return state
    }
  }
  export default Get_userworklogReducer;
  