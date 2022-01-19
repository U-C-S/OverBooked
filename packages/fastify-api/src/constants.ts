import * as dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "randumbsecret";

export { JWT_SECRET };
