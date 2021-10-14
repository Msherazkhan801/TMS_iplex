import axios from 'axios'
export const FilterdateAction = (startDate,endDate) => (dispatch) => {
  axios({
    method: 'GET',
    url: `http://34.210.129.167/api/work-logs/${startDate}/${endDate}`,
  
    headers: {
        'Authorization': `Bearer  ${localStorage.getItem('token')}` 
    }
   
  })
    .then(function (response) {
      dispatch({
        type: 'USER_GETREQUEST_SUCCES',
        payload: response.data.workLogs
      })
    
    })

}