const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
let message;

const isLoginValid = function (login) {
  const rezult = login.length >= 4 && login.length <= 16;
  return rezult;
};

const isLoginUnique = function (allLogins, login) {
  let rezult = false;
  for (const allLogin of allLogins) {
    if (login === allLogin) {
      rezult = true;
      break;
    }
  }
  return rezult;
};

const addLogin = function (allLogins, login) {
  if (!isLoginValid(login)) {
    message = "Ошибка! Логин должен быть от 4 до 16 символов";
    return message;
  }
  if (isLoginUnique(allLogins, login)) {
    message = "Такой логин уже используется!";
    return message;
  }
  logins.push(login);

  message = "Логин успешно добавлен!";
  return message;
};

console.log(addLogin(logins, "robotGoogles"));
