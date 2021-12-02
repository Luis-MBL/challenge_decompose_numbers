import 'express-async-errors';
import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import http from 'http';
import path from 'path';

import routes from './infra/routes';
import { errors } from 'celebrate';
import AppError from './errors/AppError';

const app = express();

app.use(express.static(path.join(__dirname, '..', '..', 'public')));
app.use(express.json());
app.use(routes);

app.use(errors());

app.use(
  (err: Error, _request: Request, response: Response, _next: NextFunction) => {
    console.error(err);
    if (err instanceof AppError) {
      console.error(err);

      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
);
const serverHttp = http.createServer(app);

export { serverHttp };
