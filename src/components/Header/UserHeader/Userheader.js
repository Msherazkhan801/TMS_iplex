import React from 'react'
import styles from "../UserHeader/Userheader.module.css"
import { useHistory } from 'react-router'
import logo from "../../../assets/images/logo.png"
function Userheader() {
    const history = useHistory();
    const Logout = () => {
        localStorage.removeItem("token");
      localStorage.clear();
        history.push("/")
    }



    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div>  <img src={logo} alt="logo" className={styles.logo} /></div>
                <ul className={styles.ul}>
                
                    <li><button className={styles.btn_header} onClick={Logout}>Logout</button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Userheader;
