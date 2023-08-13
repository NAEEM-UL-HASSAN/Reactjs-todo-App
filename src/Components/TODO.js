import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, completeTodo, editTodo, deleteTodo, deletemessage } from './todo-slice';
import './My_Style.css';


const TodoList = () => {

    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            if (inputValue.trim() !== "") {
                dispatch(addTodo(inputValue));
                setInputValue('');
                const input = document.getElementById("work");
                input.value = "";
            } else {
                alert("Please Enter Your Work");
            }
        }
    };

    const handlebuttonpress = () => {
        if (inputValue.trim() !== "") {
            dispatch(addTodo(inputValue));
            setInputValue('');
            const input = document.getElementById("work");
            input.value = "";
        } else {
            alert("Please Enter Your Work");
        }
    };

    const completeTodoHandler = (index) => {
        dispatch(completeTodo(index));
        setTimeout(() => {
            dispatch(deleteTodo(index));
        }, 500);
    };

    const editTodoHandler = (index) => {
        const newTodo = prompt("Enter New Work");
        if (newTodo !== null && newTodo !== "") {
            dispatch(editTodo({ index, newTodo }));
        }
    };

    const deleteTodoHandler = (index) => {
        dispatch(deletemessage(index));
        setTimeout(() => {
            dispatch(deleteTodo(index));
        }, 500);
    };

    return (
        <div className='todo-body'>
            <br />
            <h1 className='todo-heading'>TO-DO LIST</h1>
            <div className="align">
                <div className="todo">
                    <label htmlFor="work">Enter Your Work</label>
                    <input type="text" id="work" placeholder="Your Work"
                        onKeyDown={handleKeyPress}
                        onChange={(e) => setInputValue(e.target.value)} />
                    <input type="button" value="ADD" className="submit" onClick={handlebuttonpress} />
                </div>
            </div>

            <div id="ywork">
                {todos.map((todo, index) => (
                    <div key={index} className='mwork-body'>
                        <div className="mwork" >
                            {todo}
                        </div>
                        <div className='todo-icons'>
                            <FontAwesomeIcon
                                className='my-icons'
                                icon={faCheckCircle}
                                style={{ cursor: 'pointer', fontSize: '25px' }}
                                onClick={() => completeTodoHandler(index)}
                            />
                            <FontAwesomeIcon
                                className='my-icons'
                                icon={faEdit}
                                style={{ cursor: 'pointer', fontSize: '25px' }}
                                onClick={() => editTodoHandler(index)}
                            />
                            <FontAwesomeIcon
                                className='my-icons'
                                icon={faTrash}
                                style={{ cursor: 'pointer', fontSize: '25px' }}
                                onClick={() => deleteTodoHandler(index)}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TodoList;
