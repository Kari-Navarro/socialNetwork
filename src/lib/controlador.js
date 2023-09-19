import { registrarConEmail, loginUser } from '../firebase/auth';
// aqui importamos las funciones de firebase y exportamos a la vista para que se puedan utilizar
export const controlador = {
  registrar: (email, password) => {
  
    return registrarConEmail(email, password)
      
  },

};