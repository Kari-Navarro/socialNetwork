import registrarConEmail from '../firebase/index';
//aqui importamos las funciones de firebase y exportamos a la vista para que se puedan utilizar
const controlador = {
  registrar: (email, password) => {
    console.log(email, password);
    registrarConEmail(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      return user;
    })
    .catch((error) => {
      //const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
      return errorMessage;
    });
  
  },

}

export default controlador;