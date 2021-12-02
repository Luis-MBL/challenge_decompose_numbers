import { sign } from 'jsonwebtoken';
import authConfig from '@shared/config/auth';

interface IResponse {
  token: string;
}

export default async function CreateSessionService(): Promise<IResponse> {
  const { secret } = authConfig.jwt;

  const token = sign({}, secret);
  return { token };
}
