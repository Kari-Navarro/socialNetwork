import { registrarConEmail } from '../firebase/index';
// aqui importamos las funciones de firebase y exportamos a la vista para que se puedan utilizar
export const controlador = {
  registrar: (email, password) => {
    registrarConEmail(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        return user;
      })
      .catch((error) => {
      // const errorCode = error.code;
        const errorMessage = error.message;
        return errorMessage;
      });
  },

};
