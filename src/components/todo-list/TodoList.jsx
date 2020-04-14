import React, { Component } from "react";
import Axios from "axios";
import { Table } from "react-bootstrap";
import Todo from "./Todo";

const serverUrl = "http://localhost:4000/todos/";

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.init(this);
  }

  init = (current) => {
    current.state = { data: [] };
  };

  componentDidMount() {
    Axios.get(serverUrl)
      .then((response) => {
        let { data } = response;
        this.setState((state) => ({ data }));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Unique Id</th>
              <th>Author</th>
              <th>Title</th>
              <th>Description</th>
              <th>Priority</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((todo, index) => {
              return <Todo todo={todo} key={index} index={index + 1} />;
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default TodoList;
