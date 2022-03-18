import React from 'react'

const AddTodo = ({submitHandler, inputHandler, text, createTodo}) => {
    return (
        <>
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
        </>
    )
}

export default AddTodo