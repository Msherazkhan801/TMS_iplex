import {Edit_user} from "../actions/constant"
const initialState = {
    editData : []
}
const EditReducer = (state=initialState, actions) =>{
    switch(actions.type){
        
        case Edit_user.EDIT_USER:
            return{
                ...state,
                editData:actions.user
            }
         default:
             return state;   
    }
}

export default EditReducer;
