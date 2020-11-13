function main() {
  // created an array of all place names
  const names = ["Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"]

  //prints "all place names"
  console.log("All Place Names")

  console.log("")

  for (let name of names) {
    //Prints all the Places listed in names
    console.log(`${name}`)
  };

  console.log("");

  const theNames = names.filter(name => name.startsWith("The"))
  for (let name of theNames) {
    console.log(`${name}`)
  }

}
main()