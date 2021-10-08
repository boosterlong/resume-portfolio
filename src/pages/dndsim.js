import * as React from "react"
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

import Layout from "../components/layout"
import Seo from "../components/seo"
import { simulate, assignCombatant1Stats, assignCombatant2Stats } from "../components/dndfunctions"
import { MenuItem, Select } from "@mui/material";


export default function SecondPage() {


  const [monster1, setMonster1] = React.useState('')

  const pickMonster1 = (event) => {
    setMonster1(event.target.value);
    const target = `https://www.dnd5eapi.co/api/monsters/${event.target.value}`
    assignCombatant1Stats(target)
  }

  const [monster2, setMonster2] = React.useState('')

  const pickMonster2 = (event) => {
    setMonster2(event.target.value);
    const target = `https://www.dnd5eapi.co/api/monsters/${event.target.value}`
    assignCombatant2Stats(target)
  }

  const [dice1, setDice1] = React.useState(8);

  const handleChange = (event) => {
    setDice1(event.target.value); 
  };
  const [dice2, setDice2] = React.useState(12);

  const handleChange2 = (event) => {
    setDice2(event.target.value);
  };


  return (
  <Layout>
    <Seo title="DnD Combat Sim" />
{/* Does not format great on mobile yet. But is passable for now. */}
      <div className="row">
        <div className="column" style={{backgroundColor:'#6B9FFF'}}>
          <h2>Combatant 1</h2>
          <form>
            <FormControl sx={{ minWidth: 120 }} style={{marginBottom:'1rem'}}>
              <InputLabel htmlFor="Monster1">
                Monster
              </InputLabel>
              <Select 
              labelId="Monster1"
              value={monster1}
              label="Monster" 
              onChange={pickMonster1}
              size="small"
              id="Monster1"
              >
              <MenuItem value={'guard'}>Guard</MenuItem>
              <MenuItem value={'orc'}>Orc</MenuItem>
              <MenuItem value={'adult-red-dragon'}>Adult Red Dragon</MenuItem>
              <MenuItem value={'cultist'}>Cultist</MenuItem>
              <MenuItem value={'bandit'}>Bandit</MenuItem>
              </Select>
            </FormControl>
            <br />
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
              <p>Does not autofill yet</p>
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
          </form>
        </div>

      {/* ^ Combatant 1 | v Combatant 2 */}

      <div className="column" style={{backgroundColor:'#FFCB6B'}}>
        <h2>Combatant 2</h2>
        <form>
          <FormControl sx={{ minWidth: 120 }} style={{marginBottom:'1rem'}}>
              <InputLabel htmlFor="Monster2">
                Monster
              </InputLabel>
              <Select 
              labelId="Monster2"
              value={monster2}
              label="Monster" 
              onChange={pickMonster2}
              size="small"
              id="Monster1"
              >
              <MenuItem value={'guard'}>Guard</MenuItem>
              <MenuItem value={'orc'}>Orc</MenuItem>
              <MenuItem value={'adult-red-dragon'}>Adult Red Dragon</MenuItem>
              <MenuItem value={'cultist'}>Cultist</MenuItem>
              <MenuItem value={'bandit'}>Bandit</MenuItem>
              </Select>
            </FormControl>
            <br />
            <FormControl style={{marginBottom:'1rem'}}>
              <InputLabel
                htmlFor="combatant2">
                  Name
              </InputLabel>
              <OutlinedInput
                label="Name"
                id="combatant2"
                name="combatant2"
                defaultValue="Orc"
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
                defaultValue="15"
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
                defaultValue="13" 
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
                defaultValue="5"
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
              <p>Does not autofill yet</p>
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

