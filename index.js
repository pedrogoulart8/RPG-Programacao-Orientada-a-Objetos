const Mage = require("./Mage")
const Thief = require("./thief")
const Warrior = require("./Warrior")

const mageGandalf = new Mage('Gandalf', 90, 4, 2, 14) 
const gatunoThief = new Thief('Gatuno', 140, 22, 8)
const warriorAragorn = new Warrior('Aragorn', 200, 14, 12, 4)

console.table({mageGandalf, gatunoThief, warriorAragorn})

//Trocando posição de combate do Warrior
warriorAragorn.switchStance()

console.table({mageGandalf, gatunoThief, warriorAragorn})

//Mago se curando
mageGandalf.heal(mageGandalf)

console.table({mageGandalf, gatunoThief, warriorAragorn})

//Ataque
mageGandalf.attackpts(warriorAragorn)


console.table({mageGandalf, gatunoThief, warriorAragorn})

