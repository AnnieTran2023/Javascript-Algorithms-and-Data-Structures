// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

function palindrome(str) {
  const transformedStr = str.toLowerCase().replaceAll(' ','').split('');
  const exceptions = ["*", "_", "/", "\\", "(", "-", ")", ":",".",","];
  const withoutSymbols = transformedStr.filter(letter => !exceptions.includes(letter)).join('');
  const reverse = withoutSymbols.split('').reverse().join('');
  return withoutSymbols === reverse;
}
palindrome("eye");
palindrome("My age is 0, 0 si ega ym.");
palindrome("1 eye for of 1 eye.");
palindrome("0_0 (: /-\ :) 0-0");
