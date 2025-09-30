function timeConvert(num) {
  let maradek = 0;
  let ora = 0;

  if (num <= 0) return "00:00";
  else if (num < 10) return `00:0${num}`;
  else if (num < 60) return `00:${num}`;
  else if (num % 60 === 0) {
    ora = num / 60;
    if (ora < 10) ora = "0" + ora;
    return `${ora}:00`;
  } else {
    maradek = num % 60;
    ora = Math.floor(num / 60);

    if (maradek < 10) maradek = "0" + maradek;
    if (ora < 10) ora = "0" + ora;

    return `${ora}:${maradek}`;
  }
}
