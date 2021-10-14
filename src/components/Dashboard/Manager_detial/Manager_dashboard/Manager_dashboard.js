import React from 'react'
import Header_manager from "../../../Header/managerheader/Header_manager"
import styles from '../Manager_dashboard/Manager_dashboard.module.css'
import Manger_detail from '../Manger_detail'
import avater from "../../../../assets/images/avatar.png"

const ManagerDashboard = () => {
 

return (

 <section className={styles.dashBoard}>
      <div className={styles.dashBoard_wraper}>
        <Header_manager />
        <h2 className={styles.h2}> User Log Detail</h2>
        <Manger_detail/>
        <div className={styles.flip_card}>
  <div className={styles.flip_card_inner}>
    <div className={styles.flip_card_front}>
      <img src={avater} alt="avter" className={styles.imgavter}/>
    </div>
    <div className={styles.flip_card_back}>
      <h1>Manager</h1> 
      <p>Creat User click on button </p> 
      <p>View User click on button</p>
    </div>
  </div>
</div>
      </div>
    </section>
  )
}

export default ManagerDashboard
