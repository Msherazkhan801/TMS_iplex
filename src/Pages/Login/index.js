import React from 'react'
import styles from './login.module.css'
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { LoginUser } from '../../store/actions/loginAction'
const Login = () => {
  let dispatch = useDispatch()
  let history = useHistory()
  const [user, setUser] = useState({ email: '', password: '' })
  // const [data, setData] = useState([])
  // const state = useSelector((state) => state.loginReducer.curentUser)
  const changeEmailHandler = (e) => {
    return setUser({ ...user, email: e.target.value })
  }
  const signIn = () => {
    if (user.email && user.password) {
      dispatch(LoginUser(user, history))
    } else {
      alert('please input required feild')
    }
  }
  const changePasswordHandler = (e) => {
    return setUser({ ...user, password: e.target.value })
  }

  return (
    <section className={styles.loginPage}>
      <div className={styles.container}>
        <div className={styles.loginWrap}>
          <form>
            <span>Sign In</span>
            <input
              type="email"
              placeholder="Enter your Email"
              onChange={changeEmailHandler}
            ></input>
             <input
              type="password"
              placeholder="Enter Your Password"
              onChange={changePasswordHandler}
            ></input>
          </form>
          <button type="submit" className={styles.signInBtn} onClick={signIn}>
            Sign In
          </button>
        </div>

        <div className={styles.SignUp_wraper}>
           <h2 className={styles.sheet_heading}><u>Sign Up</u></h2>
           <p className={styles.sheet_p}>if you dont have any account first<br/> Sign Up and then login forSign Up  <br/>Click Sign Up Button</p>
        
        </div>

      </div>
    </section>
  )
}

export default Login
