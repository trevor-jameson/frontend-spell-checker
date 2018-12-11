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
  let schoolsArr = schools.map(school => {
    return {key: school, value: school, text: school, name: school.toLowerCase()}
  })
  return schoolsArr
})()

const options20 = (() => {
 const arr20 = [...Array(21).keys()].slice(1)
 let optionsArr = arr20.map(score => {
   return {key: score.toString(), value: score.toString(), text: score.toString()}
 })
 return optionsArr
})()

const spellLevelOptions = (() => {
 const baseKeys = [...Array(10).keys()]

 let levelArr = baseKeys.map(score => {
   return {key: score.toString(), value: score.toString(), text: score.toString()}
 })

 // Cantrips have the value 0 but should be displayed as Cantrips in the dropdown
 levelArr[0] = {key: '0', value: '0', text: 'Cantrip'}
 return levelArr
})()

const options = {
  classOptions,
  spellClassOptions,
  spellSchoolOptions,
  spellLevelOptions,
  options20
}

export default options
