import DecomposeNumber from '@shared/utils/DecomposeNumber';

interface IResponse {
  divisors: number[];
  prime_divisors: number[];
}

export default async function DecomposeNumberService(
  number: number
): Promise<IResponse> {
  return DecomposeNumber(number);
}
