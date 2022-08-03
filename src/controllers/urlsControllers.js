import connection from "../database/databaseConnection.js";
import { nanoid } from "nanoid";

export async function postShortUrl(req, res){
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

export async function getShortUrlById(req, res){
    try{
        const { id } = req.params;

        const { rowCount, rows: shortUrl } = await connection.query(`
            SELECT "id", "shortUrl", "url"
            FROM urls
            WHERE id = $1
        `, [id]);

        if(rowCount === 0){
            return res.status(404).send("Não existe uma url com o id fornecido.");
        }

        return res.status(200).send(shortUrl[0]);
    }catch{
        return res.status(500).send("Ocorreu um erro inesperado, tente novamente por favor.");
    }
}

export async function redirectToUrl(req, res){
    try{
        const { shortUrl } = req.params;

        const { rowCount, rows: dbUrls } = await connection.query(`
            SELECT url, visits
            FROM urls
            WHERE "shortUrl" = $1
        `, [shortUrl]);

        if(rowCount === 0){
            return res.status(404).send("A url encurtada fornecida não existe.")
        }

        const visits = dbUrls[0].visits;
        const url = dbUrls[0].url;

        await connection.query(`
            UPDATE urls
            SET visits = $1
            WHERE "shortUrl" = $2
        `, [visits+1, shortUrl]);

        return res.redirect(url);
    }catch{
        return res.status(500).send("Ocorreu um erro inesperado, tente novamente por favor.");
    }
}