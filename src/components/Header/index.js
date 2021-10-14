import React from 'react'
import styles from "./Header.module.css"
import logo from "../../assets/images/logo.png"
import { useHistory } from 'react-router';
import {Link} from "react-router-dom"
function Header() {
    // const [search,setsearch]=useState("");
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
                    <li> <Link to="/dashboard"><button className={styles.Adminbtn}>Admin</button></Link></li>
                    <li> <Link to="/manager"><button className={styles.Managerbtn}>Manager</button></Link></li>
                    <li><Link to="/createuserlog"><button className={styles.Userbtn}>User</button></Link></li>
                    <li><button className={styles.btn_header} onClick={Logout}>Logout</button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
