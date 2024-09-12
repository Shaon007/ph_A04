function sendNotification(email) {
  const count = email.split("@").length - 1;
  if (count==1) {
    const count = email.includes("@");
    const [first, second] = email.split("@");
    console.log(first + " sent you an email from " + second);
    return { first, second };
  }
  else {
    console.log("Invalid Email");
  }
}
// sendNotification("nadim.naem5@outlook.com")
