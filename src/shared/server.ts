import { serverHttp } from './http';

const APP_PORT = process.env.APP_PORT || 3105;

serverHttp.listen(APP_PORT, () => {
  console.log(`▶️ Server started on port ${APP_PORT} !`);
});
