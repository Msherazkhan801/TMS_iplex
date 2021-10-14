import './App.css'
import Login from './Pages/Login'
import Tabviwer from './components/Tabview/Tabview'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignUp from './Pages/SignUp'
import Error from "./Pages/Error/Error"
import Manager_dashboard from "./components/Dashboard/Manager_detial/Manager_dashboard/Manager_dashboard"
import ProtectedRoute from "./components/Protected_Routs/ProtectedRoute"
import Dashboard from "./components/Dashboard/index"
import User_detail from './components/Dashboard/User_detail/User_detail'
import Register_new_user from "./components/Dashboard/User_detail/User_reg_form/Registre_new_user"
import Edituser from "./components/Dashboard/User_detail/Edituser/Edituser"
import View_user from './components/Dashboard/User_detail/View_User/View_user'
import ManagerDashboard from "./components/Dashboard/Manager_detial/Manager_dashboard/Manager_dashboard"
import Create_worklog from './components/Dashboard/User_detail/User_Worklog/create_worklog/Create_worklog'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/" component={Tabviwer}/>
          <Route path="/signup" component={SignUp}/>  
          <Route path="/login" component={Login}/>  
          <Route path="/manager" component={ManagerDashboard}/>
          <Route path="/viewuser" component={View_user}/>
          <Route path="/edituser/:id" component={Edituser}/>
          <Route path="/registeruser" component={Register_new_user}/>  
          <Route path="/userdetail" component={User_detail}/>  
          <Route path="/createuserlog" component={Create_worklog}/>  
          <ProtectedRoute  exact path="/dashboard"component={Dashboard}></ProtectedRoute>
          <Route  path="/manager_dashboard"component={Manager_dashboard}/>
          <Route path="*"component={Error}/>

         
        </Switch>
      </Router>
    </div>
  )
}

export default App
