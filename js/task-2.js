const calculateEngravingPrice = function (message, pricePerWord) {
  const numberWords = message.split(" ").length;
  const rezult = numberWords * pricePerWord;
  return rezult;
};

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
); // 120
