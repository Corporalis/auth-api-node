import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export class AuthService {
  private static readonly JWT_SECRET = process.env.JWT_SECRET as string;

  public static generateToken(user: any): string {
    return jwt.sign({ id: user.id, username: user.username }, this.JWT_SECRET, {
      expiresIn: "1h",
    });
  }

  public static async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  public static async comparePassword(
    password: string,
    hash: string
  ): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
}
