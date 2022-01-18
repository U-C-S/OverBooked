import { Body, Controller, HttpException, NotFoundException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/services";
import { LoginDTO } from "../validators";

@Controller("auth/login")
export class LoginAuthController {
	constructor(private readonly prismaservice: PrismaService, private readonly jwtService: JwtService) {}

	async login(@Body() data: LoginDTO) {
		const theuser = await this.prismaservice.user.findUnique({
			where: {
				email: data.email,
			},
		});

		if (theuser && theuser.password === data.password) {
			const payload = {
				id: theuser.id,
				email: theuser.email,
				name: theuser.name,
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
}
