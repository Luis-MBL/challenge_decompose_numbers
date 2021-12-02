import DecomposeNumberService from '@modules/decompose-numbers/services/DecomposeNumberService';
import RedisCache from '@shared/cache/RedisCache';
import { Request, Response } from 'express';

export default class DecomposeNumberController {
  public async findDivisors(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { number } = request.params;
    const divisors = await DecomposeNumberService(parseInt(number));

    await RedisCache.save(
      `FIND-DIVISORS-${JSON.stringify({ number })}`,
      divisors
    );
    return response.json(divisors);
  }
}
