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
