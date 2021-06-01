import Joi, { ObjectSchema } from 'joi';
import { GeneralSchema } from 'Validators';

const { friend_id, ...SIGNUP_FORM_FIELD } = GeneralSchema.USER_SCHEMAS;

export const signupSchema: ObjectSchema = Joi.object().keys({ ...SIGNUP_FORM_FIELD });
export const signinSchema: ObjectSchema = Joi.object().keys({
  username: GeneralSchema.USER_SCHEMAS.username,
  password: GeneralSchema.USER_SCHEMAS.password,
});
export const createGameRoomSchema: ObjectSchema = Joi.object().keys({ ...GeneralSchema.GAME_ROOM_SCHEMA });
