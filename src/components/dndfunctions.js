

var name1 = null
var name2 = null
var ac1 = null
var ac2 = null
var hp1 = null
var hp2 = null
var tohit1 = null
var tohit2 = null
var damagebonus1 = null
var damagebonus2 = null

var battleResult = ""


function updateStats() {
  name1 = document.getElementById('combatant1').value
  name2 = document.getElementById('combatant2').value
  ac1 = document.getElementById('combatant1ac').value
  ac2 = document.getElementById('combatant2ac').value
  hp1 = document.getElementById('combatant1hp').value
  hp2 = document.getElementById('combatant2hp').value
  tohit1 = document.getElementById('combatant1bab').value
  tohit2 = document.getElementById('combatant2bab').value
  damagebonus1 = document.getElementById('combatant1damagebonus').value
  damagebonus2 = document.getElementById('combatant2damagebonus').value
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1
}

function rollToHit(bonus, armor) {
    let roll = rollDie(20) + parseInt(bonus)
    if (roll >= armor) {
        return true
    }
    else {
        return false
    }
}

function rollDie(size) {
    return getRandomInt(size)
}


export function readOut() {

  let result = document.getElementById('readout');
  var li = document.createElement("li");

  let node = document.createTextNode(`${battleResult} \n`)

  li.appendChild(node);
  result.appendChild(li);
}

function clearBox() {
  let result = document.getElementById('readout');
  result.textContent = ''
}

export async function assignCombatant1Stats(link) {
  const response = await fetch(link);
  const jsonResult = await response.json();
  let name = document.getElementById('combatant1');
  name.value = jsonResult.name;
  let hp = document.getElementById('combatant1hp');
  hp.value = jsonResult.hit_points;
  let armor = document.getElementById('combatant1ac');
  armor.value = jsonResult.armor_class;
  let bab = document.getElementById('combatant1bab');
  if (Number.isInteger(jsonResult.actions[0].attack_bonus)) {
    bab.value = jsonResult.actions[0].attack_bonus;
  }
  else if (Number.isInteger(jsonResult.actions[1].attack_bonus)) {
    bab.value = jsonResult.actions[1].attack_bonus;
  }
  else {
    bab.value = 0;
  }
}



export async function assignCombatant2Stats(link) {
  const response = await fetch(link);
  const jsonResult = await response.json();
  let name = document.getElementById('combatant2');
  name.value = jsonResult.name;
  let hp = document.getElementById('combatant2hp');
  hp.value = jsonResult.hit_points;
  let armor = document.getElementById('combatant2ac');
  armor.value = jsonResult.armor_class;
  let bab = document.getElementById('combatant2bab');
  if (Number.isInteger(jsonResult.actions[0].attack_bonus)) {
    bab.value = jsonResult.actions[0].attack_bonus;
  }
  else if (Number.isInteger(jsonResult.actions[1].attack_bonus)) {
    bab.value = jsonResult.actions[1].attack_bonus;
  }
  else {
    bab.value = 0;
  }
  let damagebonus = document.getElementById('combatant2damagebonus');
  damagebonus.value = Math.floor(((jsonResult.strength - 10) / 2));
}

export function simulate(damage1, damage2) {
  updateStats()
  clearBox()
  let counter = 0
  do {
    counter = (counter += 1)
      if (rollToHit(tohit2, ac1)) {
        hp1 = (hp1 - ((+rollDie(damage2)) + +damagebonus2));
      }
      if (rollToHit(tohit1, ac2)) {
        hp2 = (hp2 - ((+rollDie(damage1)) + +damagebonus1));
      }
    battleResult = `${name1} HP ${hp1} ${name2} HP ${hp2}`
    readOut()
  }
  while ((hp1 > 0) && (hp2 > 0) && (counter < 100));

}
