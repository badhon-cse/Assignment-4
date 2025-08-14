function resultReport(marks) {
  let totalScore = 0;
  let pass = 0;
  let fail = 0;
  let result = {};

  if (Array.isArray(marks) == false) {
    return "Invalid";
  }

  for (mark of marks) {
    totalScore += mark;

    if (mark >= 40) {
      pass++;
    } else {
      fail++;
    }
  }
  result.finalScore = Math.round(totalScore / marks.length);
  result.pass = pass;
  result.fail = fail;
  return result;
}

console.log(resultReport([]));
