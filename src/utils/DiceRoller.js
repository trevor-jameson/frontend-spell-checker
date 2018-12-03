const roll = (times, sides) => {

  // Check whether args are both numbers
  if (typeof times === 'number' && typeof sides === 'number') {

    // Create array length of times rolled and sides
    const randArr = new Array(times)
    randArr.fill(sides)

    // Roll dice and return sum
    const rollSum = randArr.reduce((acc, currentVal) => {
      return acc + (Math.floor(Math.random() * currentVal) + 1)
    }, 0)
    // Due to rounding error, if sum if less than the number of dice, return the dice
    return rollSum < times ? times : rollSum
  } else {
    console.log('roll takes two integers of times rolled and dice sides')
  }
}

const rollAdvantage = (times, sides) => {
  // Pick the highest of the two rolls
  return Math.max([roll(times, sides), roll(times, sides)])
}

const rollDisadvantage = (times, sides) => {
  // Pick the lowest of the two rolls
  return Math.min([roll(times, sides), roll(times, sides)])
}

// NOTE: There are 6 ability scores (AKA stats) assigned from randomly calculated values.
// Each value is calculated by rolling a 6 sided dice 4 times, removing the lowest roll, and summing the remaining 3 rolls
const rollStats = () => {
  let stats = new Array(6)
  stats.fill(1)
  // Cannot map an array of length 6 with undefined elems, used fill to make array map-able
  // Is this more confusing than using a for loop?
  return stats.map(stat => {

    // Roll 1d6 for each of 4 elems in new array
    let newRolls = new Array(4)
    newRolls.fill(1)
    let fullRolls = newRolls.map(() => roll(1, 6))

    // Remove the lowest dice on the 4 rolled
    const smallInd = fullRolls.indexOf(Math.min(...fullRolls))
    fullRolls.splice(smallInd, 1)

    // Sum the remaining 3 dice to generate stat score
    return fullRolls.reduce((acc, currentVal) => {
      return acc + currentVal
    }, 0)
  })
}


const dice = {
  roll,
  rollAdvantage,
  rollDisadvantage,
  rollStats
}

export default dice
