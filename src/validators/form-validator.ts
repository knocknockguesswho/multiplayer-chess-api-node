import Joi, { ObjectSchema } from 'joi';

export const SCHEMAS = {
  first_name: Joi.string().alphanum().min(3).max(32).trim(),
  last_name: Joi.string().alphanum().min(3).max(32).trim(),
  username: Joi.string().alphanum().min(3).max(32).trim().pattern(new RegExp('^[a-zA-Z0-9]{6,32}$')),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,16}$')),
  avatar: Joi.string(), // TODO: should be validate on middleware
  rank_point: Joi.number().integer().min(0).max(10000),
  friend_list: Joi.array().items(Joi.string()),
  game_history: Joi.array().items(
    Joi.object({
      white: Joi.string().pattern(new RegExp('^[a-h1-8]{4}$')),
      black: Joi.string().pattern(new RegExp('^[a-h1-8]{4}$')),
    }),
  ),
};

export const signupSchema: ObjectSchema = Joi.object().keys({ ...SCHEMAS });
export const signinSchema: ObjectSchema = Joi.object().keys({
  username: SCHEMAS.username,
  password: SCHEMAS.password,
});
