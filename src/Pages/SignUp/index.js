import React from 'react'
import styles from './signUp.module.css'
import { useState } from 'react'
import { useHistory } from 'react-router'
import SignUpuser from "../../store/actions/signUpAction"
import { useDispatch } from 'react-redux'
const SignUp = () => {
  const history=useHistory()
  let dispatch = useDispatch()
  const [Createuser, setCreateuser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password_confirmation: "",
    
  })
  let data={ firstName:"",lastName:"",email:"",password:"",password_confirmation:""}
  const fNameHandler = (e) => {
    e.preventDefault();
    return setCreateuser({ ...Createuser, firstName: e.target.value })
  }
  const lastNameHandler = (e) => {
    e.preventDefault();
    return setCreateuser({ ...Createuser, lastName: e.target.value })
  }
  const emailHandler = (e) => {
    e.preventDefault();
    return setCreateuser({ ...Createuser, email: e.target.value })
  }
  const passwordHandler = (e) => {
    e.preventDefault();
    return setCreateuser({ ...Createuser, password: e.target.value })
  }
  const password_confirmationHandler = (e) => {
    e.preventDefault();
    return setCreateuser({ ...Createuser, password_confirmation: e.target.value })
  }
 
  const signup = () => {
    if (data) {
      dispatch(SignUpuser(Createuser, history))
    } else {
      alert('please input required feild')
    }
   
  
    
  }

  
  return (
    <div className={styles.signUpPage}>
      <div className={styles.signUpWrap}>
        <h2><u>Sign Up Form</u></h2>
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
            onChange={password_confirmationHandler}
          ></input>
          <button type="button" onClick={signup}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
