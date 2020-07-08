const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  //   console.log(login.length);
  const rezult = login.length >= 4 && login.length <= 16;
  return rezult;
};

// console.log(isLoginValid("test"));

const isLoginUnique = function (allLogins, login) {
  let rezulte = false;
  //   console.log(allLogins);
  //   console.log(login);

  for (const allLogin of allLogins) {
    // console.log(allLogin);
    // console.log(allLogins);

    if (login === allLogin) {
      rezulte = true;
      break;
    }

    // rezult = arrayWords.includes(login);
    // return rezult;
  }
  return rezulte;
};
// console.log(isLoginUnique(logins, "Mangor"));

const addLogin = function (allLogins, login) {
  if (!isLoginValid(login)) {
    console.log("Ошибка! Логин должен быть от 4 до 16 символов");
    return;
  }
  if (isLoginUnique(allLogins, login)) {
    console.log("Такой логин уже используется!");
    return;
  }
  console.log(allLogins);
  console.log(logins);
  logins.push(login);
  console.log(logins);
  console.log("Логин успешно добавлен!");
  return console.log("Логин успешно добавлен!");
};

console.log(addLogin(logins, "Phghfh"));
