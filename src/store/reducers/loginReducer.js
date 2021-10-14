// import { loginConst } from '../actions/constant'
const initialState = {
  curentUser: {},
  login: false,
  loginError: '',

}
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGIN_SUCCES':
      return {
        ...state,
        curentUser: action.payload,
        login: true,
  
      }
     
    case 'USER_LOGIN_ERROR':
      return {
        ...state,
        loginError: action.payload,
        login: false,
      }
    default:
      return state
  }
}
export default loginReducer
