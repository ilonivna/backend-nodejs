import Joi from 'joi';

export const createUserSchema = Joi.object({
  name: Joi.string().min(1).max(30).required().messages({
    'string.min': 'Name should have at least {#limit} characters',
    'string.max': 'Name should have at most {#limit} characters',
    'any.required': 'Name is required',
  }),
  id: Joi.number().integer().min(1).required().messages({
    'any.required': 'id is required',
  }),
  username: Joi.string().min(1).max(30),
  email: Joi.string().email().required().messages({
    'any.required': 'email is required',
  }),
  address: {
    street: Joi.string().min(1).max(30),
    suite: Joi.string().min(1).max(30),
    city: Joi.string().min(1).max(30),
    zipcode: Joi.string().min(1).max(30),
    geo: {
        lat: Joi.string().min(1).max(30),
        lng: Joi.string().min(1).max(30),
    }
  },
  phone: Joi.string().min(3).max(30),
  website: Joi.string().min(1).max(30),
  company: {
    name: Joi.string().min(1).max(30),
    catchPhrase: Joi.string().min(1).max(30),
    bs: Joi.string().min(1).max(60)
  }
});


export const updateUserSchema = Joi.object({
    name: Joi.string().min(1).max(30),
    id: Joi.number().integer().min(1),
    username: Joi.string().min(1).max(30),
    email: Joi.string().email(),
    address: {
      street: Joi.string().min(1).max(30),
      suite: Joi.string().min(1).max(30),
      city: Joi.string().min(1).max(30),
      zipcode: Joi.string().min(1).max(30),
      geo: {
          lat: Joi.string().min(1).max(30),
          lng: Joi.string().min(1).max(30),
      }
    },
    phone: Joi.string().min(3).max(30),
    website: Joi.string().min(1).max(30),
    company: {
      name: Joi.string().min(1).max(30),
      catchPhrase: Joi.string().min(1).max(30),
      bs: Joi.string().min(1).max(60)
    }
  });
