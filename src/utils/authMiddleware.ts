import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

dotenv.config();

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

export const authenticateJWT = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
      if (!user) {
        return res.sendStatus(401);
      }
      if (err) {
        return res.sendStatus(403);
      }

      const request = req as CustomRequest;
      request.token = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};
