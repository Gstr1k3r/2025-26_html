function factorial(n) {
  let osszeg = 1;
  if (n == 0) return 1;
  if (n == 1) return 1;
  for (let i = 1; i <= n; i++) {
    osszeg += osszeg * i - osszeg;
  }
  return osszeg;
}
