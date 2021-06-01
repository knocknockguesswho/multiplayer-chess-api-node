import Joi from 'joi';

export const USER_SCHEMAS = {
  first_name: Joi.string().alphanum().min(3).max(32).trim(),
  last_name: Joi.string().alphanum().min(3).max(32).trim(),
  username: Joi.string().alphanum().min(3).max(32).trim().pattern(new RegExp('^[a-zA-Z0-9]{6,32}$')),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,16}$')),
  avatar: Joi.string(), // TODO: should be validate on middleware
  rank_point: Joi.number().integer().min(0).max(10000),
  friend_list: Joi.array().items(Joi.string()),
  friend_id: Joi.string(), // ObjectId
  game_history: Joi.array().items(
    Joi.object({
      white: Joi.string().pattern(new RegExp('^[a-h1-8]{4}$')),
      black: Joi.string().pattern(new RegExp('^[a-h1-8]{4}$')),
    }),
  ), // chess notation
};

export const GAME_ROOM_SCHEMA = {
  members: Joi.object({
    white: Joi.array().items(Joi.string()),
    black: Joi.array().items(Joi.string()),
  }),
  board_detail: Joi.array(),
  ended_at: Joi.date(),
  winner: Joi.number().valid(0, 1, 2),
};
