const classOptions = [
  {key: 'Barbarian', value: 'Barbarian', text: 'Barbarian', name: 'barbarian'},
  {key: 'Bard', value: 'Bard', text: 'Bard', name: 'bard'},
  {key: 'Cleric', value: 'Cleric', text: 'Cleric', name: 'cleric'},
  {key: 'Druid', value: 'Druid', text: 'Druid', name: 'druid'},
  {key: 'Fighter', value: 'Fighter', text: 'Fighter', name: 'fighter'},
  {key: 'Monk', value: 'Monk', text: 'Monk', name: 'monk'},
  {key: 'Paladin', value: 'Paladin', text: 'Paladin', name: 'paladin'},
  {key: 'Ranger', value: 'Ranger', text: 'Ranger', name: 'ranger'},
  {key: 'Rogue', value: 'Rogue', text: 'Rogue', name: 'rogue'},
  {key: 'Sorcerer', value: 'Sorcerer', text: 'Sorcerer', name: 'sorcerer'},
  {key: 'Warlock', value: 'Warlock', text: 'Warlock', name: 'warlock'},
  {key: 'Wizard', value: 'Wizard', text: 'Wizard', name: 'wizard'}
]

const spellClassOptions = [
  {key: 'Bard', value: 'Bard', text: 'Bard', name: 'bard'},
  {key: 'Cleric', value: 'Cleric', text: 'Cleric', name: 'cleric'},
  {key: 'Druid', value: 'Druid', text: 'Druid', name: 'druid'},
  {key: 'Paladin', value: 'Paladin', text: 'Paladin', name: 'paladin'},
  {key: 'Ranger', value: 'Ranger', text: 'Ranger', name: 'ranger'},
  {key: 'Sorcerer', value: 'Sorcerer', text: 'Sorcerer', name: 'sorcerer'},
  {key: 'Warlock', value: 'Warlock', text: 'Warlock', name: 'warlock'},
  {key: 'Wizard', value: 'Wizard', text: 'Wizard', name: 'wizard'}
]

const spellSchoolOptions = (() => {
  const schools = ['Abjuration', 'Conjuration', 'Divination', 'Enchantment',
  'Evocation', 'Illusion', 'Necromancy', 'Transmutation', 'Universal']
  return schools.map(school => {
    return {key: school, value: school, text: school, name: school.toLowerCase()}
  })
})()

const options20 = (() => {
 const arr20 = [...Array(21).keys()].slice(1)
 return arr20.map(score => {
   return {key: score.toString(), value: score.toString(), text: score.toString()}
 })
})()

const levelOptions = (() => {
 const levelArr = [...Array(10).keys()]
 return levelArr.map(score => {
   return {key: score.toString(), value: score.toString(), text: score.toString()}
 })
})()

const options = {
  classOptions,
  spellClassOptions,
  spellSchoolOptions,
  levelOptions,
  options20
}

export default options
