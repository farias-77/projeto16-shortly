import connection from "../database/databaseConnection.js";
import signUpSchema from "../schemas/signUpSchema.js";
import signInSchema from "../schemas/signInSchema.js";
import bcrypt from "bcrypt";
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
    try{
        const { email } = req.body;

        const { rowCount } = await connection.query(`SELECT * FROM users WHERE email = $1`, [email]);

        if(rowCount !== 0){
            return res.status(409).send("Email já cadastrado!");
        }

        next();
    }catch{
        return res.status(500).send("Ocorreu um erro inesperado, tente novamente por favor.");
    }
}

export async function signInBodyValidation(req, res, next){
    
    const { email, password } = req.body;

    const { error } = signInSchema.validate({ email, password });

    if(joi.isError(error)){
        const errorMessage = error.details[0].message; 
        
        return res.status(422).send(errorMessage);
    }

    next();
}

export async function signInValidation(req, res, next){
    try{
        const { email, password } = req.body;

        const { rowCount, rows: users } = await connection.query(`
            SELECT *
            FROM users
            WHERE email = $1
        `,[email]);

        if(rowCount === 0 || !bcrypt.compareSync(password, users[0].password)){
            return res.status(401).send("Email ou senha incorretos.");
        }

        res.locals.userId = users[0].id;

        next()
    }catch{
        return res.status(500).send("Ocorreu um erro inesperado, tente novamente por favor.");
    }
}