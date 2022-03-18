import axios from "axios";

export const getTodos = async(userId, setTodos) =>  {
    try {
        await axios.get('/api/todo', {
            headers: {
                'Content-Type': 'application/json'
            },
            params: { userId }
        }).then(response => setTodos(response.data))
    } catch (error) {
        console.log(error);
    }
}

export const removeTodos = async(id, getTodo) =>  {
    try {
        await axios.delete(`/api/todo/delete/${id}`, { id }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => getTodo())
    } catch (error) {
        console.log(error);
    }
}

