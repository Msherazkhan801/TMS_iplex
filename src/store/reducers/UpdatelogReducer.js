// import {Updatelog} from "../actions/constant"
const initialState = {
    UpdatelogaReducer : []
}
const UpdatelogaReducer = (state=initialState, actions) =>{
    switch(actions.type){
        
        case  Edit_userlog.EDIT_USER_LOG:
            return{
                ...state,
                Updatelog:actions.user
            }
         default:
             return state;   
    }
}

export default UpdatelogaReducer;
