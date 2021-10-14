import axios from 'axios'
 const Get_userworklogAction = (data) => (dispatch) => {
    const userId = localStorage.getItem('userId')
  axios({
    method: 'GET',
    url: `http://34.210.129.167/api/user/${userId}/work-logs`,
    data:data,
    headers: {
        'Authorization': `Bearer  ${localStorage.getItem('token')}` 
    }
   
  })
    .then(function (response) {
  
      dispatch({
        type: 'USER_GETREQUEST_SUCCES',
        payload: response.data.workLogs.data,
      })
    
    })
   
}
export default Get_userworklogAction;