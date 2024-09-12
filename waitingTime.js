function waitingTime(waitingTimes, serialNumber) {
  if (Array.isArray(waitingTimes) == false || typeof(serialNumber)!=="number") {
    return "Invalid Input"
  }
  const l = waitingTimes.length;
  let total_wait = 0;
  for (let i = 0; i < l; i++) {
    total_wait += waitingTimes[i];
  }
  const avg_time = Math.round(total_wait / l);
  const people_left = serialNumber - l - 1;
  const i_time = people_left * avg_time;

  if (people_left <= 0) {
    return 0;
  }
  return i_time;

 }

