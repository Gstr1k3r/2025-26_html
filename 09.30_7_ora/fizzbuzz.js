import input from "./input.js";

let szam = await input("Kérem a számot: ");
console.log(fizzbuzz(szam));

function fizzbuzz(n) {
  return (n % 3 === 0 ? "Fizz" : "") + (n % 5 === 0 ? "Buzz" : "") || n;
}
