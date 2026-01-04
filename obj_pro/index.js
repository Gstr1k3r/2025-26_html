let foglalasok = [];
let sor = null;

function idoPercben(ido) {
  const parts = ido.split(":");
  const ora = Number(parts[0]);
  const perc = Number(parts[1]);
  return ora * 60 + perc;
}


function validalIdo(input) {
  if (!input.value) return;

  const parts = input.value.split(":");
  let ora = Number(parts[0]);
  let perc = Number(parts[1]);

  if (ora < 8) ora = 8;
  if (ora > 19) ora = 19;

  if (perc < 15) perc = 0;
  else if (perc < 45) perc = 30;
  else {
    perc = 0;
    ora++;
  }

  input.value =
    String(ora).padStart(2, "0") + ":" +
    String(perc).padStart(2, "0");
}


function utkozik(palya, mettol, meddig, aktualisIndex = null) {
  const ujStart = idoPercben(mettol);
  const ujEnd = idoPercben(meddig);

  return lista.some((foglalas, index) => {      //vegigmegy a listan, barmikor true-t ad vissza, akkor true lesz a fgv visszateresi ertek is
    if (index === aktualisIndex) return false;  // sajat magat ne nezze
    if (foglalas.palya !== palya) return false; // mas palya nem szamit

    const regiStart = idoPercben(foglalas.mettol);
    const regiEnd = idoPercben(foglalas.meddig);

    return ujStart < regiEnd && ujEnd > regiStart; // atfedes ne legyen
  });
}


function kirajzol() {
  const tbody = document.getElementById("tabla");
  tbody.innerHTML = "";

  foglalasok.forEach((elem, index) => {
    tbody.innerHTML += `
        <tr>
          <td>${elem.nev}</td>
          <td>${elem.palya}</td>
          <td>${elem.mettol}</td>
          <td>${elem.meddig}</td>
          <td>
            <button onclick="szerkeszt(${index})">✏️</button>
            <button onclick="torol(${index})">🗑️</button>
          </td>
        </tr>
      `;
  });
}

function hozzaad() {
  const nev = document.getElementById("nev").value.trim();
  const palya = document.getElementById("palya").value;
  const mettol = document.getElementById("mettol").value;
  const meddig = document.getElementById("meddig").value;

  if (!nev || !palya || !mettol || !meddig) {
    alert("Minden mezőt tölts ki!");
    return;
  }

  const start = idoPercben(mettol);
  const end = idoPercben(meddig);

  if (end <= start) {
    alert("A foglalás időtartama nem lehet 0 perc!");
    return;
  }

  if (utkozik(palya, mettol, meddig, sor)) {
    alert("Ez a pálya már foglalt ebben az időpontban!");
    return;
  }

  if (sor === null) {
    foglalasok.push({ nev, palya, mettol, meddig });
  } else {
    foglalasok[sor] = { nev, palya, mettol, meddig };
    sor = null;
  }

  document.getElementById("nev").value = "";
  document.getElementById("palya").value = "";
  document.getElementById("mettol").value = "";
  document.getElementById("meddig").value = "";

  kirajzol();
}

function torol(i) {
  foglalasok.splice(i, 1);
  kirajzol();
}

function szerkeszt(i) {
  const elem = foglalasok[i];
  document.getElementById("nev").value = elem.nev;
  document.getElementById("palya").value = elem.palya;
  document.getElementById("mettol").value = elem.mettol;
  document.getElementById("meddig").value = elem.meddig;
  sor = i;
}
