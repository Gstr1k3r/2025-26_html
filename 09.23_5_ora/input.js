import readline from "readline";

/**
 * Get input from the terminal as a string.
 *
 * @param {string} question - The message to be printed to terminal.
 * @returns {Promise<string>} The user's input as a string.
 *
 * @example
 * let name = await input("Enter your name");
 */
const input = (question) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
};

export default input;
