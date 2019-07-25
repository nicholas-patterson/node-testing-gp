function sum(...numbers) {
  // work to do...
  return numbers.reduce((acc, n) => acc + n);
}

describe('sum function', () => {
  it('sums two numbers!!', () => {
    // an assert is about asserting
    // that actual output is equal to expected output

    expect(sum(1, 2)).toBe(3);
  });

  it('returns null if passed an arg which is not a number!!', () => {
    expect(sum(null, 3)).toBe(null);
    expect(sum(7, undefined)).toBe(null);
    expect(sum(7, NaN)).toBe(null);
  });

  it('can add up any number of number arguments', () => {
    expect(sum(1, 2, 3)).toBe(6);
  });
});
