function getOtosLotteryNumbers() {
  for (let i = 0; i < 5; i++) {
    const tomb = [];
    tomb.push(Math.random() * 100);
  }
  return tomb;
}

function getSortedtLotteryNumbers(tomb) {
  const sorted = tomb.sort((a, b) => a - b);
  return sorted;
}

// getNumberOfHits - két paramétert kap, egy tömböt lottószámokkal és egy tömböt a tippekkel. Visszaadja, hogy a tippekből hány egyezett meg a lottószámokkal

function getNumberOfHits(a, b) {
  let talalatok = 0;
  a.forEach((i) => {
    b.forEach((j) => {
      if (i === j) {
        talalatok++;
      }
    });
  });
  return talalatok;
}

//4. getMonthlyLotteryArrayNumbers - négy hét lottószámait adja vissza egy tömbben, mely a heti lottószámok tömbjét tartalmazza (meghívja a getOtosLotteryNumbers függvényt)

function getMonthlyLotteryArrayNumbers() {
  const tomb = [];
  for (let i = 0; i < 4; i++) {
    tomb.push(getOtosLotteryNumbers());
  }
  return tomb;
}

//5. getMonthlyLotteryNumbers - paraméterként kapja a négy hét lottószámainak tömbjét és visszaadja, hogy a hónapban mely számokat húzták ki. A viszatérő listában, minden szám csak egyszer szerepelhet.

function getMonthlyLotteryNumbers(a) {
  const kihuzott_szamok = [];
  a.forEach((i) => {
    if (!kihuzott_szamok.includes(i)) {
      kihuzott_szamok.push(i);
    }
  });
  return kihuzott_szamok;
}

//6. monthlyStatistics - paranéterként kapja a havi lottószámok tömbjét. Egy tömböt ad vissza, melynek elemei objectek, melyben a kulcs a lottószám, a value pedig, hogy a hónapban a számot hányszor húzták ki.

function monthlyStatistics(a) {
  const tomb = {};
  for (let i = 0; i < a.length; i++) {
    if (tomb.includes(a[i])) tomb[a[i]]++;
    else tomb[a[i]] = 1;
  }
  return tomb;
}
