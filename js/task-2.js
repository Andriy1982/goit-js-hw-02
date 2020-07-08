const calculateEngravingPrice = function (message, pricePerWord) {
  const numberWords = message.split(" ").length;
  const rezult = numberWords * pricePerWord;
  return rezult;
};

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
);
