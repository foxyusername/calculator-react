import React, { useState } from 'react';
import './App.css';

interface todoArray {  
  id: number;
  name: string;
  isCompleted: boolean
}

function App() {
  const [todolist, setTodoList] = useState<todoArray[]>([]);
  const [newtodo, setnewTodo] = useState('');
  const [input_value, setInputValue]=useState('');

  function add(event: React.ChangeEvent<HTMLInputElement>) {
    setnewTodo(event.target.value);
  }

  function execute() {
    const todoArray: todoArray={
      id:todolist.length===0 ? 1 :todolist[todolist.length-1].id +1,
      name:newtodo,
      isCompleted:false
    }
    setTodoList([...todolist,todoArray]);
    setnewTodo('');

  }
  
  function deleteTask(taskname:todoArray) {
    const newTodoList = todolist.filter((task) => task.id !== taskname.id);
    setTodoList(newTodoList);
  }

  function Changecolor1(id:String) {
    setTodoList(
      todolist.map((task) =>
        task.name === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  }
  function Changecolor2(id:number) {
    setTodoList(
      todolist.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  }

  function searcher(event:  React.ChangeEvent<HTMLInputElement>){
     setInputValue(event.target.value);
  }

function deleteSearch(filtered:todoArray){
  const newTodoList = todolist.filter((task) => task.name !== filtered.name);
  setTodoList(newTodoList); 
  setInputValue('');
}

  return (
    <div id="main">
      <input type="text" onChange={add} value={newtodo} maxLength={25} placeholder='Todo'/>
      <button id="button" onClick={execute}>
        add
      </button>
      <div>
        {todolist.map((task, key) => {
          return (
            <div id="list" key={task.id}>
             <div id='first'>
            <h3 style={{color: task.isCompleted ? 'red': 'black'}}>{task.name}</h3>
              <button id="button2"  onClick={() => deleteTask(task)}>
                X
              </button>
              <button id="button3" onClick={()=>Changecolor2(task.id)}>Complete</button>
              </div>
              
              <div id='input_place'>
                <input type='text' onChange={searcher} placeholder='search'></input>
                {input_value ? task.name===input_value ? <div id="elements">
                  <h2 className="move" style={{color: task.isCompleted ? 'red' : 'black'}}>{input_value}</h2>
               <button className="move"  id="X-btn" onClick={()=>deleteSearch(task)}>X</button>
               <button className="move"  id='color-btn' onClick={(()=>Changecolor1(task.name))}>Complete</button>
                </div> : null : null}
             
              </div>
              </div>
              
          );
        })}
      </div>
    </div>
  );
}

export default App;
