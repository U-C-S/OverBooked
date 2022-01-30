import { Controller, Get, Post, Query } from "@nestjs/common";
import { Link, User } from "@prisma/client";
import { PrismaService } from "src/services";

@Controller("/user")
export class UserController {
	constructor(private readonly prismaService: PrismaService) {}

	@Get("/current")
	async currentUser(@Query("id") id: number): Promise<User> {
		return this.prismaService.user.findUnique({ where: { id } });
	}
}
