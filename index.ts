import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import {pingRouter} from "./src/routes/ping.routes";

//For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.use("/ping", pingRouter)

app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});
