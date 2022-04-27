import React, { useEffect, useState } from "react";
import Todo from "./@types/todo";
import AddForm from "./components/AddForm";
import TodoList from "./components/TodoList";

const url = "https://jsonplaceholder.typicode.com/todos";
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data: Todo[]) => {
        setTodos(data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  const handleSubmit = (v: { name: string }) => {
    console.log(v);
  };

  return (
    <div>
      <h1>Todo-list</h1>
      <AddForm onSubmit={handleSubmit} />
      <TodoList todos={todos} />;
    </div>
  );
}

export default App;
