let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Введите число!");

  if (Number.isNaN(+input) || input === "") {
    alert("Вы ввели некоректные данные");
    continue;
  } else if (input === null) {
    break;
  } else {
    numbers.push(+input);
  }
} while (input !== null);

if (numbers.length > 0) {
  for (const number of numbers) {
    total += number;
  }
  console.log(`Общая сумма чисел равна ${total}`);
} else {
  console.log(`Масив пустой`);
}
