import React from 'react'
import styles from "../User_reg_form/Register_new_user.module.css"
import { useState } from "react"
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import Registernew_user from '../../../../store/actions/Registernew_user'
import Header_manager from '../../../Header/managerheader/Header_manager'
import { Link } from 'react-router-dom'
const Registre_new_user=()=> {
  const history=useHistory()
  let dispatch = useDispatch()
    const [newUser, setNewUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        password_confirmation: "",
        UserType:"User"
      
        
      })
      let data={ firstName: "",lastName: "", email: "", password: "",confirmPassword: ""}
      const fNameHandler = (e) => {
        e.preventDefault();
        return setNewUser({ ...newUser, firstName: e.target.value })
      }
      const lastNameHandler = (e) => {
        e.preventDefault();
        return setNewUser({ ...newUser, lastName: e.target.value })
      }
      const emailHandler = (e) => {
        e.preventDefault();
        return setNewUser({ ...newUser, email: e.target.value })
      }
      const passwordHandler = (e) => {
        e.preventDefault();
        return setNewUser({ ...newUser, password: e.target.value })
      }
      const confirmPasswordHandler = (e) => {
        e.preventDefault();
        return setNewUser({ ...newUser, password_confirmation : e.target.value })
      }
    
const regisernewuser=()=>{
  if (data) {
   dispatch(Registernew_user(newUser,history ))
  } else {
    alert('please input required feild')
  }
} 

    return (
    
        <div className={styles.signUpPage}>
          <Header_manager/>
        <div className={styles.signUpWrap}>
          <h2>Registeration Form</h2>
          <form>
            <input
              type="text"
              placeholder="First Name"
              onChange={fNameHandler}
            ></input>
            <input
              type="text"
              placeholder="Last Name"
              onChange={lastNameHandler}
            ></input>
            <input
              type="text"
              placeholder="Enter Email"
              onChange={emailHandler}
            ></input>
            <input
              type="password"
              placeholder="Enter Password"
              onChange={passwordHandler}
            ></input>
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={confirmPasswordHandler}
            ></input>
            <button type="button"  onClick={regisernewuser}>
              Register
            </button>
           <Link to="/viewuser"> <button className={styles.btn}>View User</button></Link>
          </form>
        </div>
      </div>
    )
  }
  

export default Registre_new_user;
