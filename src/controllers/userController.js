import connection from "../database/databaseConnection.js";

export async function postSignUp(req, res){
    try{
        const { name, email, password } = req.body;

        await connection.query(`
            INSERT INTO users (name, email, password) 
            VALUES ($1, $2, $3)`,
            [name, email, password]);

        return res.status(201).send("Usuário registrado com sucesso!");
    }catch{
        return res.status(500).send("Ocorreu um erro inesperado, tente novamente por favor.");
    }
}