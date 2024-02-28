const Joi = require("joi");
const { emailRegexp } = require("../constants/constants");

const userRegisterValidation = Joi.object({
   name: Joi.string().trim().required('Field "Name" should not be empty'),
   password: Joi.string().required("Enter password"),
   email: Joi.string().pattern(emailRegexp).required("Enter valid email"),
});

const userLoginValidation = Joi.object({
   password: Joi.string().required("Enter password"),
   email: Joi.string().pattern(emailRegexp).required("Enter valid email"),
});

const emailValidation = Joi.object({
   email: Joi.string().pattern(emailRegexp).required("Enter valid email"),
});

const searchQueryValidation = Joi.object({
   query: Joi.string().trim().min(3).required("Enter query, at least 3 characters"),
});

const postOwnRecipeValidation = Joi.object({
   title: Joi.string().trim().required("Enter Recipe title"),
   category: Joi.string().trim().required("Enter category"),
   description: Joi.string(),
   instructions: Joi.array().required("Enter instructions"),
   ingredients: Joi.array().required(),
   time: Joi.string(),
   recipeImg: Joi.string(),
});

module.exports = {
   userRegisterValidation,
   userLoginValidation,
   emailValidation,
   searchQueryValidation,
   postOwnRecipeValidation,
};
