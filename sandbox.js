let codeFreeze = Date.parse('December 5, 2018 14:00:00')
let remainingTime = codeFreeze - Date.parse(new Date())

let remainingHours = Math.round(remainingTime / 1000 / 60 / 60)
