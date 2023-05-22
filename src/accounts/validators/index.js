//* validators/register.validator.js
import Joi from "joi";

const accountSchema = Joi.object({
  firstName: Joi.string().min(1).max(30).required(),
  lastName: Joi.string().min(1).max(30).required(),
  email: Joi.string().email().lowercase().required(),
  password: Joi.string()
    .min(7)
    .max(20)
    .pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-+=]).+$/)
    .required(),
});

export default { account: accountSchema };
