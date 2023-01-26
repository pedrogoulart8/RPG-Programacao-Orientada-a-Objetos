const Character = require("./Character")

class Mage extends Character{

    constructor(name, life, attack, defense, magic ){

        super(name, life, attack, defense)
        this.magic = magic

    }

    attackpts(target){

        target.life -= (this.attack + this.magic) - target.defense

    }

    heal(target){

        target.life += this.magic * 2

    }

}

module.exports = Mage