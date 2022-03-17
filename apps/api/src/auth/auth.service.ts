import { HttpException, Injectable } from "@nestjs/common";
import { HttpAdapterHost } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { FastifyAdapter } from "@nestjs/platform-fastify";

import { LoginDTO, SignupDTO } from "contracts";
import { PrismaService } from "src/services";

@Injectable()
export class AuthService {
	constructor(
		private readonly jwtService: JwtService,
		private readonly prismaservice: PrismaService,
		private adapterHost: HttpAdapterHost
	) {}

	async login(data: LoginDTO) {
		let x = this.adapterHost.httpAdapter.getInstance<FastifyAdapter | any>();

		const { email, password } = data;

		const theuser = await this.prismaservice.user.findUnique({
			where: { email },
		});

		if (theuser && theuser.password === password) {
			const payload = {
				id: theuser.id,
				email,
			};
			// const accessToken = this.jwtService.sign(payload);
			let accessToken = x.jwt.sign(payload);

			return { accessToken };
		}

		throw new HttpException("Invalid credentials", 401);
	}

	async signup(data: SignupDTO) {
		const theuser = await this.prismaservice.profile.create({
			data: {
				name: data.name,
				user: {
					create: {
						email: data.email,
						password: data.password,
					},
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
