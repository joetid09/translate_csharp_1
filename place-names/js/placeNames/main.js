function main() {
  // Put your code here
  const names = ["Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"]

  console.log("All Place Names")

  for (name in names) {
    console.log(`${names}`)
  };
}

main();