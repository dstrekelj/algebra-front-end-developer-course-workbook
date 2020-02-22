function countPrimeNumbers(from, to) {
  var array = [];
  var count = 0;

  //ako zadani niz nije inkrementalan zamijeni from i to
  if (from > to) {
    var temp = from;
    from = to;
    to = temp;
  }

  //generiraj niz
  for (var i = from; i <= to; i++) {
    array[i - from] = i;
  }

  //petlja kroz svaki element niza
  array.forEach(element => {
    var test = 0;

    //provjera je li pojedini element djeljiv brojevima od 2 do element/2
    for (var i = 2; i <= element / 2; i++) {
      if (element % i === 0) {
        test = 1;
      }
    }

    //u slučaju da je element niza manji od 2
    if (element < 2) {
      test = 1;
    }

    //ako nakon provjere nema cjelobrojnih količnika, uvećaj brojač prostih brojeva za 1
    if (test === 0) {
      count += 1;
    }
  });

  return count;
}

console.log(countPrimeNumbers(10, 100));
