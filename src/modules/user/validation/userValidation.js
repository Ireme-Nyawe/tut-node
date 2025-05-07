import Joi from "joi";
export const newUserSchema = Joi.object({
    names:Joi.string().required(),
    email:Joi.string(),
    password:Joi.string().required(),
    role:Joi.string()

})