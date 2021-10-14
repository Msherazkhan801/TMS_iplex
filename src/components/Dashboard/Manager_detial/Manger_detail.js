import React,{ useState } from 'react'
import styles from "../Manager_detial/Manger_detail.module.css"
import { Link} from "react-router-dom";
const Manger_detail = () => {
  return (
      <>
        <div className={styles.card_manger}>
        <Link to="/registeruser"> <button className={styles.btn_form} >Creat New User</button></Link>
        <Link to="/viewuser"><button className={styles.btn} >View User</button></Link>
        </div>
        <hr/>
        <div className={styles.txt}> <h1>Click on Button what action you want</h1>
          <p>   Manager can Manage all User Record and also create user</p>
          </div>
        </>
        )
}


export default Manger_detail
