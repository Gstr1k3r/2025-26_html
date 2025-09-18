import input from "./input.js";

async function getName() {
  name = await input("Adja meg a nevét: ");
  return name;
}

const name = await input("Kérek egy nevet: ");

console.log(`A megadott név: ${name}`);

let szam = await input("Kérek egy számot: ");

szam = Number(szam);

console.log(szam + 2);

let yourName = await getName();
console.log(`A neved: ${yourName}`);
