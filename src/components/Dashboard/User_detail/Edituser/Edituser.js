import React ,{useState,useEffect} from 'react';
import styles from '../Edituser/Edituser.module.css';
import { useDispatch,useSelector } from 'react-redux';
import  Edit_userAction  from '../../../../store/actions/Edit_userAction';
import {  useHistory, useParams } from 'react-router-dom';
import View_userAction from '../../../../store/actions/View_userAction'
// import Edit_userAction from '../../../../store/actions/Edit_userAction'

const EditUser = () => {
  const {id} = useParams();
  let token=localStorage.getItem("token")
  const editData = useSelector((state)=>state.EditReducer.editData)
 const getUser = useSelector((state) => state.View_userReducer.View_user)
   const user = getUser.find((item) => item.id === parseInt(id))
  // const [id_user, setuser_id] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
    const dispatch = useDispatch()
    const history = useHistory()
   
  useEffect(()=>{
    if(user){
      setFirstName(user.firstName)
      setLastName(user.lastName)
      setEmail(user.email)
       }
      },[getUser,id])
      
      
      useEffect(()=> {
        if (!getUser.length)
        dispatch(View_userAction())
      }, [getUser])
      
      const data = {
        firstName,
        lastName,
        email,
      }
     
    return (
      <div className="container">
      <div>
            <div className={styles.formWrap}>
                <h3 className="mb-5">UPDATE REGLAR USER</h3>
            <div className="form-group mb-3">
                <input type="text"
                className={`form-control ${styles.inputField}`}
                placeholder="FirstName"
                value ={firstName}
                onChange = {(e)=>setFirstName(e.target.value)}
              />
         
              </div>
            <div className="form-group mb-3">
                <input type="text"
                className={`form-control ${styles.inputField}`}
                placeholder="LastName"
                value ={lastName}
                onChange = {(e)=>setLastName(e.target.value)}
              />
        
              </div>
            <div className="form-group mb-3">
                <input type="text"
                className={`form-control ${styles.inputField}`}
                placeholder="Email"
                value = {email}
                onChange = {(e)=>setEmail(e.target.value)}
              />
            
              </div>
            <div className="btns d-flex">
               
                <button className="btn btn-success mr-3"
                    onClick={()=> {
                      dispatch(Edit_userAction(token, id, data, history))
                    }
                      }
                    >
                        Update
                    </button>
                   
                </div>
            </div>
      </div>

    </div>
    )
}

export default EditUser
