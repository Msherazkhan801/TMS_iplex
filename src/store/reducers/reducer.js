import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import SignupReducer from './signUpReducer'
import View_userReducer from "./View_userReducer"
import Register_new_userReducer from "./Register_new_userReducer"
import Create_UserworklogReducer from "./Create_userworklogReducer"
import EditReducer from './Edit_userReducer'
import Get_userworklogReducer from '../reducers/Get_userworklogReducer'
const rootReducer = combineReducers({
  loginReducer,
  SignupReducer,
  Register_new_userReducer,
  View_userReducer,
  Create_UserworklogReducer,
  Get_userworklogReducer,
  EditReducer,
})

export default rootReducer
