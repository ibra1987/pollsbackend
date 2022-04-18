export const checkEmail = (email, emailConfirmation) => {
  const emailRule =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (email === undefined || email === null) return false;

  if (String(email).toLowerCase().match(emailRule)) {
    if (emailConfirmation !== "") {
      if (email !== emailConfirmation) {
        return false;
      }
    }

    return true;
  }
};

export const isEmpty = (value) => {
  if (value === "") return true;
  return false;
};

export const checkPassword = (password, passwordConfirmation) => {
  const passRule = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  if (passRule.test(password)) {
    if (password !== passwordConfirmation) {
      return false;
    }
    return true;
  }
  return false;
};
