import React from "react";
import { Link } from "react-router-dom";

export default function Todo({ todo, index }) {
  return (
    <tr key={index}>
      <td>{index}</td>
      <td>
        <Link to={"/edit/" + todo._id}>{todo._id}</Link>
      </td>
      <td>{todo.todo_author}</td>
      <td>{todo.todo_title}</td>
      <td>{todo.todo_description}</td>
      <td>{todo.todo_priority}</td>
      <td>{todo.todo_completed ? "Yes" : "No"}</td>
    </tr>
  );
}
