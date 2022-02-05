import { Body, Controller, Post } from "@nestjs/common";

import { SkipAuth } from "src/decorators/skipauth";
import { LoginDTO, SignupDTO } from "contracts";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
	constructor(private readonly authurize: AuthService) {}

	@SkipAuth()
	@Post("login")
	async login(@Body() data: LoginDTO) {
		return await this.authurize.login(data);
	}

	@SkipAuth()
	@Post("signup")
	async signup(@Body() data: SignupDTO) {
		return await this.authurize.signup(data);
	}
}
