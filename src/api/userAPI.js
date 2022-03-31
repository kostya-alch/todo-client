import { instance } from '../constants/app';

export const register = async (form) => {
   try {
      await instance
         .post('auth/registration', { ...form })
         .then((response) => console.log(response));
   } catch (error) {
      console.log(error);
   }
};
