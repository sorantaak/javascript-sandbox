const x = Math.floor(Math.random() * 100) + 1;
const y = Math.floor(Math.random() * 50) + 1;

const sum = x + y;
const sumOutput = `${x} + ${y} = ${sum}`;
console.log(sumOutput);

// Get the difference
const difference = x - y;
const differenceOutput = `${x} - ${y} = ${difference}`;
console.log(differenceOutput);

// Get the product
const product = x * y;
const productOutput = `${x} * ${y} = ${product}`;
console.log(productOutput);

// Get the quotient
const quotient = x / y;
const quotientOutput = `${x} / ${y} = ${quotient}`;
console.log(quotientOutput);

// Get the remainder
const rm = x % y;
const rmOutput = `${x} % ${y} = ${rm}`;
console.log(rmOutput);
