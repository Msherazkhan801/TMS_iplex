import {Edit_userlog} from "../actions/constant"
// import {  useHistory } from 'react-router-dom';

 const Updatelogaction = (id,payload) => (dispatch) =>{
    const userId=localStorage.getItem("userId")
    const token=localStorage.getItem("token")
    fetch(`http://34.210.129.167/api/user/${userId}/work-logs/${id}`, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${token}`
    
    },
    })
    .then((json)=> {
        
       
    })


}


export const edit_User = (user) =>{
    return{
        type: Edit_userlog.EDIT_USER_LOG,
      
    }
}



export default Updatelogaction;