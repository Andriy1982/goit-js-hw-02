const formatString = function (string) {
  console.log(string.length);

  let arrayWords = string.split("");
  console.log(arrayWords);

  if (string.length <= 40) {
    // arrayWords = arrayWords.join("");
    console.log(string);
    // console.log(arrayWords);
  } else {
    // arrayWords.splice(40);
    // console.log(arrayWords);

    // arrayWords.push("...");
    // console.log(arrayWords);

    // arrayWords = arrayWords.join("");
    // console.log(arrayWords);

    let createdArrayWords = arrayWords.splice(0, 40);
    // createdArrayWords.join("");
    createdArrayWords.push("...");
    //     let createdArrayWordsnew = createdArrayWords.push("...");
    //     console.log(createdArrayWordsnew);

    createdArrayWords = createdArrayWords.join("");
    // createdArrayWords.join("");
    // console.log(createdArrayWords);
    //     console.log(arrayWords);
    return createdArrayWords;
  }
};

// formatString("Curabitur hfjgd  dsgds  ligula sapien, tincidunt  fd hstoop");

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
