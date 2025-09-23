//     <!-- Hozz létre egy js programot, mely végrehatja a követkető feladatokat:

// 0. hozz létre egy txt változót és add meg a változó értékét - legalább 20 karakterből álljon
// 1. Írasd ki a konzolba az első 5 karaktert
// 2. Írasd ki a konzolba a 3. tól a 8-ik karakterig
// 3. Írasd ki a konzolba az 5. karaktertől a végéig
// 4. Írasd ki a konzolba az 5. karaktertől 6 karakter hosszan
// 5. Írasd ki a konzolba a txt-t nagybetűkkel
// 6. Írasd ki a konzolba a txt változót, hogy minden második karakter nagybetű legyen
// 7. Írasd ki a konzolba a txt-t úgy, hogy minden "e" karakter "E" legyen
// 8. Készíts tömböt a txt-ből az "e" betűk szerint elválasztva. Ítasd ki a tömböt.

// Szorgalmi:
// Mindegyik feladathoz hozz létre egy-egy függvényt. -->

import input from "./input.js";

//0. feladat
let txt = await input("Kérem a stringet: ");
//1. feladat
console.log("\n1. Írasd ki a konzolba az első 5 karaktert!");
elsoOt(txt);
// console.log(txt.substring(0, 5));
//2. feladat
console.log("\n2. Írasd ki a konzolba a 3. tól a 8-ik karakterig");
haromtolNyolcig(txt);
// console.log(txt.substring(2, 8));
//3. feladat
console.log("\n3. Írasd ki a konzolba az 5. karaktertől a végéig");
ottolVegig(txt);
// console.log(txt.substring(5));
//4. feladat
console.log("\n4. Írasd ki a konzolba az 5. karaktertől 6 karakter hosszan");
ottolHatKarakter(txt);
// console.log(txt.substring(4, 10));
//5. feladat
console.log("\n5. Írasd ki a konzolba a txt-t nagybetűkkel");
nagyBetukkel(txt);
// console.log(txt.toUpperCase());
//6. feladat
console.log(
  "\n6. Írasd ki a konzolba a txt változót, hogy minden második karakter nagybetű legyen"
);
mindenMasodikKarakterNagy(txt);
// let mindenMasodik = "";
// for (let i = 0; i < txt.length; i++) {
//   if (i % 2 == 0) {
//     mindenMasodik += txt[i];
//   } else {
//     mindenMasodik += txt[i].toUpperCase();
//   }
// }
// console.log(mindenMasodik);
//7. feladat
console.log(
  "\n7. Írasd ki a konzolba a txt-t úgy, hogy minden 'e' karakter 'E' legyen"
);
eHelyettE(txt);
// console.log(txt.replaceAll("e", "E"));
//8. feladat
console.log(
  "\n// 8. Készíts tömböt a txt-ből az 'e' betűk szerint elválasztva. Ítasd ki a tömböt."
);
// var tomb = txt.split("e");
// console.log(tomb);
eMentenSplit(txt);

function elsoOt(txt) {
  return console.log(txt.substring(0, 5));
}

function haromtolNyolcig(txt) {
  return console.log(txt.substring(2, 8));
}
function ottolVegig(txt) {
  return console.log(txt.substring(5));
}
function ottolHatKarakter(txt) {
  return console.log(txt.substring(4, 10));
}
function nagyBetukkel(txt) {
  return console.log(txt.toUpperCase());
}
function mindenMasodikKarakterNagy(txt) {
  let mindenMasodik = "";
  for (let i = 0; i < txt.length; i++) {
    if (i % 2 == 0) {
      mindenMasodik += txt[i];
    } else {
      mindenMasodik += txt[i].toUpperCase();
    }
  }
  return console.log(mindenMasodik);
}

function eHelyettE(txt) {
  return console.log(txt.replaceAll("e", "E"));
}

function eMentenSplit(txt) {
  var tomb = txt.split("e");
  return console.log(tomb);
}
