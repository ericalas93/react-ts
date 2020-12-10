import React from "react";
import { ITodo } from "../../todo.models";

const TodoItem = (props: ITodo) => {
  return <div className="h-12 flex items-center border-b p-4">{props.text}</div>;
};

export default TodoItem;