/**
 * This file handles the model/models for
 * the perticular microservice
 */

import Joi from 'joi';

export const SchoolModel = Joi.object({
  name: Joi.string(),
  country: Joi.string(),
  region: Joi.string(),
  town: Joi.string(),
  hashtagId: Joi.string()
}).required();

export const SchoolModelRequired = Joi.object({
  name: Joi.string().required(),
  country: Joi.string().required(),
  region: Joi.string().required(),
  town: Joi.string().required(),
  hashtagId: Joi.string().required()
}).required();
