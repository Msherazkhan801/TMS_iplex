import React from 'react'
import Header from '../Header'
import styles from './dashboard.module.css'
import DetailCard from './AdminDetailCard'
const Dashboard = () => {
  return (
    <section className={styles.dashBoard}>
      <div className={styles.dashBoard_wraper}>
        <Header />
        <div className={styles.dashboard_body}>
        <h1>Admin Dashboard</h1>
        <DetailCard/>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
