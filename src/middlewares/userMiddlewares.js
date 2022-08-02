import connection from "../database/databaseConnection.js";
import signUpSchema from "../schemas/signUpSchema.js";
import joi from "joi";

export async function signUpBodyValidation(req, res, next){

    const { name, email, password, confirmPassword } = req.body;

    const { error } = signUpSchema.validate({ name, email, password, confirmPassword });
    
    if(joi.isError(error)){
        const errorMessage = error.details[0].message; 
        
        return res.status(422).send(errorMessage);
    }

    if(password !== confirmPassword){
        return res.status(422).send(`"password" and "confirmPassword" must be equal.`);
    }

    next();
}

export async function newEmailValidation(req, res, next){

    const { email } = req.body;

    const { rowCount } = await connection.query(`SELECT * FROM users WHERE email = $1`, [email]);

    if(rowCount !== 0){
        return res.status(409).send("Email já cadastrado!");
    }

    next();
}