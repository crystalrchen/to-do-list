import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import "./List.css"
import ListItem from "./ListItem";

function List() {
  const [tasks, setTasks] = useState([
    "local hack day check in!",
    "go out for a walk",
    "study for math test",
  ]);
  const [newTask, setNewTask] = useState("")



  const listItems = tasks.map((task) =>
    <ListItem key={task} item={task} />
  );

  function addToTasks(task) {
    const currentTasks = [...tasks]
    currentTasks.push(task)
    setTasks(currentTasks)
  }

  return (
    <div className="list-container">
      <h2 className="list-header">things to do today</h2>
      <Row>
        <Col xs={12} md={9}>
        <input
          placeholder="type a new task"
          className="list-input"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
        />
        </Col>
        <Col xs={12} md={3}>
          <Button size="lg" block className="submit-button" onClick={() => {addToTasks(newTask); setNewTask("")}}>add task</Button>
        </Col>
      </Row>
      {listItems}
    </div>
  );
}

export default List;
