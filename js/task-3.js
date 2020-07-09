const findLongestWord = function (string) {
  const arrayWords = string.split(" ");
  let word = arrayWords[0];

  for (let i = 1; i < arrayWords.length; i += 1) {
    if (word.length < arrayWords[i].length) {
      word = arrayWords[i];
    }
  }
  return word;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
