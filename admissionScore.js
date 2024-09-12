function calculateFinalScore(obj) {
  if (typeof (obj) != "object" || obj === null)
    return ("Invalid Input");

  const { name, testScore, schoolGrade, isFFamily } = obj;
  let finalScore = testScore + schoolGrade;
  if (isFFamily == true) {
    finalScore += 20;
  }
  if (finalScore >= 80) {
    return true;
  }
  else return false;
}
// console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: true }))
// console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: false }))
// console.log(calculateFinalScore("hello"))
// console.log(calculateFinalScore({ name: "Rajib", testScore: 15, schoolGrade: 25, isFFamily: true }))
