import axios from 'axios'
 const View_userAction = (data) => (dispatch) => {
   let token=localStorage.getItem("token")
  axios({
    method: 'GET',
    url: 'http://34.210.129.167/api/users',
    data: data,
    headers: {
      'Authorization': `Bearer  ${token}` 
    }
   
  })
    .then(function (response) {
      const data = response.data.users.data
      console.log("test",data)
   
      dispatch({
        type: 'USER_GETREQUEST_SUCCES',
        payload: response.data.users.data,
      })
    
    })
   
}
export default View_userAction;