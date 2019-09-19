import React from 'react';
import { ListGroupItem,  } from 'react-bootstrap';

const ToDoEntry = (props) => {
    console.log(props);
    const todo = props.todo;
    const task = todo.task;
    if(todo.important) {
        return(
            <ListGroupItem action variant="danger">
                {task}
            </ListGroupItem>
        );
    } else {
        return(
            <ListGroupItem action variant="info">
                {task}
            </ListGroupItem>
        );
    }

}

export default ToDoEntry;