import { Body, Controller, Post } from "@nestjs/common";
import { LoginDTO, SignupDTO } from "../validators";
import { AuthService } from "./auth.service";

@Controller("auth")
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
