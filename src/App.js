
import './App.css';

import Header from './My/Header';
import Addtodo from './My/Addtodo';
import Footer from './My/Footer';
import Todos from "./My/Todos";
import React, { useState } from 'react';


function App() {
  const [todos, setTodos] = useState([
    {
      sno: 1 ,
      title: 'go to market',
      desc: 'go to buy the goods'
    },
    {
      sno: 2,
      title: 'go to mall',
      desc: 'go to check the goods'
    },
   
  ])
  const ondelete = (todo) => {
    setTodos(todos.filter((e) => { return e !== todo }))
  }

  const onadd = (title , desc) => {
    let sno = todos.length>0?todos[todos.length-1].sno+1 : 1
    let mytodo={sno: sno ,
    title:title , 
    desc : desc }
    setTodos([...todos, mytodo])
  }
  return (<>
    <Header title="my header" navLink={true} />

    <Addtodo onadd={onadd} todos={todos}/>

    <Todos todos={todos} ondelete={ondelete} />

    <Footer />
  </>
  );
}

export default App;
