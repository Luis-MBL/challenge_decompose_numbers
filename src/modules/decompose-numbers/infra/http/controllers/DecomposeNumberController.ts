import DecomposeNumberService from '@modules/decompose-numbers/services/DecomposeNumberService';
import { Request, Response } from 'express';

export default class DecomposeNumberController {
  public async findDivisors(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { number } = request.params;
    const divisors = await DecomposeNumberService(parseInt(number));

    return response.json(divisors);
  }
}
