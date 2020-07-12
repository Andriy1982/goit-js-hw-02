'use strict';

const checkForSpam = function (message) {
  const arrayWords = message.toLowerCase();
  let rezult;

  rezult = arrayWords.includes("spam") || arrayWords.includes("sale");
  return rezult;
};

console.log(checkForSpam('Latest technology news'));

console.log(checkForSpam('JavaScript weekly newsletter'));

console.log(checkForSpam('Get best sale offers now!'));

console.log(checkForSpam('[SPAM] How to earn fast money?'));
