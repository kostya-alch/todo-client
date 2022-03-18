import React, { useCallback, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../../context/authContext'

import './MainPage.scss'
import { getTodos, removeTodos } from '../../actions/todoAPI'

const MainPage = () => {
    const [text, setText] = useState('')
    const [todos, setTodos] = useState([])
    const { userId } = useContext(AuthContext)

    const submitHandler = (event) => {
        event.preventDefault();
    }
    const inputHandler = (event) => {
        setText(event.target.value)
    }
    const getTodo = useCallback(async () => {
        getTodos(userId, setTodos)
    }, [userId])

    const createTodo = useCallback(async () => {
        if (!text) return null;
        try {
            await axios.post('/api/todo/add', { text, userId }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                setTodos([...todos], response.data);
                setText('');
                getTodo();
            })
        } catch (error) {
            console.log(error);
        }
    }, [text, userId, todos, getTodo])

    useEffect(() => {
        getTodo()
    }, [getTodo])

    const removeTodo = useCallback(async (id) => {
        removeTodos(id, getTodo)
    }, [getTodo])

    const completedTodo = useCallback(async (id) => {
        try {
            await axios.put(`/api/todo/complete/${id}`, { id }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                setTodos([...todos], response.data)
                getTodo()
            })
        } catch (error) {
            console.log(error);
        }
    }, [getTodo, todos])

    const importantTodo = useCallback(async (id) => {
        try {
            await axios.put(`/api/todo/important/${id}`, { id }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                setTodos([...todos], response.data)
                getTodo()
            })
        } catch (error) {
            console.log(error);
        }
    }, [getTodo, todos])

    return (
        <>
            <div className="container">
                <div className="main-page">
                    <h4>Добавить задачу:</h4>
                    <form className='form form-login' onSubmit={submitHandler}>
                        <div className="row">
                            <div className="input-field col s12">
                                <input type="text"
                                    id='text'
                                    name='input-todo'
                                    className='validate'
                                    onChange={inputHandler}
                                    value={text}
                                />
                                <label htmlFor="input-todo">Задача:</label>
                            </div>
                        </div>
                        <div className="row">
                            <button onClick={createTodo} className='waves-effect waves-light btn blue'>
                                Добавить задачу
                            </button>
                        </div>
                    </form>

                    <h3>Активные задачи:</h3>
                    <div className='todos'>
                        {
                            todos.map((todo, index) => {
                                let classes = ['row flex todos-item']
                                if (todo.completed) {
                                    classes.push('completed')
                                }
                                if (todo.important) {
                                    classes.push('important')
                                }
                                return (
                                    <div className={classes.join(' ')} key={index}>
                                        <div className="col todos-num">{index + 1}</div>
                                        <div className="col todos-text">{todo.text}</div>
                                        <div className="col todos-buttons">
                                            <i
                                                className="material-icons blue-text"
                                                onClick={() => completedTodo(todo._id)}>check</i>
                                            <i
                                                className="material-icons orange-text"
                                                onClick={() => importantTodo(todo._id)}
                                            >warning</i>
                                            <i
                                                onClick={() => removeTodo(todo._id)}
                                                className="material-icons red-text">delete</i>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage