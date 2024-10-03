//Iteration 1
// Soldier
class Soldier {

    //Class
    constructor (health, strength) {
        this.health = health;
        this.strength = strength;
    }

    //attack method
    attack () {
        return this.strength;
    }

    //receiveDamage()
    receiveDamage(damage) {
        this.health = this.health - damage;
    }
}

//Iteration 2
// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        super.receiveDamage(damage);
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } 
        
        return `${this.name} has died in act of combat`;
    }

    battleCry () {
        return "Odin Owns You All!";
    }
}

//Iteration 3
// Saxon
class Saxon extends Soldier{
    receiveDamage(damage) {
        super.receiveDamage(damage);
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        }
        return `A Saxon has died in combat`;
    }
}

//Iteration 4
// War
class War {
    constructor () {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking) {
        if (viking instanceof Viking) {
            this.vikingArmy.push(viking);
        }   
    }

    addSaxon(saxon) {
        if (saxon instanceof Saxon) {
            this.saxonArmy.push(saxon);
        }
    }

    vikingAttack () {
        //Viking random:
        const indexVik = Math.floor(Math.random() * this.vikingArmy.length);
        const vikingRandom = this.vikingArmy[indexVik];
        //Saxon Random:
        const indexSax = Math.floor(Math.random() * this.saxonArmy.length);
        const saxonRandom = this.saxonArmy[indexSax];
        //Saxon receive damage and store in result
        const result = saxonRandom.receiveDamage(vikingRandom.strength);
        //If Saxon is dead, remove of saxonArmy
        if (saxonRandom.health <= 0) {
            this.saxonArmy.splice(indexSax, 1);
        }
        return result;
    }

    saxonAttack() {
        //Viking random:
        const indexVik = Math.floor(Math.random() * this.vikingArmy.length);
        const vikingRandom = this.vikingArmy[indexVik];
        //Saxon Random:
        const indexSax = Math.floor(Math.random() * this.saxonArmy.length);
        const saxonRandom = this.saxonArmy[indexSax];
        //Viking receive damage and store in result
        const result = vikingRandom.receiveDamage(saxonRandom.strength);
        //If viking is dead, remove of vikingArmy
        if (vikingRandom.health <= 0) {
            this.vikingArmy.splice(indexVik, 1);
        }
        return result;
    }

    //Iteration 5
    showStatus () {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
