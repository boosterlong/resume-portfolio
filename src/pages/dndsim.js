import * as React from "react"
import { Link } from "gatsby"
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Layout from "../components/layout"
import Seo from "../components/seo"
import { simulate } from "../components/dndfunctions"
import { MenuItem, Select } from "@mui/material";


export default function SecondPage() {

  const [dice1, setDice1] = React.useState(4);

  const handleChange = (event) => {
    setDice1(event.target.value); 
  };
  const [dice2, setDice2] = React.useState(4);

  const handleChange2 = (event) => {
    setDice2(event.target.value);
  };


  return (
  <Layout>
    <Seo title="Page two" />
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
                defaultValue="Aggressor"
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
                defaultValue="50"
                size="small"/>
            </FormControl>
            <br />
            <FormControl style={{marginBottom:'1rem'}}>
              <InputLabel
                htmlFor="combatant1ac">
                  Armor className
              </InputLabel>
              <OutlinedInput 
                label="Armor className"
                type="number"
                id="combatant1ac"
                name="combatant1ac"
                defaultValue="15" 
                size="small"/>
            </FormControl>
            <br />
            <FormControl style={{marginBottom:'1rem'}}>
              <InputLabel htmlFor="combatant1bab">
                Bonus To Hit
              </InputLabel>
              <br />
              <OutlinedInput 
                label="Bonus To Hit"
                type="number"
                id="combatant1bab"
                name="combatant1bab"
                defaultValue="0"
                size="small" />
            </FormControl>
            <br />
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel id="combatant1damage">
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
            </FormControl>
            <FormControl sx={{ maxWidth: 120 }}>
              <InputLabel htmlFor="combatant1damagebonus">
                Bonus
              </InputLabel>
              <br />
              <OutlinedInput 
                label="Bonus"
                type="number"
                id="combatant1damagebonus"
                name="combatant1damagebonus"
                defaultValue="0"
                size="small" />
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
                defaultValue="Defender"
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
                defaultValue="50"
                size="small"/>
            </FormControl>
            <br />
            <FormControl style={{marginBottom:'1rem'}}>
              <InputLabel
                htmlFor="combatant2ac">
                  Armor className
              </InputLabel>
              <OutlinedInput 
                label="Armor className"
                type="number"
                id="combatant2ac"
                name="combatant2ac"
                defaultValue="15" 
                size="small"/>
            </FormControl>
            <br />
            <FormControl style={{marginBottom:'1rem'}}>
              <InputLabel htmlFor="combatant2bab">
                Bonus To Hit
              </InputLabel>
              <br />
              <OutlinedInput 
                label="Bonus To Hit"
                type="number"
                id="combatant2bab"
                name="combatant2bab"
                defaultValue="0"
                size="small" />
            </FormControl>
            <br />
            <FormControl sx={{ minWidth: 120 }}>
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
            </FormControl>
            <FormControl sx={{ maxWidth: 120 }}>
              <InputLabel htmlFor="combatant2damagebonus">
                Bonus
              </InputLabel>
              <br />
              <OutlinedInput 
                label="Bonus"
                type="number"
                id="combatant2damagebonus"
                name="combatant2damagebonus"
                defaultValue="0"
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
  </Layout>
  )
}

