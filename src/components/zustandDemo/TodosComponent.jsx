// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then((response) => response.json())
//   .then((json) => console.log(json));
import React, { useState, useEffect } from 'react';
// import { useTodosStore } from './zustandStore';
const todosURL = 'https://jsonplaceholder.typicode.com/todos';

const TodosComponent = () => {
  const [todos, setTodos] = useState([]);
  //   const todosList = useTodosStore((state) => state.addTodos(todos));

  useEffect(() => {
    fetch(todosURL)
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(todos);
  return (
    <ul>
      {todos?.length > 0 &&
        todos.map((todo) => <li key={todo.id}>{todo.title}</li>)}
    </ul>
    // <ul>
    //   {todosList?.length > 0 &&
    //     todosList.map((todo) => <li key={todo.id}>{todo.title}</li>)}
    // </ul>
  );
};
export default TodosComponent;
