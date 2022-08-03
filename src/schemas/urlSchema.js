import joi from "joi";

const urlSchema = joi.object({
    url: joi.string().min(5).required(),
});

export default urlSchema;