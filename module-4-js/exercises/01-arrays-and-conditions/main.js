function countPrimeNumbers(from, to) {
  //brojač prostih brojeva u nizu
  var count = 0;

  //ako zadani niz nije inkrementalan zamijeni from i to
  if (from > to) {
    var temp = from;
    from = to;
    to = temp;
  }

  //petlja kroz svaki element niza
  for (var i = from; i <= to; i++) {
    var test = 0;

    //provjera je li pojedini element djeljiv brojevima od 2 do element/2
    for (var j = 2; j <= i / 2; j++) {
      if (i % j == 0) {
        test = 1;
      }
    }

    //u slučaju da je element niza manji od 2
    if (i < 2) {
      test = 1;
    }

    //ako nakon provjere nema cjelobrojnih količnika, pridodaj brojaču prostih brojeva
    if (test == 0) {
      count += 1;
    }
  }

  return count;
}

console.log(countPrimeNumbers(10, 100));
