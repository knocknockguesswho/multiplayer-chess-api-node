import { Router } from 'express';
import { REQUESTS } from 'Helpers/map-request-helper';
import Validation from 'Middlewares/validation';
import * as controller from 'Controllers';
const unprotectedRouter = Router();

// auth
unprotectedRouter.post('/auth/signup', Validation.run(REQUESTS.SIGNUP), controller.Auth.signup);
unprotectedRouter.post('/auth/signin', Validation.run(REQUESTS.SIGNIN), controller.Auth.signin);

// user
unprotectedRouter.get('/user', Validation.run(REQUESTS.GET_USERS), controller.User.getAll);
unprotectedRouter.get('/user/:id', Validation.run(REQUESTS.GET_USER_BY_ID), controller.User.getById);
unprotectedRouter.put('/user/update/:id', Validation.run(REQUESTS.UPDATE_USER_BY_ID), controller.User.updateById);
unprotectedRouter.delete('/user/deactivate/:id', Validation.run(REQUESTS.DEACTIVE_USER_BY_ID), controller.User.deactivateById);
unprotectedRouter.delete('/user/deactivate-all', Validation.run(REQUESTS.DEACTIVE_USERS), controller.User.deactivateAll);

export { unprotectedRouter };
