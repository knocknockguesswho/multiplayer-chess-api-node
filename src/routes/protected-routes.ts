import { Router } from 'express';
import { REQUESTS } from 'Helpers/map-request-helper';
import Validation from 'Middlewares/validation';
import * as controller from 'Controllers';
import TokenValidation from 'Middlewares/validations/token-validation';
const protectedRouter = Router();

protectedRouter.post('/auth/signout', TokenValidation.validate, Validation.run(REQUESTS.SIGNOUT), controller.Auth.signout);

protectedRouter.put('/user/update', TokenValidation.validate, Validation.run(REQUESTS.UPDATE_USER_BY_ID), controller.User.updateUserInfo);
protectedRouter.delete('/user/deactivate', TokenValidation.validate, Validation.run(REQUESTS.DEACTIVE_USER_BY_ID), controller.User.deactivateAccount);
protectedRouter.delete('/user/deactivate-all', TokenValidation.validate, Validation.run(REQUESTS.DEACTIVE_USERS), controller.User.deactivateAll);

export { protectedRouter };
