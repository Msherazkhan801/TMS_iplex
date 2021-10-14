import { signupConst } from './constant'
import axios from 'axios'
 const SignUpuser = (data, history) => (dispatch) => {
  axios({
    method: 'POST',
    url: 'http://34.210.129.167/api/register',
    data: data,
   
  })
    .then(function (response) {
      const data = response.data
      localStorage.setItem('token', data.token)
      localStorage.setItem('userId', data.user.id)
      dispatch({ type: signupConst.USER_SIGNUP_SUCCES, payload: data })
      history.push('/')
       alert("Registered User Successfully");
    
    })
    .catch(function ({ response }) {
      if (response.status === 422) {
        alert(response.data[0])
        dispatch({
          type: 'USER_SIGNUP_SUCCES',
          payload: response.data,
        })
     
      }
      if (response.status === 403) {
        alert(response.data.message)
        dispatch({
          type: 'USER_SIGNUP_ERROR',
          payload: response.data.message,
        })
        
      }
      
    })
}
export default SignUpuser;