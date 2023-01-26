const Character = require("./Character")

class Warrior extends Character {

    constructor(name, life, attack,defense, shield){

        super(name, life, attack, defense)
        this.shield = shield
        
        this.stance = 'attacking'

    }

    attackpts(target){

        if(this.stance === 'attacking'){

            //Busca dentro do extends o attack original do Character
            super.attackpts(target)

        }

    }

    switchStance(){

        if(this.stance === 'attacking'){

            this.stance = 'defending'
            this.defense += this.shield

        }else{

            this.stance = 'attacking'
            this.defense -= this.shield
        }


    }

}

module.exports = Warrior