export function validateName(name) {
  const nameReg = /^[a-zA-Z]{3,16}$/;
  return nameReg.test(name);
}

export function validateEmail(email) {
  const emailReg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailReg.test(email);
}

export function validatePassword(password) {
  const passwordReg = /^[a-zA-Z0-9@-]{6,20}$/;
  return passwordReg.test(password);
}


