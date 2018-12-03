const classOptions = [
  {key: 'Barbarian', value: 'Barbarian', text: 'Barbarian'},
  {key: 'Bard', value: 'Bard', text: 'Bard'},
  {key: 'Cleric', value: 'Cleric', text: 'Cleric'},
  {key: 'Druid', value: 'Druid', text: 'Druid'},
  {key: 'Fighter', value: 'Fighter', text: 'Fighter'},
  {key: 'Monk', value: 'Monk', text: 'Monk'},
  {key: 'Paladin', value: 'Paladin', text: 'Paladin'},
  {key: 'Ranger', value: 'Ranger', text: 'Ranger'},
  {key: 'Rogue', value: 'Rogue', text: 'Rogue'},
  {key: 'Sorcerer', value: 'Sorcerer', text: 'Sorcerer'},
  {key: 'Warlock', value: 'Warlock', text: 'Warlock'},
  {key: 'Wizard', value: 'Wizard', text: 'Wizard'}
]

const options20 = (() => {
 const arr20 = [...Array(21).keys()].slice(1)
 return arr20.map(score => {
   return {key: score.toString(), value: score.toString(), text: score.toString()}
 })
})()

const options = {
  classOptions,
  options20
}

export default options
