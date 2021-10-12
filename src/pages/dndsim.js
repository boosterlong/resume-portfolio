import * as React from "react"
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import fetch from 'cross-fetch'


import Layout from "../components/layout"
import Seo from "../components/seo"
import { simulate, assignCombatant1Stats, assignCombatant2Stats } from "../components/dndfunctions"
import { MenuItem, Select, TextField, Autocomplete } from "@mui/material";



export default function SecondPage() {

  async function getMonsterDamage1(monster) {
    const response = await fetch(`https://www.dnd5eapi.co/api/monsters/${monster}`);
    const jsonResult = await response.json();
    try {
      if ((jsonResult.actions[0].attack_bonus) && (jsonResult.actions[0].damage[0].damage_dice).includes('d')) {
        let fullDamageDie = jsonResult.actions[0].damage[0].damage_dice
        let splitDamageDie = fullDamageDie.split('d')
        let splitDamageDieLessBonus = splitDamageDie[1].split('+')
        setDice1(splitDamageDieLessBonus[0])
        let bonus = document.getElementById('combatant1damagebonus');
        bonus.value = splitDamageDieLessBonus[1]
      }
      else {
        let fullDamageDie = jsonResult.actions[1].damage[0].damage_dice
        let splitDamageDie = fullDamageDie.split('d')
        let splitDamageDieLessBonus = splitDamageDie[1].split('+')
        setDice1(splitDamageDieLessBonus[0])
        let bonus = document.getElementById('combatant1damagebonus');
        bonus.value = splitDamageDieLessBonus[1]
      } }
    catch {
      setDice1(4)
  }}

  async function getMonsterDamage2(monster) {
    const response = await fetch(`https://www.dnd5eapi.co/api/monsters/${monster}`);
    const jsonResult = await response.json();
    try {
      if ((jsonResult.actions[0].attack_bonus) && (jsonResult.actions[0].damage[0].damage_dice).includes('d')) {
        let fullDamageDie = jsonResult.actions[0].damage[0].damage_dice
        let splitDamageDie = fullDamageDie.split('d')
        let splitDamageDieLessBonus = splitDamageDie[1].split('+')
        setDice2(splitDamageDieLessBonus[0])
        let bonus = document.getElementById('combatant2damagebonus');
        bonus.value = splitDamageDieLessBonus[1]
      }
      else {
        let fullDamageDie = jsonResult.actions[1].damage[0].damage_dice
        let splitDamageDie = fullDamageDie.split('d')
        let splitDamageDieLessBonus = splitDamageDie[1].split('+')
        setDice2(splitDamageDieLessBonus[0])
        let bonus = document.getElementById('combatant2damagebonus');
        bonus.value = splitDamageDieLessBonus[1]
      } }
    catch {
      setDice2(4)
  }}

  const pickMonster1 = (event) => {
    const target = `https://www.dnd5eapi.co/api/monsters/${event.value}`
    assignCombatant1Stats(target)
    getMonsterDamage1(event.value)
  }

  const pickMonster2 = (event) => {
    const target = `https://www.dnd5eapi.co/api/monsters/${event.value}`
    assignCombatant2Stats(target)
    getMonsterDamage2(event.value)
  }

  const [dice1, setDice1] = React.useState(6);

  const handleChange = (event) => {
    setDice1(event.target.value); 
  };
  const [dice2, setDice2] = React.useState(6);

  const handleChange2 = (event) => {
    setDice2(event.target.value);
  };

  var monsterList = []

  async function getMonsterArray() {
    const response = await fetch('https://www.dnd5eapi.co/api/monsters/');
    const jsonResult = await response.json();
    for (let i = 0; i < jsonResult.results.length; i++) {
      monsterList.push(jsonResult.results[i].index)
    }
  }

  getMonsterArray()



  return (
  <Layout>
    <Seo title="DnD Combat Sim" />
    <div class="content">
      <h4>
        Hey friends! This is my one-on-one, no-initiative, NPC duel simulator.
      </h4>
      <p>
        It is in a working state right now, and you're free to play around with it but there are some things missing that I will be adding.
      </p>
      <ul class="tight">
        <li>
          Critical hits
        </li>
        <li>
          Multi-die damage rolls
        </li>
        <li>
          Multiple attacks
        </li>
        <li>
          A cleaner, more verbose damage log
        </li>
      </ul>
      <p>
      </p>
    </div>
{/* Does not format great on mobile yet. But is passable for now. */}
      <div className="row">
        <div className="column" style={{backgroundColor:'#6B9FFF'}}>
          <h2>Combatant 1</h2>
          <form>
            <FormControl style={{marginBottom:'1rem'}}>
              <InputLabel
                htmlFor="combatant1">
                  Name
              </InputLabel>
              <OutlinedInput
                label="Name"
                id="combatant1"
                name="combatant1"
                defaultValue="Name"
                size="small"
              />
            </FormControl>
            <FormControl style={{marginBottom:'1rem'}}>
              <InputLabel
                htmlFor="combatant1hp">
                  HP
              </InputLabel>
              <OutlinedInput
                label="HP"
                type="number"
                id="combatant1hp"
                name="combatant1hp"
                defaultValue="0"
                size="small"/>
            </FormControl>
            <br />
            <FormControl style={{marginBottom:'1rem'}}>
              <InputLabel
                htmlFor="combatant1ac">
                  Armor Class
              </InputLabel>
              <OutlinedInput 
                label="Armor Class"
                type="number"
                id="combatant1ac"
                name="combatant1ac"
                defaultValue="0" 
                size="small"/>
            </FormControl>
            <br />
            <FormControl style={{marginBottom:'1rem'}}>
              <InputLabel htmlFor="combatant1bab">
                Bonus To Hit
              </InputLabel>
              <OutlinedInput 
                label="Bonus To Hit"
                type="number"
                id="combatant1bab"
                name="combatant1bab"
                defaultValue="0"
                size="small" />
            </FormControl>
            <br />
            <FormControl sx={{ minWidth: 120 }} style={{marginBottom:'1rem'}}>
              <InputLabel htmlFor="combatant1damage">
                Damage
              </InputLabel>
              <Select 
              labelId="combatant1damage"
              value={dice1}
              label="Damage" 
              onChange={handleChange}
              size="small"
              id="combatant1damage"
              >
              <MenuItem value={4}>d4</MenuItem>
              <MenuItem value={6}>d6</MenuItem>
              <MenuItem value={8}>d8</MenuItem>
              <MenuItem value={10}>d10</MenuItem>
              <MenuItem value={12}>d12</MenuItem>
              <MenuItem value={20}>d20</MenuItem>
              </Select>
              <p>Single Dice Only*</p>
            </FormControl>
            <FormControl sx={{ maxWidth: 120 }}>
              <InputLabel htmlFor="combatant1damagebonus">
                Bonus
              </InputLabel>
              <OutlinedInput 
                label="Bonus"
                type="number"
                id="combatant1damagebonus"
                name="combatant1damagebonus"
                defaultValue="1"
                size="small" />
            </FormControl>
            <br />
            <FormControl style={{marginBottom:'1rem'}}>
            <Autocomplete
              id="monster1"
              options={monsterList}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Monster" />}
            />
            <Button variant="contained" onClick={() => pickMonster1(document.getElementById('monster1'))}>
              Autofill from API
            </Button>
            </FormControl>
          </form>
        </div>

      {/* ^ Combatant 1 | v Combatant 2 */}

      <div className="column" style={{backgroundColor:'#FFCB6B'}}>
        <h2>Combatant 2</h2>
        <form>
            <FormControl style={{marginBottom:'1rem'}}>
              <InputLabel
                htmlFor="combatant2">
                  Name
              </InputLabel>
              <OutlinedInput
                label="Name"
                id="combatant2"
                name="combatant2"
                defaultValue="Name"
                size="small"
              />
            </FormControl>
            <FormControl style={{marginBottom:'1rem'}}>
              <InputLabel
                htmlFor="combatant2hp">
                  HP
              </InputLabel>
              <OutlinedInput
                label="HP"
                type="number"
                id="combatant2hp"
                name="combatant2hp"
                defaultValue="0"
                size="small"/>
            </FormControl>
            <br />
            <FormControl style={{marginBottom:'1rem'}}>
              <InputLabel
                htmlFor="combatant2ac">
                  Armor Class
              </InputLabel>
              <OutlinedInput 
                label="Armor Class"
                type="number"
                id="combatant2ac"
                name="combatant2ac"
                defaultValue="0" 
                size="small"/>
            </FormControl>
            <br />
            <FormControl style={{marginBottom:'1rem'}}>
              <InputLabel htmlFor="combatant2bab">
                Bonus To Hit
              </InputLabel>
              <OutlinedInput 
                label="Bonus To Hit"
                type="number"
                id="combatant2bab"
                name="combatant2bab"
                defaultValue="0"
                size="small" />
            </FormControl>
            <br />
            <FormControl sx={{ minWidth: 120 }} style={{marginBottom:'1rem'}}>
              <InputLabel id="combatant2damage">
                Damage
              </InputLabel>
              <Select 
              labelId="combatant2damage"
              value={dice2}
              label="Damage" 
              onChange={handleChange2}
              size="small"
              >
              <MenuItem value={4}>d4</MenuItem>
              <MenuItem value={6}>d6</MenuItem>
              <MenuItem value={8}>d8</MenuItem>
              <MenuItem value={10}>d10</MenuItem>
              <MenuItem value={12}>d12</MenuItem>
              <MenuItem value={20}>d20</MenuItem>
              </Select>
              <p>Single Dice Only*</p>
            </FormControl>
            <FormControl sx={{ maxWidth: 120 }}>
              <InputLabel htmlFor="combatant2damagebonus">
                Bonus
              </InputLabel>
              <OutlinedInput 
                label="Bonus"
                type="number"
                id="combatant2damagebonus"
                name="combatant2damagebonus"
                defaultValue="3"
                size="small" />
            </FormControl>
            <br />
            <FormControl style={{marginBottom:'1rem'}}>
            <Autocomplete
              id="monster2"
              options={monsterList}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Monster" />}
            />
            <Button variant="contained" onClick={() => pickMonster2(document.getElementById('monster2'))}>
              Autofill from API
            </Button>
            </FormControl>
          </form>
      </div>
    </div>
    <div className="centered">
      <Button variant="contained" onClick={() => simulate(dice1, dice2)}>
        Simulate Combat
      </Button>
    </div>
    <div className="readout-container">
      <ol className="readout" id="readout">
      {/* Battle data will populate here, should give both combatants the same amount of turns. */}
      </ol>
    </div>
    <div className="centered">
      <Button size="small" variant="contained" href="https://github.com/boosterlong/resume-portfolio">
        GitHub
      </Button>
    </div>
  </Layout>
  )
}
