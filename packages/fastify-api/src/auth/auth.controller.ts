import { Body, Controller, Post } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { hashSync } from "bcrypt";
import { PrismaService } from "src/services";
import { LoginDTO, SignupDTO } from "../validators";

@Controller("auth")
export class AuthController {
	constructor(private readonly prismaservice: PrismaService, private readonly jwtService: JwtService) {}

	@Post("login")
	async login(@Body() data: LoginDTO) {
		const { email, password } = data;

		const theuser = await this.prismaservice.user.findUnique({
			where: { email },
		});

		if (theuser && theuser.password === password) {
			const payload = {
				id: theuser.id,
				name: theuser.name,
				email,
			};
			const accessToken = this.jwtService.sign(payload);
			return {
				accessToken,
			};
		}

		return {
			error: "Invalid credentials",
		};
	}

	@Post("signup")
	async signup(@Body() data: SignupDTO) {
		const theuser = await this.prismaservice.user.create({
			data: {
				name: data.name,
				email: data.email,
				password: hashSync(data.password, 10)
			},
		});

		// TODO
	}
}
