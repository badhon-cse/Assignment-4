function bestTeam(player1, player2) {
  team1Foul = player1.foul + player1.cardY + player1.cardR;
  team2Foul = player2.foul + player2.cardY + player2.cardR;

  if (typeof player1 == "object" && typeof player2 == "object") {
    if (team1Foul < team2Foul) {
      return player1.name;
    } else if (team1Foul == team2Foul) {
      return "Tie";
    }
    return player2.name;
  }
  return "Invalid";
}
