import { instance } from '../constants/app';

export const getTodos = async (userId, setTodos) => {
   try {
      await instance
         .get('https://alch-todo-backend.herokuapp.com/api/todo', {
            headers: {
               'Content-Type': 'application/json',
            },
            params: { userId },
         })
         .then((response) => setTodos(response.data));
   } catch (error) {
      console.log(error);
   }
};

export const removeTodos = async (id, getTodo) => {
   try {
      await instance
         .delete(
            `https://alch-todo-backend.herokuapp.com/api/todo/delete/${id}`,
            { id },
            {
               headers: {
                  'Content-Type': 'application/json',
               },
            }
         )
         .then(() => getTodo());
   } catch (error) {
      console.log(error);
   }
};

export const createTodos = async (
   text,
   userId,
   setTodos,
   setText,
   getTodo,
   todos
) => {
   if (!text) return null;
   try {
      await instance.post('todo/add', { text, userId }).then((response) => {
         setTodos([...todos], response.data);
         setText('');
         getTodo();
      });
   } catch (error) {
      console.log(error);
   }
};

export const completedTodos = async (id, setTodos, todos, getTodo) => {
   try {
      await instance.put(`todo/complete/${id}`, { id }).then((response) => {
         setTodos([...todos], response.data);
         getTodo();
      });
   } catch (error) {
      console.log(error);
   }
};

export const importantTodos = async (id, setTodos, todos, getTodo) => {
   try {
      await instance.put(`todo/important/${id}`, { id }).then((response) => {
         setTodos([...todos], response.data);
         getTodo();
      });
   } catch (error) {
      console.log(error);
   }
};
