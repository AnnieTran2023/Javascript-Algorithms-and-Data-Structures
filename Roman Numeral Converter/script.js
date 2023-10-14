// Convert the given number into a roman numeral.

// Roman numerals	Arabic numerals
// M	1000
// CM	900
// D	500
// CD	400
// C	100
// XC	90
// L	50
// XL	40
// X	10
// IX	9
// V	5
// IV	4
// I	1

// All roman numerals answers should be provided in upper-case.

const obj = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}
function convertToRoman(num) {
  let curNum = num;
  let result = '';
  //loop over object
  for(const [key,value] of Object.entries(obj)){
    //loop: curNum is bigger than value then key (roman) will be added to result and curNum has new value 
    while(curNum >= value){
      result += key;
      curNum -= value;
    }
  };
    return result;
}
console.log(convertToRoman(354));


