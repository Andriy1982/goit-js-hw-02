const findLongestWord = function (string) {
  const arrayWords = string.split(" ");

  console.log(arrayWords);

  let word = arrayWords[0];

  for (let i = 1; i < arrayWords.length; i += 1) {
    if (word.length < arrayWords[i].length) {
      word = arrayWords[i];
    }
  }
  console.log(word);
  console.log(word.length);
};

findLongestWord(" Tjhfnmmmjj May the force be  gdgdt with you");
