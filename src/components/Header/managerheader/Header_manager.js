import React from 'react'
import styles from "../managerheader/Header_manager.module.css"
import { useHistory } from 'react-router'
import {Link} from "react-router-dom"
import logo from "../../../assets/images/logo.png"
import pic from "../../../assets/images/avatar.png"
const  Header_manager=() =>{
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
                    <li><img src={pic} alt="role" className={styles.picrole}/></li>
                    <li> <Link to="/manager"><button className={styles.Managerbtn}>Manager</button></Link></li>
                    <li><Link to="/createuserlog"><button className={styles.Userbtn}>User</button></Link></li>
                    <li><button className={styles.btn_header} onClick={Logout}>Logout</button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header_manager;
