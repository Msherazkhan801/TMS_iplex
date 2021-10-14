import axios from 'axios'
const Deletuser = (id, token) => (dispatch) => {

  axios({
    url: `http://34.210.129.167/api/users/${id}`,
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`
    },
  }).then(function (response) {
    const data = response.data
    console.log("test",data)


  })
    .catch(function ({ response }) {
      if (response.status === 422) {
        alert(response.data[0])
        dispatch({
          type: 'DELET_SUCCES',
          payload: response.data,
        })

      }
      if (response.status === 403) {
        alert(response.data.message)
        dispatch({
          type: 'DELET_ERROR',
          payload: response.data.message,
        })

      }

    })
}
export default Deletuser