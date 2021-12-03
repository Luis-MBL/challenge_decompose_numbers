import CreateSessionService from './CreateSessionService';

describe('CreateSession', () => {
  it('Should be able to create a new session', async () => {
    const session = await CreateSessionService();

    expect(session).toHaveProperty('token');
  });
});
