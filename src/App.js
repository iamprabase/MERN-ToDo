import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { TopNav, TodoList, CreateTodo, EditTodo } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <TopNav />
        <header className="header">
          <h1>MERN STACK TODO APP</h1>
        </header>
        <Route path="/" exact component={TodoList} />
        <Route path="/create" component={CreateTodo} />
        <Route path="/edit/:id" component={EditTodo} />
      </div>
    </BrowserRouter>
  );
}

export default App;
