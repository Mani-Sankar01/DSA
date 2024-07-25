// Q1. find the sum of n

function findSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}

// Q2. Find the reverse numver

function findReverse(num) {
  let newNum = 0;
  while (num > 0) {
    let last = num % 10;
    newNum = newNum * 10 + last;
    num = Math.floor(num / 10);
  }
  return newNum;
}

// Check the number is palendrome or not

function isPalendrome(num) {
  let copyNum = num;
  let revNum = 0;
  while (num > 0) {
    revNum = revNum * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  if (copyNum == revNum) {
    return true;
  } else {
    return false;
  }
}

// Find the number of digits

function numDigits(num) {
  let abs = Math.abs(num);
  let count = 0;
  while (num > 0) {
    count++;
    num = Math.floor(num / 10);
  }
  return abs;
}

console.log(numDigits(15555));
