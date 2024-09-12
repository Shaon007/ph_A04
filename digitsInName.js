function checkDigitsInName(name) {
  const array = name.split("")

  if (typeof name !== "string")
    return "Invalid Input"

  for (let a of array) {
    if (!isNaN(a) && a !== '') {
      return true;
    }
  }
  return false;
}
console.log(checkDigitsInName("Raj123"));
console.log(checkDigitsInName("Suman"));
console.log(checkDigitsInName("Name2024"));
console.log(checkDigitsInName("!@#"));
// console.log(checkDigitsInName(["Raj"]));