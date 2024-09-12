function checkDigitsInName(name) {
  if (typeof name !== "string")
    return "Invalid Input"
  const arr = name.split("")
  for (let a of arr) {
    if (!isNaN(a) && a !== '') {
      return true;
    }
  }
  return false;
}
