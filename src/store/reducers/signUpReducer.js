// import {signupConst} from "../actions/constant"
const initialState = {
    curentUser: {},
    signup: false,
    signupError: '',
  }
  const SignupReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'USER_SIGNUP_SUCCES':
        return {
          ...state,
          curentUser: action.payload,
          signup: true,
        }
      case 'USER_SIGNUP_ERROR':
        return {
          ...state,
          signupError: action.payload,
          signup: false,
        }
      default:
        return state
    }
  }
  export default SignupReducer
  