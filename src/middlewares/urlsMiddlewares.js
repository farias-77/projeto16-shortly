import urlSchema from "../schemas/urlSchema.js";
import joi from "joi";
import connection from "../database/databaseConnection.js";

export async function urlBodyValidation(req, res, next){

    const { url } = req.body;

    const { error } = urlSchema.validate({ url });

    if(joi.isError(error)){        
        return res.status(422).send(`Por favor insira uma url válida! (Lembre-se de colocar "https://" 😉`); 
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
        return res.status(500).send("Ocorreu um erro inesperado, por favor tente novamente.");
    }
}

export async function userOwnsUrlValidation(req, res, next){
    try{
        const user = res.locals.user;
        const { id } = req.params;
        
        const { rowCount, rows: dbUrl } = await connection.query(`
        SELECT "userId"
        FROM urls
        WHERE id = $1
        `, [id]);
        
        if(rowCount === 0){
            return res.status(404).send("Não existe uma url encurtada com esse id.");
        }
        
        if(dbUrl[0].userId !== user.userId){
            return res.status(401).send("Apenas o dono pode deletar uma url!");
        }

        next();    
    }catch{
        return res.status(500).send("Ocorreu um erro inesperado, por favor tente novamente.");
    }
}