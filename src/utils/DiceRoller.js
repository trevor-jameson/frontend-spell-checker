const roll = (times, sides) => {

  // Check whether args are both numbers
  if (typeof times === 'number' && typeof sides === 'number') {

    // Create array length of times rolled and sides
    const randArr = new Array(times)
    randArr.fill(sides)

    // Roll dice and return sum
    const rollSum = randArr.reduce((acc, currentVal) => {
      return acc + Math.round(Math.random() * currentVal)
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

//// NOTE: FUNCTION UNDER CONSTRUCTION. DO NOT USE. RETURNS TOO NEAR AVERAGE.
const rollStats = () => {
  let stats = new Array(6)
  // Cannot map an array of length 6 with undefined elems
  // Is this more confusing than using a for loop?
  stats.fill(1)
  return stats.map(stat => {
    let newRolls = new Array(4)
    newRolls.fill(1)
    let fullRolls = newRolls.map(() => roll(1, 4))
    const smallInd = fullRolls.indexOf(Math.min(...fullRolls))
    fullRolls.splice(smallInd, 1)
    return fullRolls.reduce((acc, currentVal) => {
      return acc + currentVal
    }, 0)
  })
}


export const dice = {
  roll,
  rollAdvantage,
  rollDisadvantage,
}
