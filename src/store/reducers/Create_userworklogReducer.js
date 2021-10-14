const initialState = {
    Userworklog:[],
    craet_Userworklog: false,
      userError: '',
    }
    const Create_UserworklogReducer = (state = initialState, action) => {
      switch (action.type) {
        case 'USER_WORKLOG_CREATE_SUCCES':
          return {
            ...state,
            Userworklog: action.payload,
            craet_Userworklog: true,
          }
        case 'USER_WORKLOG_CREATE_ERROR':
          return {
            ...state,
           userError: action.payload,
            craet_Userworklog: false,
          }
        default:
          return state
      }
    }
    export default Create_UserworklogReducer;
    