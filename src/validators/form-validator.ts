import Joi, { ObjectSchema } from 'joi';
import { GeneralSchema } from 'Validators';

export const signupSchema: ObjectSchema = Joi.object().keys({ ...GeneralSchema.SCHEMAS });
export const signinSchema: ObjectSchema = Joi.object().keys({
  username: GeneralSchema.SCHEMAS.username,
  password: GeneralSchema.SCHEMAS.password,
});
