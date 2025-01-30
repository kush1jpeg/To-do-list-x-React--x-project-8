import React from 'react'
import Todolist from '../My/Todolist';

export default function Todos(props) {
  return (<>
<h3 className='text-center titlee'>To do list</h3>
<Todolist todos = {props.todos} ondelete={props.ondelete} onadd={props.onadd} />


    <div className='container'>

    </div></>
  )  
}