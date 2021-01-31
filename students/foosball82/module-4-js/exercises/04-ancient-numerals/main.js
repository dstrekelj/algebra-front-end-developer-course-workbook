// Polyfill - array.prototype.findindex
// https://tc39.github.io/ecma262/#sec-array.prototype.findindex
if (!Array.prototype.findIndex) {
  Object.defineProperty(Array.prototype, "findIndex", {
    value: function(predicate) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== "function") {
        throw new TypeError("predicate must be a function");
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return k.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return k;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return -1.
      return -1;
    },
    configurable: true,
    writable: true
  });
}

//04-ancient-numerals

function parseAncientText(input) {
  var number = [];
  var numerals = [];
  var numeral = [];
  var numberChar;
  var parsedNumber = "";
  var solution = "";
  const zero = ["....", "....", "....", "...."];
  const one = ["****", "....", "....", "...."];
  const two = ["****", "....", "....", "****"];
  const three = ["....", "****", "....", "...."];
  const four = ["....", "****", "****", "...."];
  const five = ["*...", "*...", "*...", "*..."];
  const six = ["*..*", "*..*", "*..*", "*..*"];
  const seven = [".*..", ".*..", ".*..", ".*.."];
  const eight = [".**.", ".**.", ".**.", ".**."];
  const nine = ["****", "****", "****", "****"];
  const ancientNumerals = [
    zero,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine
  ];

  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < input[i].length; j++) {
      number.push(input[i][j]);
    }
    for (var k = 0; k < number[0].length; k++) {
      for (var l = 0; l < number.length; l++) {
        numerals.push(number[l][k]);
      }
    }
    //console.log(numeral);

    for (var n = 0; n < numerals.length / 4; n++) {
      numeral = [
        numerals[n * 4],
        numerals[n * 4 + 1],
        numerals[n * 4 + 2],
        numerals[n * 4 + 3]
      ];
      for (var m = 0; m < ancientNumerals.length; m++) {
        if (JSON.stringify(numeral) == JSON.stringify(ancientNumerals[m])) {
          numberChar = ancientNumerals[m];
          parsedNumber =
            parsedNumber +
            //ancientNumerals.findIndex(element => element === numberChar);
            ancientNumerals.findIndex(function(element) {
              if (element === numberChar) return true;
            });
        }
      }
    }
    solution = solution + parsedNumber + " ";
    parsedNumber = "";
    numerals = [];
    number = [];
  }
  return console.log(solution.trim());
}

/* parseAncientText([
  [
    ["****", "****"],
    ["****", "...."],
    ["****", "...."],
    ["****", "****"]
  ],
  [["...."], ["****"], ["****"], ["...."]]
]); */

parseAncientText([
  [
    ["****", "....", "....", "****"],
    ["....", "****", "....", "****"],
    ["....", "****", "....", "****"],
    ["****", "....", "....", "****"]
  ],
  [
    ["*..*", ".*.."],
    ["*..*", ".*.."],
    ["*..*", ".*.."],
    ["*..*", ".*.."]
  ],
  [
    ["....", "*...", ".**."],
    ["****", "*...", ".**."],
    ["....", "*...", ".**."],
    ["....", "*...", ".**."]
  ],
  [["****"], ["...."], ["...."], ["...."]]
]);
