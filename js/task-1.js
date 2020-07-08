// // 'use strict';

// console.log ('Hellow');

// console.log ('Prev');

// let agg=5;

// console.log (agg);

// // const userInpyt = confirm ('Хотите продлить подписку?');

// // console.log (userInpyt);
// let hobby = 'Pибалка';

// let userInpyt = prompt ('Введите число');

// console.log (userInpyt);

// const type = typeof 5;

// console.log (type);

// console.log (' This is a', type);

// userInpyt = Number(userInpyt);

// console.log (userInpyt);

// const blockHight = '50.9em';

// console.log (blockHight);

// const hight = Number.parseFloat(blockHight);

// console.log (hight);

// console.log (Math.pow(3, 3));

// let number = prompt ('Введите число');

// number = Number(number);

// let power = prompt ('Введите число');

// power = Number(power);

// console.log (number);

// console.log (power);
// const rezult = Math.pow(number, power);

// console.log (rezult);

// const firstName = 'Vasja';
// const lastName = 'Petrov';
// const room = 754;
// const type = 'VIP';

// const message = `Гость ${firstName} ${lastName} поселяеться в ${type} номер ${room} `

// console.log(message);
// console.log(message.length);

// console.log(NaN || 0 || 'salo');

// console.log("\\ \\ \\\\ \\\ \'\"");

// let who = "dragon's" + 'mother';
// console.log(who);

// let info = "We couldn't verify you mother's maiden name.";
// let intro = 'Here is important information about your account security.';

// let firstName = 'Joffrey';
// let greeting = 'Hello';

// // BEGIN
// console.log(`${greeting}, ${firstName}!`);
// console.log(`${intro}\n${info}`);
// // END

// // BEGIN
// let firstNumber = 11;
// let secondaryNumber = -100;
// console.log(firstNumber);
// console.log(secondaryNumber);
// // END

// const magic = '\nyou'
// console.log(magic[1]);

// let test = (('-8' + '-2'));
// console.log(test);
// console.log(typeof test);

// console.log(console.log);
// let test = 'HELLO';

// console.log(test.toUpperCase());

// const name = 'Robb';

// console.log(name[name.length]);

// const name = 'Tirion';
// console.log(typeof name.length.toString());

// console.log(name.toUpperCase().toLowerCase().length.toString().length);

// const numberInputeRef = document.querySelector('input[name="number"]');
// const droidInputeRef = document.querySelector('input[name="droid"]');
// console.log(numberInputeRef.value);

// const buttonRef = document.querySelector('button');

// buttonRef.addEventListener('click', function () {
//     console.log('Prev')
//     console.log(numberInputeRef.value)
//     console.log(droidInputeRef.value)

//     const number = Number(numberInputeRef.value);
//     const droid = Number(droidInputeRef.value);
// });

// const numbers = [];

// for (let i = 0; i < 3; i += 1) {
//   numbers.push(`label-${i}`);
// }

// console.log(numbers); // ['label-0', 'label-1', 'label-2']

// for (const number of numbers) {
//   console.log(number);
// }

const LogItem = function (array) {
  for (let i = 0; i < array.length; i += 1) {
    let itemList = `${i + 1} - ${array[i]}`;
    console.log(itemList);
    // console.log(array.length);
  }
};

LogItem([25, 54, 85, 96]);
