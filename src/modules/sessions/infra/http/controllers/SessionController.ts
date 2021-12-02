import CreateSessionService from '@modules/sessions/services/CreateSessionService';
import { Request, Response } from 'express';

export default class SessionController {
  public async createSession(
    _request: Request,
    response: Response
  ): Promise<Response> {
    const token = await CreateSessionService();

    return response.json(token);
  }
}
