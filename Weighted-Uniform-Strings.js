function weightedUniformStrings(s, queries) {
  // Write your code here
  let str = s;
  let weights = [];
  let sumOfWeigth = 0;
  for (let i = 0; i < str.length; i++) {
    /* calculate ascii value of character */
    let asciValue = str.codePointAt(i);
    let weight = asciValue - 97 + 1;

    sumOfWeigth += weight;
    /* weights and uniform substring weights are stored in a array */
    if (str[i - 1] && str[i] === str[i - 1]) {
      weights.push(sumOfWeigth);
    } else {
      weights.push(weight);
      sumOfWeigth = weight;
    }
  }

  let boolArr = [];
  queries.forEach((element) => {
    let flag = 0;
    /* if queries are exist in weights array then return yes otherwise no */
    for (let i = 0; i < weights.length; i++) {
      if (element === weights[i]) {
        boolArr.push("Yes");
        flag = 1;
        return;
      }
    }
    if (flag === 0) {
      boolArr.push("No");
    }
  });
  console.log(boolArr);
  return boolArr;
}

weightedUniformStrings("aaabbbbcccddd", [9, 7, 8, 12, 5]);
