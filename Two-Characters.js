function alternate(s) {
  let str = s;
  let arr = new Set();

  for (let i = 0; i < str.length; i++) {
    //**  for unique array of this string  */
    arr.add(str[i]);
  }

  let altStr = [];
  let letters = arr.values();
  /* iterative object convert to array */
  letters = [...letters];

  for (let i = 0; i < letters.length; i++) {
    for (let j = i + 1; j < letters.length; j++) {
      /** creating regular Expression **/
      const regx = new RegExp(`[${letters[i]}${letters[j]}]`, "gi");
      /*find out matched character and return a array */
      let newStr = str.match(regx);

      let flag = 0;
      for (let k = 0; k < newStr.length - 1; k++) {
        /* find out alternate adjacent array */
        if (newStr[k] === newStr[k + 1]) {
          flag = 1;
          break;
        }
      }
      if (!flag) {
        altStr.push(newStr);
      }
    }
  }
  let result = [];
  /* longest array length */
  altStr.forEach((str) => {
    if (result.length < str.length) {
      result = str;
    }
  });

  return result.length;
}

alternate("beabeefeab");
