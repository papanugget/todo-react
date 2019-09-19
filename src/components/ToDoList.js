import React from 'react';
import {ListGroup, } from 'react-bootstrap';
import ToDoEntry from '../subcomponents/ToDoEntry';

const ToDoList = (props) => {
    const todoList = props.todoList;
    // console.log(todoList);/
    const renderedList = todoList.map((todo, index) => {
        return <ToDoEntry todo={todo} key={todo.index}/>
    })
    // console.log(todoList);
    return(
        <ListGroup>
            {renderedList}
        </ListGroup>
    );
}

export default ToDoList;