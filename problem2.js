function onlyCharacter(str) {
  let capitalCharacter = "";

  if (typeof str == "string") {
    for (character of str) {
      if (character != " ") {
        capitalCharacter = capitalCharacter + character;
      }
    }
    return capitalCharacter.toUpperCase();
  }

  return "Invalid";
}

console.log(onlyCharacter(true));
