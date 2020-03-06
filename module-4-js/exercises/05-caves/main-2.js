function identifyCaves(input) {
  const matrix = input;
  var caves = 0;

  for (var i = 0; i < matrix.length - 1; i++) {
    for (var j = 0; j < matrix[i].length - 1; j++) {
      var cave =
        matrix[i][j] === 0 &&
        matrix[i][j + 1] === 0 &&
        matrix[i + 1][j] === 0 &&
        matrix[i + 1][j + 1] === 0;

      const caveBottomPosition = matrix.length - 2;
      const caveRightPosition = matrix[i].length - 2;

      var caveBottomBorder =
        i < caveBottomPosition &&
        matrix[i + 2][j] === 1 &&
        matrix[i + 2][j + 1] === 1;

      var caveRightBorder =
        j < caveRightPosition &&
        matrix[i][j + 2] === 1 &&
        matrix[i + 1][j + 2] === 1;

      var caveInside = cave && caveBottomBorder && caveRightBorder;

      var caveOnBottom = cave && i === caveBottomPosition && caveRightBorder;

      var caveOnTheRigth = cave && j === caveRightPosition && caveBottomBorder;

      var caveRightBottomCorner =
        cave && j === caveRightPosition && i === caveBottomPosition;

      if (caveInside) {
        caves += 1;
      } else if (caveOnBottom) {
        caves += 1;
      } else if (caveOnTheRigth) {
        caves += 1;
      } else if (caveRightBottomCorner) {
        caves += 1;
      }
    }
  }
  return "The number of caves is: " + caves + "!";
}

identifyCaves([
  [0, 0, 0, 1, 1, 1, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 1, 0, 0, 1, 1],
  [0, 0, 0, 1, 1, 0, 1, 1, 0, 0],
  [0, 0, 0, 1, 1, 0, 1, 1, 0, 0],
  [1, 1, 1, 1, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 0, 0, 0, 0, 0]
]);

/* identifyCaves([
    [1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [1, 1, 1, 1, 1],
    [0, 0, 1, 0, 1],
    [0, 0, 1, 1, 0]
  ]); */
