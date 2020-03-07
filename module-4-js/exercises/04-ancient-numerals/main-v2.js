function parseAncientText(input) {
  // prettier-ignore
  const ancientNumerals = 
    [
    ["....", "****", "****", "....", "....", "*...", "*..*", ".*..", ".**.", "****"],
    ["....", "....", "....", "****", "****", "*...", "*..*", ".*..", ".**.", "****"],
    ["....", "....", "....", "....", "****", "*...", "*..*", ".*..", ".**.", "****"],
    ["....", "....", "****", "....", "....", "*...", "*..*", ".*..", ".**.", "****"]
    ];

  var parsedNumber = "";
  var solution = "";

  for (var i = 0; i < input.length; i++) {
    for (
      var ancientNumberVertical = 0;
      ancientNumberVertical < input[i][0].length;
      ancientNumberVertical++
    ) {
      for (
        var ancientNumeral = 0;
        ancientNumeral < ancientNumerals[0].length;
        ancientNumeral++
      )
        if (
          input[i][0][ancientNumberVertical] +
            input[i][1][ancientNumberVertical] +
            input[i][2][ancientNumberVertical] +
            input[i][3][ancientNumberVertical] ===
          ancientNumerals[0][ancientNumeral] +
            ancientNumerals[1][ancientNumeral] +
            ancientNumerals[2][ancientNumeral] +
            ancientNumerals[3][ancientNumeral]
        ) {
          parsedNumber += ancientNumeral;
        }
    }
    solution += parsedNumber + " ";
    parsedNumber = "";
  }
  return solution.trim();
}

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
