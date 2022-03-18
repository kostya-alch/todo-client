import React, { useCallback, useContext, useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../../context/authContext'

import './MainPage.scss'

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
    const createTodo = useCallback(async () => {
        if (!text) {
            return null;
        }
        try {
            await axios.post('/api/todo/add', { text, userId }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                setTodos([...todos], response.data)
                setText('')
            })
        } catch (error) {
            console.log(error);
        }
    }, [text, userId, todos])
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
                                <label htmlFor="input-todo">Задача: </label>
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
                        <div className="row flex todos-item">
                            <div className="col todos-num">1</div>
                            <div className="col todos-text">Text</div>
                            <div className="col todos-buttons">
                                <i className="material-icons blue-text">add</i>
                                <i className="material-icons orange-text">warning</i>
                                <i className="material-icons red-text">delete</i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage