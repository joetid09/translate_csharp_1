function main() {
  console.log("Do you believe in magic?")
  console.log("------------------------")
  console.log("")

  allSpells = GetAllSpells()
  goodBook = MakeGoodSpellBook(allSpells)
  evilBook = MakeEvilSpellBook(allSpells)

  DisplaySpellBook(goodBook)
  console.log("")
  DisplaySpellBook(evilBook)

}

const DisplaySpellBook = (book) => {
  console.log(book.Title);
  for (let aSpell of book.Spells) {
    console.log(aSpell.Name)
  }
}

const MakeGoodSpellBook = (allSpells) => {
  goodBook = {}
  goodBook.Title = "Good Book";
  goodBook.Spells = allSpells.filter(spell => spell.IsEvil == false)
  return goodBook
}

const MakeEvilSpellBook = (allSpells) => {
  evilBook = {}
  evilBook.Title = "Evil Book";
  evilBook.Spells = allSpells.filter(spell => spell.IsEvil)
  return evilBook
}


const GetAllSpells = () => {
  return [
    {
      Name: "Turn enemy into a newt",
      IsEvil: true,
      EnergyRequired: 5.1
    },
    {
      Name: "Conjure some gold for a local charity",
      IsEvil: false,
      EnergyRequired: 2.99
    },
    {
      Name: "Give a deaf person the ability to heal",
      IsEvil: false,
      EnergyRequired: 12.2
    },
    {
      Name: "Make yourself emporer of the universe",
      IsEvil: true,
      EnergyRequired: 100.0
    },
    {
      Name: "Convince your relatives your political views are correct",
      IsEvil: false,
      EnergyRequired: 2921.5
    },
  ]
}

const SpellBook = {
  Title: null,
  Spells: null
}

main();