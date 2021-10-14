// import { loginConst } from './constant'
import axios from 'axios'
export const LoginUser = (data, history) =>  (dispatch) => {
 axios({
    method: 'POST',
    url: 'http://34.210.129.167/api/login',
     data,
  
  }) 
    .then( (response)=> {
      const data = response.data
      localStorage.setItem('token', data.token)
      localStorage.setItem('userId', data.user.id)
      // localStorage.setItem('role',data.roles[0].name)
      if(data.user.roles[0].name==="admin")
      {
        history.push("/dashboard")
      }
       if(data.user.roles[0].name==="manager"){
        history.push("/manager")
      }
       if(data.user.roles[0].name==="user"){
        history.push("/createuserlog")
      }
       

   
    
    
    })

 
} 
