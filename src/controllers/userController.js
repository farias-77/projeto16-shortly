import connection from "../database/databaseConnection.js";
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
    return res.send("chegou controller")
}