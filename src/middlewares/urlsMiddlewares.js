import urlSchema from "../schemas/urlSchema.js";
import joi from "joi";
import connection from "../database/databaseConnection.js";

export async function urlBodyValidation(req, res, next){

    const { url } = req.body;

    const { error } = urlSchema.validate({ url });

    if(joi.isError(error)){
        const errorMessage = error.details[0].message; 
        
        return res.status(422).send(errorMessage); 
    }

    next();
}

export async function tokenValidation(req, res, next){
    try{
        const { authorization } = req.headers;
        const token = authorization?.replace('Bearer ', '');

        const { rowCount, rows: user} = await connection.query(`
            SELECT *
            FROM sessions
            WHERE token = $1
        `, [token]);

        if(rowCount === 0){
            return res.status(401).send("Token inválido.");
        }

        res.locals.user = user[0];

        next();
    }catch{
        return res.status(500).send("Ocorreu um erro inesperado, tente novamente por favor.");
    }
}

export async function repeatedUrlValidation(req, res, next){
    try{
        const { url } = req.body;

        const { rowCount } = await connection.query(`
            SELECT *
            FROM urls
            WHERE url = $1
        `, [url]);

        if(rowCount !== 0){
            return res.status(422).send("Url já cadastrada!");
        }

        next();
    }catch{
        return res.status(500).send("Ocorreu um erro inesperado, tente novamente por favor.");
    }
}