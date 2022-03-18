import axios from 'axios';

export const getTodos = async (userId, setTodos) => {
   try {
      await axios
         .get('/api/todo', {
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
      await axios
         .delete(
            `/api/todo/delete/${id}`,
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
      await axios
         .post(
            '/api/todo/add',
            { text, userId },
            {
               headers: {
                  'Content-Type': 'application/json',
               },
            }
         )
         .then((response) => {
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
      await axios
         .put(
            `/api/todo/complete/${id}`,
            { id },
            {
               headers: {
                  'Content-Type': 'application/json',
               },
            }
         )
         .then((response) => {
            setTodos([...todos], response.data);
            getTodo();
         });
   } catch (error) {
      console.log(error);
   }
};

export const importantTodos = async (id, setTodos, todos, getTodo) => {
   try {
      await axios
         .put(
            `/api/todo/important/${id}`,
            { id },
            {
               headers: {
                  'Content-Type': 'application/json',
               },
            }
         )
         .then((response) => {
            setTodos([...todos], response.data);
            getTodo();
         });
   } catch (error) {
      console.log(error);
   }
};
