import { celebrate, Segments, Joi } from 'celebrate';
import { Router } from 'express';

import DecomposeNumberController from '@modules/decompose-numbers/infra/http/controllers/DecomposeNumberController';
import authentication from '@shared/infra/middlewares/authentication';
import { recoverCache } from '@shared/infra/middlewares/cache';

const decomposeNumberRouter = Router();
const decomposeNumberController = new DecomposeNumberController();

decomposeNumberRouter.use(authentication);

decomposeNumberRouter.get(
  '/:number',
  celebrate({
    [Segments.PARAMS]: {
      number: Joi.number().required(),
    },
  }),
  recoverCache('FIND-DIVISORS'),
  decomposeNumberController.findDivisors
);

export default decomposeNumberRouter;
