import dice from '../src/utils/DiceRoller'

describe('DiceRoller', () => {

  test('exported dice object returns 4 functions', () => {
    // expect.objectContaining(dice)
  })

  test('dice roller returns sum within expected range', () => {
    // Low range roll testing
    expect(dice.roll(1, 4)).toBeGreaterThanOrEqual(1);
    expect(dice.roll(3, 6)).toBeLessThanOrEqual(4);

    // High range roll testing
    expect(dice.roll(6, 6)).toBeGreaterThanOrEqual(6);
    expect(dice.roll(6, 6)).toBeLessThanOrEqual(36);
  });

  test('rollStats() returns an array', () => {

  })

  test('rollStats() returns an array of size 6', () => {

  })

  test('rollStats() returns an array with only integer elements', () => {

  })
})
