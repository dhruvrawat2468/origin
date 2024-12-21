// import React from 'react'
import AllTask from '../other/AllTask'
import CreateTask from '../other/CreateTask'
import Header from '../other/Header'

const Admindashboard = (props) => {
  return (
    <div>
      <Header data={props.changeUser}/>
      <CreateTask/>
      <AllTask/>
    
    </div>
  )
}

export default Admindashboard
