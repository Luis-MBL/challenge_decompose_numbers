import { Router } from 'express';

import SessionController from '@modules/sessions/infra/http/controllers/SessionController';

const sessionRouter = Router();
const sessionController = new SessionController();

sessionRouter.post('/', sessionController.createSession);

export default sessionRouter;
