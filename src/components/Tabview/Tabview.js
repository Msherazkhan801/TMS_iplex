import React,{useState} from "react";
import Login from "../../Pages/Login/index";
import SignUp from "../../Pages/SignUp/index"
import styles from "../Tabview/Tabview.module.css"
import logo from "../../assets/images/logo.png"
const Tabviwer=()=>{
  const [btn, setbtn] = useState('Login')
 const LoginClickHander = () =>{
        setbtn("Login")
    }
    const SignupClickHander = () =>{
        setbtn("signup")
    }
    return (
      <div className={styles.container}>
          <div className={styles.nav}>
              <img src={logo} alt="logo" className={styles.image}/>
           <button className={styles.btn1} onClick={()=>{LoginClickHander()}}> Login  </button>
           <button className={styles.btn}onClick={()=>{SignupClickHander()}}> Sign Up  </button>
          <div></div>
              
          {
                           ( ()=>{
                                if(btn==='Login'){
                                    return <Login/>
                                }
                                else if(btn==='signup')
                                {
                                    return <SignUp/>
                                }
                                
                            })()
                        }
              
              </div> 
      </div>
    )
}
export default Tabviwer;