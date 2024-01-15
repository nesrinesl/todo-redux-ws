import React, { useState } from "react";
import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";
import { Dropdown } from "react-bootstrap";

const TodoList = () => {
  const list = useSelector((state) => state.listTasks);

  const [filter, setFilter] = useState("ALL");
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {filter}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setFilter("ALL")}>ALL</Dropdown.Item>
          <Dropdown.Item onClick={() => setFilter("DONE")}>DONE</Dropdown.Item>
          <Dropdown.Item onClick={() => setFilter("UNDONE")}>
            UNDONE
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {filter === "DONE"
        ? list
            .filter((task) => task.isDone === true)

            .map((task) => <TodoCard task={task} key={task.id} />)
        : filter === "UNDONE"
        ? list
            .filter((task) => task.isDone === false)

            .map((task) => <TodoCard task={task} key={task.id} />)
        : list.map((task) => <TodoCard task={task} key={task.id} />)}
    </div>
  );
};

export default TodoList;
