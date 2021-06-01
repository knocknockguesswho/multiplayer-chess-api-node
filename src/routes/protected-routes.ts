import { Router } from 'express';
import { REQUESTS } from 'Helpers/map-request-helper';
import Validation from 'Middlewares/validation';
import * as controller from 'Controllers';
const protectedRouter = Router();

protectedRouter.post('/user/add-friend', Validation.run(REQUESTS.ADD_FRIEND), controller.User.addFriendById);
protectedRouter.put('/user/update', Validation.run(REQUESTS.UPDATE_USER_BY_ID), controller.User.updateUserInfo);
protectedRouter.delete('/user/deactivate', Validation.run(REQUESTS.DEACTIVE_USER_BY_ID), controller.User.deactivateAccount);
protectedRouter.delete('/user/deactivate-all', Validation.run(REQUESTS.DEACTIVE_USERS), controller.User.deactivateAll);

export { protectedRouter };
