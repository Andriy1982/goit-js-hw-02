const checkForSpam = function (message) {
  let arrayWords = message.toLowerCase();
  //   console.log(arrayWords);
  //   console.log(arrayWords.includes("spam"));
  let rezult;

  rezult = arrayWords.includes("spam") || arrayWords.includes("sale");
  return rezult;
  //   console.log(rezult);

  //   let arrayWords = message.toLowerCase().split(" ");
  //   let rezult = false;
  //   console.log(arrayWords);
  //   for (const arrayWord of arrayWords) {
  //     // console.log(arrayWords);
  //     // console.log(arrayWord);
  //     if (arrayWord === "spam" || arrayWord === "sale") {
  //       rezult = true;
  //       break;
  //       // } else {
  //       //   rezult = 10;
  //     }
  //     // const rezult = arrayWord === "spam" || "sale" ? true : false;
  //     // return rezult;
  //     // console.log(rezult);
  //   }
  //   // console.log(rezult);
  //   return rezult;
};

console.log(checkForSpam("Get best sale offers now!"));
