import connection from "../database/databaseConnection.js";
import { v4 as uuid } from "uuid";
import bcrypt from "bcrypt";

export async function postSignUp(req, res){
    try{
        const { name, email, password } = req.body;
        const encryptedPassword = bcrypt.hashSync(password, 10);

        await connection.query(`
            INSERT INTO users (name, email, password) 
            VALUES ($1, $2, $3)`,
            [name, email, encryptedPassword]);

        return res.status(201).send("Usuário registrado com sucesso!");
    }catch{
        return res.status(500).send("Ocorreu um erro inesperado, tente novamente por favor.");
    }
}

export async function postSignIn(req, res){
    try{
        const token = uuid();
        const userId = res.locals.userId;
 
        await connection.query(`
            INSERT INTO sessions ("userId", token)
            VALUES ($1, $2)
        `,[userId, token]);

        return res.status(200).send(token);
    }catch{
        return res.status(500).send("Ocorreu um erro inesperado, tente novamente por favor.");
    }
}