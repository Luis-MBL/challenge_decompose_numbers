interface IResponse {
  divisors: number[];
  prime_divisors: number[];
}

function isPrime(number: number) {
  for (let i = 2; i < number; i++)
    if (number % i === 0) {
      return false;
    }
  return number > 1;
}

export default async function DecomposeNumberService(
  number: number
): Promise<IResponse> {
  const divisors = [];
  const prime_divisors = [];

  for (let i = number; i > 0; i--) {
    if (number % i === 0) {
      divisors.push(i);
      if (isPrime(i)) {
        prime_divisors.push(i);
      }
    }
  }

  return { divisors, prime_divisors };
}
