import { Body, Controller, HttpException, NotFoundException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/services";
import { SignupDTO } from "../validators";

@Controller("auth/login")
export class SignUpAuthController {
	constructor(private readonly prismaservice: PrismaService, private readonly jwtService: JwtService) {}

	async signup(@Body() data: SignupDTO) {
		const theuser = await this.prismaservice.user.create({
			data: {
				name: data.name,
				email: data.email,
				password: data.password,
			},
		});

		// TODO
	}
}
