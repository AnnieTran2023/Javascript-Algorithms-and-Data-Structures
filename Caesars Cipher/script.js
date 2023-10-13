// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

// Write a function that takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

const alphabets = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split('');
function rot13(str) {
  const newArr = str.split('').map((letter) => {
    if(!alphabets.includes(letter)) {
      return letter;
    } else {
      let index = (alphabets.indexOf(letter)+13)%alphabets.length;
      let newLetter = alphabets[index];
      return newLetter;
    }
  })
  return newArr.join('');
}
console.log(rot13("SERR PBQR PNZC"));
