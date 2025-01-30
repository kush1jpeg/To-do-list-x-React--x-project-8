export default function Todolist({onadd , ondelete ,todos }) {
  return (
    <div>

      
      <p className="pp">
        Yo brother this is the place to know what kind of a shit life u are living
      </p>
      {todos.length !== 0 ?
        todos.map(todos => {
          return <>

          <div className='m-2'>
            <h2>{todos.sno + " : "+todos.title}</h2>{todos.desc}
              </div>
            <button className='btn1 btn-danger btn-sm m-3' onClick={() =>ondelete(todos)} >DELETE</button>
          
          </>
        }) : "No todos to display"
      }
    </div>
  )
}
