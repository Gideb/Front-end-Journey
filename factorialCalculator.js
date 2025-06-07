
const num = 4;

function factorialCalculator(number) {
  let result = 1;

  for(let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;

  
}

const factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`;

console.log(resultMsg);


