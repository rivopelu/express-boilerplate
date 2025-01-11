import {Request, Response, NextFunction} from "express"
export function pingController (req : Request, res  : Response, next : NextFunction)  {
    try {
        res.json({ping: "pong"})
    }catch (err){
        next(err);
    }
}