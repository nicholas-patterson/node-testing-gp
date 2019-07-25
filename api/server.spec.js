function sum(a, b) {
  if (
    typeof a !== 'number' ||
    typeof b !== 'number'
  ) {
    return null;
  }
  return a + b;
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
});
