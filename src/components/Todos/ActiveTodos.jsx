import React from 'react'

const ActiveTodos = ({ todos, completedTodo, importantTodo, removeTodo }) => {
    return (
        <>
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
        </>
    )
}

export default ActiveTodos