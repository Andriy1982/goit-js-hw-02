const checkForSpam = function (message) {
  const arrayWords = message.toLowerCase();
  let rezult;

  rezult = arrayWords.includes("spam") || arrayWords.includes("sale");
  return rezult;
};

console.log(checkForSpam("[SPAM] How to earn fast money?"));
