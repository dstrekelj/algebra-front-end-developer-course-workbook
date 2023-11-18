/**
 * Write a program that will rate a password
 * according to the following rules:
 * 1. At least 8 characters long
 * 2. At least one number
 * 3. At least one uppercase character
 * 4. At least one lowercase character
 * 5. At least one special character: !, #, (, ), ?, _
 *
 * For every rule that the password passes, give the
 * password 1 point.
 *
 * Example:
 * 12345678 - 2 points (rules 1 and 2)
 * 1234567 - 1 point (rules 2)
 */

var testCases = [
  { password: "12345678", rating: 2 },
  { password: "1234567", rating: 1 },
];

function checkMinimumLength(password) {
  return password.length >= 8;
}

function checkPassword(password) {
  var rating = 0;
  if (checkMinimumLength(password)) {
    rating++;
  }
  return rating;
}

for (var i = 0; i < testCases.length; i++) {
  var testCase = testCases[i];
  console.log(testCase, checkPassword(testCase.password));
}

/**
 * 3. Napišite funkciju testRule() koja će provjeriti za jedno od pravila
 * (po vašem izboru) barem jedan napisani slučaj. Funkcija treba provjeriti
 * hoće li pravilo uistinu za zadani input vratiti očekivani output.
 * 3a. Ispisati u konzolu poruku "Expected: _očekivano_, Got: _dobiveno_" za provjeru
 */

// Input: 12345678, Output: true
function testRule(rule, input, output) {
  console.log("Input:", input, "Expected:", output, "Got:", rule(input));
}

testRule(checkMinimumLength, "12345678", true);
testRule(checkMinimumLength, "1234567", false);

module.exports = {
  checkPassword,
};
