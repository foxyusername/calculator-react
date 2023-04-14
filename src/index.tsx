import React, { useState } from 'react';
import './App.css';

interface Todo {  
  id: number;
  name: string;
  isCompleted: boolean;
}

function Index() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTodo(event.target.value);
  }

  function handleAddTodo() {
    if (newTodo.trim() !== '') {
      const newTask: Todo = {
        id: Date.now(),
        name: newTodo.trim(),
        isCompleted: false,
      };
      setTodoList([...todoList, newTask]);
      setNewTodo('');
    }
  }

  function handleDeleteTask(id: number) {
    setTodoList(todoList.filter((task) => task.id !== id));
  }

  function handleCompleteTask(id: number) {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      })
    );
  }

  return (
    <div id="main">
      <input type="text" onChange={handleInputChange} value={newTodo} />
      <button id="button" onClick={handleAddTodo}>
        Add
      </button>
      <div>
        {todoList.map((task) => (
          <div key={task.id}>
            <h3 style={{ backgroundColor: task.isCompleted ? 'green' : 'white'}}>
              {task.name}
            </h3>
            <button id="button2" onClick={() => handleDeleteTask(task.id)}>
              X
            </button>
            <button
              id="button3"
              onClick={() => handleCompleteTask(task.id)}
            >
              Complete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Index;
