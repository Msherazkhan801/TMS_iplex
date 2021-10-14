import React, { useEffect } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useDispatch, useSelector } from 'react-redux'
import View_userAction from '../../../../store/actions/View_userAction'
import { Link } from "react-router-dom";
import styles from "../View_User/View_user.module.css"
import Deletuser from "../../../../store/actions/Delet_user_Action"
import Header_manager from '../../../Header/managerheader/Header_manager';
function View_user() {
  let dispatch = useDispatch()
  const getUser = useSelector((state) => state.View_userReducer.View_user)
  let token = localStorage.getItem("token")
  // let role=localStorage.getItem("roles[0].name")
  useEffect(() => {
    dispatch(View_userAction())
  }, [])
  return (
    <div className={styles.main_form_body}>
      <Header_manager/>
  <h2 className={styles.h2}> User Detail</h2>
     <hr/>
      <table className={styles.table}>
        <tr className={styles.tr}>
          <th className={styles.th}>S.No</th>
          <th className={styles.th}>FirstName</th>
          <th className={styles.th}>LastName</th>
          <th className={styles.th}>Email</th>
          <th className={styles.th}>User-Type</th>
          <th className={styles.th1}>Action</th>
        </tr>
        <tbody>
          {
            getUser?.map((list, index) => {
         
              return (
                <tr key={index}>
                  <td className={styles.table_mange}>{list.id}</td>
                  <td className={styles.table_mange}>{list.firstName}</td>
                  <td className={styles.table_mange}>{list.lastName}</td>
                  <td className={styles.table_mange}>{list.email}</td>
                  <td className={styles.table_mange}>{list?.roles[0]?.name}</td>
                  <td className={styles.table_btn}>
                    <Link to={`/edituser/${list.id}`} > 
                     <button className={styles.btn}><i class="bi bi-pencil-square"></i>
                      edit</button>
                      </Link>
                    
                    <button className={styles.btn1}
                      onClick={() => dispatch(Deletuser(list.id, token))}
                    ><i class="bi bi-trash"></i>
                      delet</button>
                  </td>

                </tr>
              )

            })
          }
        </tbody>
      </table>

     <div className={styles.pagination}>
       <div className={styles.icon_mr}>
     <i className="bi bi-arrow-left-circle-fill "></i>
      <i className="bi bi-arrow-right-circle-fill"></i></div></div>
    </div>
  )
}

export default View_user
