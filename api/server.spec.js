function sum(a, b) {
  return a + b;
}

describe('sum function', () => {
  it('sums two numbers!!', () => {
    // an assert is about asserting
    // that actual output is equal to expected output
    const actualOutput = sum(1, 2);
    const expectedOutput = 3;

    expect(actualOutput).toBe(expectedOutput);
  });
  
  it('returns null if passed an arg which is not a number!!', () => {
  
  });
});
