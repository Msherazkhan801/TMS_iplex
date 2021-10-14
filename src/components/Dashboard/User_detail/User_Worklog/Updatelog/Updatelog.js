import React,{useState,useEffect} from 'react'
import  "../Updatelog/Updatelog.css"
import { useDispatch, useSelector } from 'react-redux'
import Updatelogaction from "../../../../../store/actions/updatelogacion"
const Updatelog = ( { setOpenModal, data }) => {
  let dispatch = useDispatch()
  // const getUserlog = useSelector((state) => state.UpdatelogaReducer.UpdatelogaReducer)
  let token = localStorage.getItem("token")
  const [time, setTime] = useState("")
  const[date,setdate]=useState("")
  const[description,setdescription]=useState("")

 
  useEffect(() => {
    setdate(data.logDate);
    setTime(data.hours);
    setdescription( data.description)

  }, [])
    const payload = {
      logDate: date,
      hours: parseInt(time),
      description: description,
    }
   
    return (
        <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Please Edit Your Log</h1>
        </div>
        <div className="body">
        LogDate:
         <input type="date"
          value ={date}
          onChange = {(e)=>setdate(e.target.value)}
           placeholder="Date...."   className='inputmodal'  />
         <br/>
         Time:
         <input type="number" 
         value ={time}
         onChange = {(e)=>setTime(e.target.value)}
          placeholder="Time in Hours.." className='inputmodal1' />
         <br/>
         Description:
         <input type="text"
          value ={description}
          onChange = {(e)=>setdescription(e.target.value)}
           placeholder="Description....." className='inputmodal2' />
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);

            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button onClick={() => {
              setOpenModal(false);
              dispatch(Updatelogaction(parseInt(data.id),payload))
            }}>Update</button>
        </div>
      </div>
    </div>
    )
}

export default Updatelog
