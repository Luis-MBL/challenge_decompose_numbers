import decomposeNumberRouter from '@modules/decompose-numbers/infra/http/routes/decompose.number.routes';
import sessionRouter from '@modules/sessions/infra/http/routes/session.routes';
import { Request, Response, Router } from 'express';

const routes = Router();

routes.use('/decompose-numbers', decomposeNumberRouter);
routes.use('/sessions', sessionRouter);

export default routes;
