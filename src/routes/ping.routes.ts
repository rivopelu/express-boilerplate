import express from "express";
import {pingController} from "../controller/ping.controller";
const router = express.Router()


router.get("/", pingController)


export const pingRouter = router;