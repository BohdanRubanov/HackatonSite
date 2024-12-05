import { Request, Response, NextFunction } from 'express';

export function userRoleMiddleware(req: Request, res: Response, next: NextFunction) {
    if (res.locals.user.role === 'user') {
        next()
    }else {
        res.sendStatus(403)
    }
}