function totalFine(fare) {
  if (fare > 0 && typeof fare == "number") {
    let fine = fare + fare * 0.2 + 30;
    return fine;
  }

  return "Invalid";
}

console.log(totalFine("Gorib tai ticket katinai"));
