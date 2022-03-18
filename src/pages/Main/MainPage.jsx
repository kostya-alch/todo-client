import React, { useCallback, useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/authContext'

import './MainPage.scss'
import { completedTodos, createTodos, getTodos, importantTodos, removeTodos } from '../../actions/todoAPI'
import AddTodo from '../../components/Todos/AddTodo'
import ActiveTodos from '../../components/Todos/ActiveTodos'

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
        createTodos(text, userId, setTodos, setText, getTodo, todos)
    }, [text, userId, todos, getTodo])

    useEffect(() => {
        getTodo()
    }, [getTodo])

    const removeTodo = useCallback(async (id) => {
        removeTodos(id, getTodo)
    }, [getTodo])

    const completedTodo = useCallback(async (id) => {
        completedTodos(id, setTodos, todos, getTodo)
    }, [getTodo, todos])

    const importantTodo = useCallback(async (id) => {
        importantTodos(id, setTodos, todos, getTodo)
    }, [getTodo, todos])

    return (
        <>
            <div className="container">
                <div className="main-page">
                    <AddTodo
                        submitHandler={submitHandler}
                        inputHandler={inputHandler}
                        text={text}
                        createTodo={createTodo}
                    />
                    <ActiveTodos
                        todos={todos}
                        completedTodo={completedTodo}
                        importantTodo={importantTodo}
                        removeTodo={removeTodo}
                    />
                </div>
            </div>
        </>
    )
}

export default MainPage