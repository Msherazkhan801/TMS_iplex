import React, { useEffect,useState } from 'react'
import Updatelog from '../User_detail/User_Worklog/Updatelog/Updatelog'
import { useDispatch, useSelector } from 'react-redux'
import styles from "../User_detail/User.module.css"
import Get_userworklogAction from "../../../store/actions/Get_userwoklogAction"
import {FilterdateAction} from "../../../store/actions/FilterdateAction"
import Userheader from '../../Header/UserHeader/Userheader'
const User_detail = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState(null)
  const[startdate, setstartdate]=useState("")
  const[enddate, setenddate]=useState("")

  let dispatch = useDispatch()
  const getUserlog = useSelector((state) => state.Get_userworklogReducer.view_userlog) /*missing arr*/
  // let token = localStorage.getItem("token")
  useEffect(() => {
    dispatch(Get_userworklogAction())
    // dispatch(Get_userworklogAction())
  }, [modalOpen])

  return (
    <div> <Userheader />
      <div className={styles.main_form_body}>
      <h2 className={styles.h2}> User Log Detail</h2>
     <div className={styles.searchbar}>
        <div className={styles.search_div}>Search From:
        <input placeholder="Search.." type="date" className={styles.search} 
        value={startdate}
        onChange={(e)=> setstartdate(e.target.value)}  
        />
       To:
       <input placeholder="Search.." type="date" className={styles.search} 
       value={enddate}
        onChange={(e)=> setenddate(e.target.value)}
        />
       <button className={styles.searchbtn} 
       onClick={()=>dispatch(FilterdateAction(startdate, enddate ))}
       >search</button>
        </div></div>
        <hr />
        <table className={styles.table}>
          <tr className={styles.tr}>
            <th className={styles.th}>Date</th>
            <th className={styles.th}>Time</th>
            <th className={styles.th}>Discription</th>
            <th className={styles.th1}>Action</th>
          </tr>
          <tbody>
          {
            getUserlog?.map((list, index) => {
              return (
                <tr key={index}>
                  
         <td className={styles.table_mange}>{list.log_date}</td>
            <td  key={index}className={list.hours < 8 ? `${styles.table_mange_red}` : `${styles.table_mange}` }>{list.hours}</td>
            <td className={styles.table_mange}>{list.description}</td>
            <td className={styles.table_btn}>
              {/* ////////////////////////////////////// */}
              <button
        className={styles.btn}
        onClick={() => {
          setData(list)
          setModalOpen(true);
        }}
      ><i class="bi bi-pencil-square"></i>
       Edit
      </button>

              {/* //////////////////////////////// */}
            </td>

          </tr>
          )
          
        })
}
          </tbody>
        </table>
      </div>
      {modalOpen && <Updatelog data={data} setOpenModal={setModalOpen} />}
    </div>

  )
}

export default User_detail
