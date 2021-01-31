function identifyCaves(input) {
  const outerArray = input;
  let innerArray = [];
  let wide = 0;
  let high = 0;
  let caves = 0;
  for (var i = 0; i < outerArray.length; i++) {
    innerArray = outerArray[i];
    for (var j = 0; j < innerArray.length; j++) {
      wide = innerArray[j] === 0 ? wide + 1 : 0;
      if (wide === 2 && (i === 0 || outerArray[i - 1][j] === 1)) {
        high = 1;
        for (var k = i + 1; k < outerArray.length; k++) {
          high =
            (outerArray[k][j - 1] && outerArray[k][j]) === 0 ? high + 1 : 0;
          if (high === 0) {
            break;
          }
          if (high === 2 && wide === 2) {
            caves += 1;
          }
        }
        high = 0;
      }
    }
    wide = 0;
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

