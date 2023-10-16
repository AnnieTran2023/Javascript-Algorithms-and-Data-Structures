/* Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
*/
const amountCurrency = {
  "ONE HUNDRED": 10000, 
  "TWENTY": 2000,     
  "TEN": 1000,      
  "FIVE": 500,    
  "ONE": 100,       
  "QUARTER": 25,       
  "DIME": 10,           
  "NICKEL": 5,           
  "PENNY": 1             
};
// Due to the way floating-point numbers are represented in computers, I encounter small precision errors when performing arithmetic operations. 
// decimal numbers are converted by multiply 100
function checkCashRegister(price, cash, cid) {
  let status = '';
  let change = [];
  
//calculate change
  let changeSum = (cash - price) * 100;  
  let copyChangeSum = changeSum;
  
//get only arrays from cid that has value different from 0 then reverse to have descending value
  const filteredCid = cid.filter(arr => arr[1] !== 0).reverse();
  let cidSum = 0;
  
//loop over filteredCid array
  for (let [currency, value] of filteredCid) {
    let amount = 0;
    let currencyValue = amountCurrency[currency]; 
    let available = value * 100;
    cidSum += available;
    //condition gets the currency when change is larger than currencyValue and available from filterCid > 0
    while (changeSum >= currencyValue && available > 0) {
      amount += currencyValue;
      changeSum -= currencyValue;
      available -= currencyValue;
    }
    if (amount !== 0) {
      change.push([currency, amount / 100]); 
    }
  }
  changeSum = Math.round(changeSum);
  if (changeSum > 0) {
    status = 'INSUFFICIENT_FUNDS';
    change = [];
  } else if (changeSum === 0) {
    //condition if change from the beginning is equal to cidSum then status is closed
    if (copyChangeSum === cidSum) {
      status = 'CLOSED';
      change = [...cid];
    } else {
      status = 'OPEN';
    }
  }
  return { "status": status, "change": change };
};
