function sumNumbers(array) {
  let currentTotal = 0; //1

  for (let i = 0; i < array.length; i++) {
    //1
    currentTotal += array[i]; //n
  }

  return currentTotal; //1
}

// T = 1 + 1 + n + 1
// T  = n
// O(n)

// console.log(sumNumbers([1, 3, 10])); //

// console.log(sumNumbers([2, 8, 15]));
// console.log(sumNumbers([]));
// console.log(sumNumbers([100]));

function fib(fibNumber) {
  const fibArray = [1, 1]; // 1

  for (let i = fibArray.length; i < fibNumber; i++) {
    //1
    fibArray.push(fibArray[i - 1] + fibArray[i - 2]); //n
  }

  return fibArray[fibArray.length - 1]; //1
}

// T = 1 + 1 + n + 1
// T = n
// O(n)

// console.log(fib(1));
// console.log(fib(2));
// console.log(fib(5));
// console.log(fib(10));
// console.log(fib(12));
// console.log(fib(1200));

function isPrime(number) {
  let isPrime = true; // 1
  for (let i = 0; i < number; i++) {
    // 1
    if (i !== 1 && i !== number && number % i === 0) {
      isPrime = false; // n
    }
  }

  return isPrime; // 1
}

// T = 1 + 1 + n + 1
// T = n
// O(n) - linear time

// console.log(isPrime(1)); // true
// console.log(isPrime(2)); // true
// console.log(isPrime(19)); // true
// console.log(isPrime(10)); // false
// console.log(isPrime(107)); // true
// console.log(isPrime(200)); // 200

function findSmallest(array) {
  let currentSmallest = array[0]; // 1

  for (let i = 0; i < array.length; i++) {
    // 1
    if (array[i] < currentSmallest) {
      currentSmallest = array[i]; // n
    }
  }

  return currentSmallest; // 1
}

// T = 1 + 1 + n + n + 1
// T = n
// O(n) - linear time

// console.log(findSmallest([5, 3, 7, 1])); // 1
// console.log(findSmallest([12, 6, 3, 7])); // 3
// console.log(findSmallest([2])); // 2
// console.log(findSmallest([10, 10, 10])); // 10

function isEven(number) {
  if (number % 2 != 0) {
    return false;
  }

  return true;
}

// T = 1
// O(1)

// console.log(isEven(1)); //false
// console.log(isEven(2)); //true
// console.log(isEven(10)); //true
// console.log(isEven(0)); //true (?)
// console.log(isEven(7)); //false

function fact(number) {
  let result = 1;

  for (let i = 1; i <= number; i++) {
    result = result * i;
  }

  return result;
}

// console.log(fact(3));
// console.log(fact(4));
// console.log(fact(5));

function recursiveFact(number) {
  if (number === 1) {
    return 1;
  }
  return number * recursiveFact(number - 1);
}
// each function call is 0(1)
// but we call multiple functions, n times
// so time complexity is O(n)

// console.log(recursiveFact(3)); // 6
// console.log(recursiveFact(4)); // 24
// console.log(recursiveFact(5)); // 120

function recursiveFib(number) {
  // base case
  if (number === 0 || number === 1) {
    return 1;
  }

  return recursiveFib(number - 1) + recursiveFib(number - 2);
}

// exponential time - O(2^n)
// for each executions, we can 2 new functions, and they each call 2 new, ..., ...
// each increase in the input number calls even more recursive functions

// console.log(recursiveFib(4));
// console.log(recursiveFib(5));

function dynamicFib(number, memo) {
  let result;

  // if we have already calculated this n, we can just return it
  if (memo[number]) {
    return memo[number];
  }

  if (number === 0 || number === 1) {
    result = 1;
  } else {
    result = dynamicFib(number - 1, memo) + dynamicFib(number - 2, memo);
  }

  memo[number] = result;

  return result;
}

// this dynamic version is now linear time
// O(n)

console.log(dynamicFib(4, {}));
console.log(dynamicFib(5, {}));
console.log(dynamicFib(50, {}));
