/*
JavaScript Algorithms and Data Structures Projects: Telephone Number Validator
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
*/

function telephoneCheck(str) {
  //removing all non-digit characters from the string 
  const transformedStr = str.replace(/[^\d]/g,'');
  //check string length
  
}

telephoneCheck("555-555-5555");
