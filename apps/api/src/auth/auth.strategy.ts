import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

import { JWT_SECRET } from "../constants";

@Injectable()
export class AuthStrategy extends PassportStrategy(Strategy) {
	constructor() {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: JWT_SECRET,
		});
	}

	async validate(payload: any) {
		return { id: payload.id, name: payload.name, email: payload.email };
	}
}
