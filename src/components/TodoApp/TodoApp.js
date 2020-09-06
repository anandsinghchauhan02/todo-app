import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import TodoItemList from '../TodoItemList/TodoItemList';

class TodoApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todoList: [],
            todoItems: {
                id: '',
                text: ''
            }
        }
        // this.addTodoList = this.addTodoList.bind(this)
        // this.handleChange = this.handleChange.bind(this)
        // this.deleteTodoItem = this.deleteTodoItem.bind(this)
        // this.editTodoItem = this.editTodoItem.bind(this)
    }

    handleChange = (e) => {
        this.setState({
            todoItems: {
                id: Math.random(),
                text: e.target.value
            }
        })
    }

    addTodoList = (e) => {
        e.preventDefault();
        const newItem = this.state.todoItems;
        if (newItem.text !== '') {
            const updatedTodoList = [...this.state.todoList, newItem]
            this.setState({
                todoList: updatedTodoList,
                todoItems: {
                    id: '',
                    text: ''
                }
            })
        }
    }

    deleteTodoItem = (key) => {
        const filterTodoItems = this.state.todoList.filter(items =>
            items.id !== key,
        );
        this.setState({
            todoList: filterTodoItems,
        })
    }

    editTodoItem = (receiveText, id) => {
        const editedTodoItem = this.state.todoList;
        editedTodoItem.map(ListItem => {
            if (ListItem.id === id) {
                ListItem.text = receiveText;
            }
        })
        this.setState({
            todoList: editedTodoItem
        })
    }




    render() {
        return (
            <div>
                <div className="row mt-5">
                    <div className="col-md-6 offset-md-3 col-sm-12">
                        <div>
                            <Form onSubmit={this.addTodoList}>
                                <div className="row">
                                    <div className="col-8">
                                        <FormGroup>
                                            <Label for="exampleText" hidden>Text</Label>
                                            <Input type="text" value={this.state.todoItems.text} onChange={this.handleChange} placeholder="Add todo items" />
                                        </FormGroup>

                                    </div>
                                    <div className="col-4">
                                        <Button className="w-100 bg-warning" type="submit">Add</Button>
                                    </div>

                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
                <TodoItemList todoList={this.state.todoList} deleteTodoItem={this.deleteTodoItem} editTodoItem={this.editTodoItem} />
            </div>
        )
    }
}

export default TodoApp;