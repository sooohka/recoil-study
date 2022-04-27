import React from "react";
import Todo from "../../@types/todo";

type Props = {
  todo: Todo;
};
const completedStyle = { textDecorationLine: "line-through" };
function TodoListItem(props: Props) {
  const { todo } = props;
  return (
    <li>
      <h3 style={todo.completed ? completedStyle : {}}>{todo.title}</h3>
      <span>{todo.completed}</span>
    </li>
  );
}

export default TodoListItem;
