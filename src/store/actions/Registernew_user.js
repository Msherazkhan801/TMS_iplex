// import { registerConst } from './constant'
import axios from 'axios'
 const Registernew_user = (data) => (dispatch) => {
   let token=localStorage.getItem('token');
  //  console.log("token",token)
  axios({
    method: 'POST',
    url: 'http://34.210.129.167/api/users',
    data: data,
    headers: {
      "Authorization" : `Bearer ${token}`
    }
  })
    .then(function (response) {
      const data = response.data
      alert("Registered User Successfully");
      console.log("test",data)
      //  console.log("token",token)
    
    
    
    })
    .catch(function ({ response }) {
      if (response.status === 422) {
        alert(response.data[0])
        dispatch({
          type: 'USER_REGISTER_SUCCES',
          payload: response.data,
        })
        
      }
      if (response.status === 403) {
        alert(response.data.message)
        dispatch({
          type: 'USER_REGISTER_ERROR',
          payload: response.data.message,
        })
       
      }
      
    })
}
export default Registernew_user;