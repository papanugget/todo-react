import React from 'react';
import { Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';

const CreateToDo = (props) => {
    // console.log(props);
    const toDoEntry = props.todoEntry;
    // console.log(toDoEntry);
    return(
        <Form className="form-entry">
            <FormGroup controlId="TodoEntry">
                <FormLabel>Create a task</FormLabel>

                <FormControl size="lg" type="text" placeholder="enter some text">
                </FormControl>
            </FormGroup>
            <Button variant="outline-danger" type="cancel">Cancel</Button>
            <Button className="float-right"variant="outline-success" type="submit">Create ToDo</Button>
        </Form>

    );
}

export default CreateToDo;