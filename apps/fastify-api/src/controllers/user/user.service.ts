import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/services";

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UserService {
	constructor(private readonly prismaservice: PrismaService) {}

	async findOne(email: string): Promise<User | undefined> {
		return this.prismaservice.user.findUnique({
			where: {
				email,
			},
		});
	}
}
