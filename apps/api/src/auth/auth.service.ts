import { HttpException, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

import { LoginDTO, SignupDTO } from "contracts";
import { PrismaService } from "src/services";

@Injectable()
export class AuthService {
	constructor(private readonly jwtService: JwtService, private readonly prismaservice: PrismaService) {}

	async login(data: LoginDTO) {
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
				name: theuser.name,
			};
		}

		throw new HttpException("Invalid credentials", 401);
	}

	async signup(data: SignupDTO) {
		const URD = await this.prismaservice.userRootDirectory.create({
			data: {},
		});

		const theuser = await this.prismaservice.user.create({
			data: {
				name: data.name,
				email: data.email,
				password: data.password,
				URD: {
					connect: { id: URD.id },
				},
			},
		});

		if (!theuser) {
			throw new HttpException("User already exists", 409);
		} else {
			return this.login({ email: data.email, password: data.password });
		}
	}
}
