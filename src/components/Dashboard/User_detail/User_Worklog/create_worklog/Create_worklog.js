import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import styles from "../create_worklog/Create_worklog.module.css"
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import Create_UserworklogAction from '../../../../../store/actions/Create_UserworklogAction'
import Userheader from '../../../../Header/UserHeader/Userheader'
const Create_worklog=()=> {
    const history=useHistory()
  let dispatch = useDispatch()
    const [Userworklog, setUserworklog] = useState({
        logDate: "",
        hours: "",
        description: ""
     })
     let data={logDate:"", hours:"", description:"" }
     const dateHandle = (e) => {
        e.preventDefault();
        return setUserworklog({ ...Userworklog, logDate: e.target.value })
      }
      const timeHandle = (e) => {
        e.preventDefault();
        return setUserworklog({ ...Userworklog, hours: e.target.value })
      }
      const discriptionHandle = (e) => {
        e.preventDefault();
        return setUserworklog({ ...Userworklog, description: e.target.value })
      }
      const Addworklog=()=>{
        if (data) {
         dispatch(Create_UserworklogAction( Userworklog,history))
        } else {
          alert('please input required feild')
        }
      } 
    return (
        <div>
            {/* <div className={styles.logheader}><h1>User Work Log</h1> </div> */}
            <Userheader/>
            <div className={styles.user_detail_section}>
      <div className={styles.form}>
        <div className={styles.loginWrap}>
          <form>
            <span>User WorkLog</span>
            <input
              type="date"
              placeholder="Enter work date"
              onChange={dateHandle}
            ></input>
            <input
              type="number"
              placeholder="Enter time in Hours"
              onChange={timeHandle}
            ></input>
            <input
              type="text"
              placeholder="Discription"
              onChange={discriptionHandle}
            ></input>
          </form>
          <div className={styles.btn_wraper}>
          <button className={styles.subBtn}
            onClick={Addworklog}
          > ADD</button>
         <Link to="userdetail"><button className={styles.Btn}> View Record </button></Link> 
          </div>
        </div>
      </div>
      </div>
    </div>
      
    )
}

export default Create_worklog

