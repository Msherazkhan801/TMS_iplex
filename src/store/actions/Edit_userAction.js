import {Edit_user} from "../actions/constant"
 const Edit_userAction = (token, id, payload, history) => (dispatch) =>{
fetch(`http://34.210.129.167/api/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${token}`
    
    },
    })
    .then((json)=> {
      
        history.push('/viewuser');
    })
    .catch((err)=>dispatch(edit_UserErr(err)))

}


export const edit_User = (user) =>{
    return{
        type: Edit_user.EDIT_USER,
        user
    }
}
// const update_User = (users) =>{
//     return{
//         type: Edit_user.EDIT_USER,
//         payload: users.users.data
//     }
// }
const edit_UserErr = () =>{
    return{
        type: Edit_user.EDIT_USERERR,
    }
}

export default Edit_userAction;