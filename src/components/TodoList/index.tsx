import React from "react";
import Todo from "../../@types/todo";
import TodoListItem from "../TodoListItem";

type Props = {
  todos: Todo[];
};

function TodoList(props: Props) {
  const { todos } = props;
  return (
    <ul>
      <h2>Todos</h2>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
