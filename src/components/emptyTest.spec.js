// Must have at least one test file in this directory or Mocha will throw an error.

describe('Example test', () => {
  test('Null should be type of object', () => {
    expect(typeof null).toBe('object');
  });
})