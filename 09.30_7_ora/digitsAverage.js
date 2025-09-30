function digitsAverage(input) {
  if (input < 0 || !Number.isInteger(input)) {
    throw new Error("Input must be a non-negative integer.");
  }

  let digits = input.toString().split("").map(Number);

  while (digits.length > 1) {
    let next = [];
    for (let i = 0; i < digits.length - 1; i++) {
      let avg = Math.ceil((digits[i] + digits[i + 1]) / 2);
      next.push(avg);
    }
    digits = next;
  }

  return digits[0];
}
