import { Injectable } from "@nestjs/common";
import { Profile } from "@prisma/client";
import { PrismaService } from "src/services";

@Injectable()
export class UserService {
	constructor(private readonly prismaservice: PrismaService) {}

	async findUserbyEmail(email: string) {
		return this.prismaservice.user.findUnique({
			where: {
				email,
			},
		});
	}

	async findProfilebyId(id: number) {
		return this.prismaservice.profile.findUnique({
			where: {
				id,
			},
			select: {
				name: true,
				avatar: true,
				bio: true,
			},
		});
	}
}
