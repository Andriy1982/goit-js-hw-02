const formatString = function (string) {
  const arrayWords = string.split("");

  if (string.length <= 40) {
    return string;
  } else {
    arrayWords.splice(40, arrayWords.length - 40, "...");
    return arrayWords.join("");
  }
};

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
