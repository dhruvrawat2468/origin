import { useContext, useEffect, useState } from 'react'
import Admindashboard from './components/Dashboard/Admindashboard'
import Employeedashboard from './components/Dashboard/Employeedashboard'

import Login from './components/Auth/Login'
import { Authcontext } from './context/Authprovider'
// import Header from './components/other/Header'


function App() {

  const [data,setData] = useContext(Authcontext);
  const [loggedinInfo, updatelogin] = useState(null);
 

 
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedinUser');
    
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      
      setUser(userData.role); // Set the user role (admin or employee)
      if (userData.role === 'employee') {
        updatelogin(userData.data); // Set employee data if the role is employee
      }
    }
  }, []);


 


  const [user, setUser] = useState(null);
  const loginHandler = (email, password) => {
    if (email === "admin@me.com" && password === '123') {
      console.log("This is admin");
      setUser("admin");
      localStorage.setItem("loggedinUser", JSON.stringify({ role: 'admin' }));
    }
    else if (data) {
      let employeeinfo = data.find((e) => e.email == email && e.password == password)
      // console.log(employeeinfo);
      if (employeeinfo) {

        


        setUser("employee");
        updatelogin(employeeinfo);
        localStorage.setItem("loggedinUser", JSON.stringify({ role: 'employee',data:employeeinfo }));
      }


    }
    else {
      alert("Invalid credentials");
    }
  }


  return (
    <>

      {!user ? <Login loginHandler={loginHandler} /> : ''}
      {user == 'admin' ? <Admindashboard changeUser={setUser}/> : (user == 'employee' ? <Employeedashboard changeUser={setUser} data={loggedinInfo}/> : '')}

    </>
  )
}

export default App
