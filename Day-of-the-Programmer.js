function julian(year) {
  return year % 4;
}
function gregorian(year) {
  if (year % 400 == 0) return true;
  else if (year % 4 == 0 && year % 100) return true;
  else return false;
}
function dayOfProgrammer(year) {
  // Write your code here
  if (year >= 1700 && year <= 1917) {
    if (!julian(year)) {
      return "12.09." + year;
    }
  } else if (year >= 1919 && year <= 2700) {
    if (gregorian(year)) {
      return "12.09." + year;
    }
  } else if (year == 1918) {
    return "26.09.1918";
  }
  return "13.09." + year;
}
