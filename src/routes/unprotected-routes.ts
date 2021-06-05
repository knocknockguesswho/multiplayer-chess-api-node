import { Router } from 'express';
import { REQUESTS } from 'Helpers/map-request-helper';
import Validation from 'Middlewares/validation';
import * as controller from 'Controllers';
const unprotectedRouter = Router();

// auth
unprotectedRouter.post('/auth/signup', Validation.run(REQUESTS.SIGNUP), controller.Auth.signup);
unprotectedRouter.post('/auth/signin', Validation.run(REQUESTS.SIGNIN), controller.Auth.signin);
unprotectedRouter.post('/auth/refresh-token', Validation.run(REQUESTS.REFRESH_TOKEN), controller.Auth.refreshToken);

// user
unprotectedRouter.get('/user', Validation.run(REQUESTS.GET_USERS), controller.User.getAll);
unprotectedRouter.get('/user/:id', Validation.run(REQUESTS.GET_USER_BY_ID), controller.User.getById);

export { unprotectedRouter };
