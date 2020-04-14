import React, { Component } from "react";
import TodoForm from "../create-todo/TodoForm";
import Axios from "axios";

const serverUrl = "http://localhost:4000/todos/";

export default class EditTodo extends Component {
  constructor(props) {
    super(props);
    this.init(this);
    this.bindEvents(this);
  }

  init = (current) => {
    current.state = {
      todo_author: "",
      todo_title: "",
      todo_description: "",
      todo_priority: "",
      todo_completed: false,
    };
    current.options = [
      { value: "low", label: "Low" },
      { value: "medium", label: "Medium" },
      { value: "high", label: "High" },
    ];
  };

  bindEvents = (current) => {
    current.onFieldChange = current.onFieldChange.bind(current);
    current.onSubmit = current.onSubmit.bind(current);
  };

  componentDidMount() {
    Axios.get(serverUrl + "edit-todo/" + this.props.match.params.id)
      .then((response) => {
        let { data } = response;
        let {
          todo_author,
          todo_title,
          todo_description,
          todo_priority,
          todo_completed,
        } = data;
        this.setState((state) => ({
          todo_author,
          todo_title,
          todo_description,
          todo_priority,
          todo_completed,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onFieldChange = (e) => {
    let { name, value } = e.target;
    if (name === "todo_completed") {
      value = e.target.checked;
    }

    this.setState((state) => ({ ...state, [name]: value }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    let postData = this.state;
    Axios.put(serverUrl + "/edit-todo/" + this.props.match.params.id, postData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div className="form-container">
        <h2 className="header">Update ToDo</h2>
        <TodoForm
          data={this.state}
          options={this.options}
          onFieldChange={this.onFieldChange}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}
