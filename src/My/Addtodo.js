import React, { useState } from 'react'

export default function Addtodo(props) {

  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const submit = (event) => {
    event.preventDefault()
    if (title == "" || desc == "") { alert('Title or Description cannot be blank')
return;
     }
  
  props.onadd(title , desc)
}

  return (
    <form onSubmit={submit}>
      <>    <div className="input-group  text-center">
        <span className="input-group-text m-1" id="basic-addon1">Todo's Title </span>
        <input type="text" value={title} className="form-control m-1" placeholder="Enter the title" onChange={(e) => { settitle(e.target.value) }} aria-label="Username" aria-describedby="basic-addon1" />
      </div>
        <div className="input-group ">
          <span className="input-group-text m-1 " id="basic-addon1">Description</span>
          <input type="text" value={desc} className="form-control m-1" onChange={(e) => { setdesc(e.target.value) }} placeholder="Enter the task in detail" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
<div className='but-pr'>
        <button type="submit" className="btn btn-primary m-2">ADD</button></div></>
    </form>
  )
}
