function reducedString(s) {
  let cnt = 0;
  let str = "";

  //   for one length string
  if (s.length == 1) {
    str += s[0];
  }

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      cnt += 1; // similar charater counting

      //   for last index of string
      if (i + 2 == s.length) {
        cnt += 1; // counting last character of string
        if (cnt % 2) {
          str += s[i + 1];
        }
      }
    } else {
      // last similar charater counting
      cnt += 1;
      //   if cnt isn't divided by 2 then store character of string
      if (cnt % 2) {
        str += s[i];
      }
      //   reinitializing
      cnt = 0;
      //   for last index of string
      if (i + 2 == s.length) {
        str += s[i + 1];
      }
    }
  }

  if (str === "") return "Empty String";
  return str;
}

function superReducedString(s) {
  let str1 = s,
    str2 = s;
  do {
    str1 = reducedString(str1);
    str2 = reducedString(str1);
  } while (str1 !== str2);

  return str2;
}

let result = superReducedString("aab");

console.log("result ", result);
