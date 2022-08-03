import connection from "../database/databaseConnection.js";
import { nanoid } from "nanoid";

export async function returnShortUrl(req, res){
    try{
        const { url } = req.body;
        const userId = res.locals.user.userId;
        const shortUrl = nanoid();

        await connection.query(`
            INSERT INTO urls (url, "shortUrl", "userId")
            VALUES ($1, $2, $3)
        `,[url, shortUrl, userId]);

        return res.send({ shortUrl });
    }catch{
        return res.status(500).send("Ocorreu um erro inesperado, tente novamente por favor.");
    }
}