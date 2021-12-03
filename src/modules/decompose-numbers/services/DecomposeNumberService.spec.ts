import DecomposeNumberService from './DecomposeNumberService';

describe('DecomposeNumber', () => {
  it('Should be able to decompose a number', async () => {
    const divisors = await DecomposeNumberService(50);

    expect(divisors).toEqual({
      divisors: [50, 25, 10, 5, 2, 1],
      prime_divisors: [5, 2],
    });
  });
});
