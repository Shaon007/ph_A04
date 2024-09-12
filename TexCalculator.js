function calculateTax(income, expense) {
  if (income > 0 && expense > 0) {
    if (income >= expense) {
      const profit = income - expense;
      const tax = profit * 0.20;
      return tax;
    }
    else {
      return "Invalid Input";
    }
  }
  else {
    return "Invalid Input";
  }
}

// const income1 = 6000;
// const expense1 = -1500;

// const result = calculateTax(income1, expense1);
// console.log(result);