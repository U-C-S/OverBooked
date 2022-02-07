import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";

import { SkipAuth } from "src/decorators/skipauth";
import { LoginDTO, SignupDTO } from "contracts";
import { AuthService } from "./auth.service";

@Controller("auth")
@UsePipes(new ValidationPipe())
@SkipAuth()
export class AuthController {
	constructor(private readonly authurize: AuthService) {}

	@Post("login")
	async login(@Body() data: LoginDTO) {
		return await this.authurize.login(data);
	}

	@Post("signup")
	async signup(@Body() data: SignupDTO) {
		return await this.authurize.signup(data);
	}
}
