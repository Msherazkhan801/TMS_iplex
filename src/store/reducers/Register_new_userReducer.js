// import { registerConst } from '../actions/constant'
const initialState = {
  new_reg_user: {},
    Register_new_user: false,
    Register_new_userError: '',
  }
  const Register_new_userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'USER_REGISTRE_SUCCES':
        return {
          ...state,
          new_reg_user: action.payload,
          Register_new_user: true,
        }
      case 'USER_REGISTRE_ERROR':
        return {
          ...state,
          new_reg_userError: action.payload,
          Register_new_user: false,
        }
      default:
        return state
    }
  }
  export default Register_new_userReducer;
  