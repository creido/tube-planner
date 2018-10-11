import store from './store'

describe('store', () => {

  it('should initialise', () => {
    const actual = store.getState()
    const expected = {}

    console.log(actual)

    expect(actual).toEqual(expected)
  })

})
