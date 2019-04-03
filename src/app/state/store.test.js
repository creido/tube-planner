import store from './store'

describe('store', () => {

  it('should initialise', () => {
    const actual = store.getState()
    const expected = {
      routes: {
        isFetching: false,
        routes: [],
        currentRoute: [],
      }
    }

    expect(actual).toEqual(expected)
  })

})
