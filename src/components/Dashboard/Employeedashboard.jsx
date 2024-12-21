import React from 'react'
import Header from '../other/Header'
import TasklistNumbers from '../other/TasklistNumbers'
import TaskList from '../Tasklist/Tasklist'


const Employeedashboard = (props) => {
  
  return (
    <div>
        <Header name={props.data} data={props.changeUser}/>
        <TasklistNumbers data={props.data}/>
        <TaskList data={props.data}/>

    </div>
  )
}

export default Employeedashboard
