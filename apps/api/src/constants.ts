import * as dotenv from "dotenv";
import { FastifyHelmetOptions } from "fastify-helmet";

dotenv.config();

export const JWT_SECRET = process.env.JWT_SECRET || "randumbsecret";
export const IS_PRODUCTION = process.env.NODE_ENV === "production" || false;

/**
 * For Clean Code, use this to store all the confusing constants
 */
export namespace CON_CONSTANTS {
	/**
	 * For ref: https://docs.nestjs.com/security/helmet#use-with-fastify
	 */
	export const FASTIFY_HELMET_OPTIONS: FastifyHelmetOptions = {
		contentSecurityPolicy: {
			directives: {
				defaultSrc: [`'self'`],
				styleSrc: [`'self'`, `'unsafe-inline'`],
				imgSrc: [`'self'`, "data:", "validator.swagger.io"],
				scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
			},
		},
	};
}
