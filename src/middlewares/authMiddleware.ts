import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { SECRET_KEY } from '../config/token';


interface IToken{
    status: string
    data: {
        id: number
        username: string
        email: string
        password: string
        role: string
    }

}

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const userCookie = req.cookies
    
    if (userCookie.token){
        
        const token = verify(userCookie.token, SECRET_KEY) as IToken
        console.log(token)
        res.locals.user = token.data
        if (res.locals.user.email && res.locals.user.username && res.locals.user.role) {
            console.log("tftvgyg")
                next()}
    } else {
        res.sendStatus(401)
    }

}