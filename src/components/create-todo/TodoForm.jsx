import React from "react";
import { Form, Button } from "react-bootstrap";

const TodoForm = (props) => {
  const { data, options, onSubmit, onFieldChange } = props;
  const {
    todo_author,
    todo_title,
    todo_description,
    todo_priority,
    todo_completed,
  } = data;
  return (
    <React.Fragment>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="author">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            name="todo_author"
            placeholder="Who's Doing"
            value={todo_author}
            onChange={onFieldChange}
          />
        </Form.Group>

        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="todo_title"
            placeholder="Enter title"
            value={todo_title}
            onChange={onFieldChange}
          />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            placeholder="Description"
            name="todo_description"
            value={todo_description}
            onChange={onFieldChange}
          />
        </Form.Group>
        <Form.Group controlId="priority">
          <Form.Label>Priority</Form.Label>
          <Form.Control
            as="select"
            name="todo_priority"
            onChange={onFieldChange}
            value={todo_priority}
          >
            {options.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group id="formGridCheckbox">
          <Form.Check
            type="checkbox"
            name="todo_completed"
            checked={todo_completed}
            onChange={onFieldChange}
            label="Completed"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </React.Fragment>
  );
};

export default TodoForm;
