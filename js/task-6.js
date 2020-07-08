let input;
const numbers = [];
let total = 0;

// input = prompt("Введите число");

// input = +input;
// console.log(input);
// console.log(typeof input);

// numbers.push(input);
// console.log(numbers);

do {
  input = prompt("Введите число!");

  let inputNumber = Number(input);

  if (Number.isNaN(inputNumber)) {
    alert("Вы ввели некоректные данные");
    continue;
  } else if (input === null) {
    break;
  } else {
    numbers.push(inputNumber);
    console.log(numbers);
  }
  //   total += Number(input);
} while (input !== null);

console.log(numbers.length);

if (numbers.length > 0) {
  for (const number of numbers) {
    console.log(number);
    total += number;
    console.log(total);
  }
  alert(`Общая сумма чисел равна ${total}`);
} else {
  alert(`Масив пустой`);
}
