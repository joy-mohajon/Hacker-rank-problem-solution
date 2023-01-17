function icecreamParlor(m, arr) {
  // Write your code here
  let rslt = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === m) {
        rslt.push(i + 1);
        rslt.push(j + 1);
        return rslt;
      }
    }
  }
}

icecreamParlor(100, [5, 75, 25]);
