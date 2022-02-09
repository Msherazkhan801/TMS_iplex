import axios from 'axios'
 const Create_UserworklogAction = (data) =>  (dispatch) => {
axios({
  method: 'post',
  url: 'http://34.210.129.167/api/work-logs',
  data,
  headers: {
    'Authorization': `Bearer  ${localStorage.getItem('token')}` 
  }
   
  })
 .then(function (response) {
      const data = response.data
      alert(" Worklog Create successfully")
    console.log(data)
    
   })
   .catch(function ( {response} ) {

      if (response.status === 422) {
        dispatch({
          type: 'USER_WORKLOG_CREATE_SUCCES',
          payload: response.data,
        })

      }
      if (response.status === 403) {
          dispatch({
          type: 'USER_WORKLOG_CREATE_ERROR',
          payload: response.data.message,
        })
      
      }
      
    })
}
export default Create_UserworklogAction;