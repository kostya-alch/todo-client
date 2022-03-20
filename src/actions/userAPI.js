import axios from 'axios';


export const register = async (form) => {
   try {
      await axios
         .post(
            'https://alch-todo-backend.herokuapp.com/api/auth/registration',
            { ...form },
            {
               headers: {
                  'Content-Type': 'application/json',
               },
            }
         )
         .then((response) => console.log(response));
   } catch (error) {
      console.log(error);
   }
};

// export const loginAuth = async (form,login) => {
//    try {
//       await axios
//          .post(
//             'https://alch-todo-backend.herokuapp.com/api/auth/login',
//             { ...form },
//             {
//                headers: {
//                   'Content-Type': 'application/json',
//                },
//             }
//          )
//          .then((response) => login(response.data.token, response.data.userId));
//    } catch (error) {
//       console.log(error);
//    }
// };
