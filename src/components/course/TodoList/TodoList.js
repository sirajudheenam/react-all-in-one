import React from 'react';

// useMemo(calculateValue, dependencies)

function filterTodos(todos, tab) {
  switch (tab) {
    case 'all':
      return todos;
    case 'active':
      return todos.filter((todo) => !todo.completed);
    case 'completed':
      return todos.filter((todo) => todo.completed);
    default:
      return todos;
  }
}

export function TodoList({ todos, tab }) {
  const visibleTodos = React.useMemo(
    () => filterTodos(todos, tab),
    [todos, tab]
  );

  return (
    <div>
      <header className="demo-header">
        <div className="demo-header__badge">useMemo</div>
        <h1 className="demo-header__title">Todo List with useMemo</h1>
        <p className="demo-header__desc">Demonstrates useMemo to memoize expensive list filtering so it only re-runs when todos or the active tab changes.</p>
      </header>
      <ul>
      {visibleTodos &&
        visibleTodos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <input
              type="checkBox"
              onClick={() => (todo.completed = !todo.completed)}
            ></input>
            <button onClick={() => todos.splice(todos.indexOf(todo), 1)}>
              Delete
            </button>
            <button
              onClick={() =>
                todos.push({
                  id: todos.length + 1,
                  title: 'New Todo',
                  completed: false,
                })
              }
            >
              Add Todo
            </button>
          </li>
        ))}
    </ul>
    </div>
  );
}

export async function action() {
  return null;
}

export async function loader({ request }) {
  return null;
}
