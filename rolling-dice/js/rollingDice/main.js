function main() {
  console.log(("Let's roll some dice, baby!"));
  console.log("---------------------------");
  for (let i = 0; i < 10; i++) {
    die1 = Roll(1, 10)
    die2 = Roll(1, 10)
    sum = die1 + die2
    let message = `${die1} + ${die2} = ${sum}`
    if (die1 === die2) {
      message += " DOUBLES!"
    }
    console.log(message)
  }
}
const Roll = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min - 1)) + min;
}


main();