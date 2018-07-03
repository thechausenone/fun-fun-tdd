const { describe, Try } = require('riteway')
const { map, reduce, mapUsingReduce } = require('./index')

describe('map', async should => {
  const { assert } = should('Have the following fns...')

  assert({
    given: 'A collection of numbers and a multiply by two function',
    should: 'return every number multiply by 2',
    actual: map([1, 2, 3], number => number * 2),
    expected: [2, 4, 6],
  })

  assert({
    given: 'A collection of numbers and a multiply by two function',
    should: 'return every number multiply by 2',
    actual: map([2, 4, 3], number => number * 2),
    expected: [4, 8, 6],
  })

  assert({
    given: 'A collection of numbers and a multiply by two function',
    should: 'return every number multiply by 3',
    actual: map([2, 4, 3], number => number * 3),
    expected: [6, 12, 9],
  })
})

describe('reduce', async should => {
  const { assert } = should('Have the following fns...')

  assert({
    given: 'A collection of numbers and sum',
    should: 'return sum with default initial value',
    actual: reduce([1, 2, 3], (acc, number) => acc + number),
    expected: 6,
  })

  assert({
    given: 'A collection of numbers and sum',
    should: 'return sum with a starting value',
    actual: reduce([1, 2, 3], (acc, number) => acc + number, 5),
    expected: 11,
  })
})

describe('mapUsingReduce', async should => {
  const { assert } = should('Have the following fns...')

  assert({
    given: 'A collection of numbers and a multiply by two function',
    should: 'return every number multiply by 2',
    actual: mapUsingReduce([1, 2, 3], number => number * 2),
    expected: [2, 4, 6],
  })

  assert({
    given: 'A collection of numbers and a multiply by two function',
    should: 'return every number multiply by 2',
    actual: mapUsingReduce([2, 4, 3], number => number * 2),
    expected: [4, 8, 6],
  })

  assert({
    given: 'A collection of numbers and a multiply by two function',
    should: 'return every number multiply by 3',
    actual: mapUsingReduce([2, 4, 3], number => number * 3),
    expected: [6, 12, 9],
  })
})
