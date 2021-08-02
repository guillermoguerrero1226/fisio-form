const firebaseErrorHandler = {
  "auth/weak-password": "La contraseña debe tener al menos 6 caracteres",
  "auth/email-already-in-use":
    "El correo ingresado ya se encuentra registrado en otra cuenta",
  "auth/wrong-password": "La contraseña ingresada no es correcta",
  "auth/user-not-found": "El usuario ingresado no es correcto",
  "auth/argument-error":
    "Un error inesperado ocurrio al momento de crear el usuario, por favor valide que los datos ingresados son correctos y que no contienen caracteres especiales",
};
export default firebaseErrorHandler;
