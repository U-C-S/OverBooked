import { Controller, Get, Post, Query, Request, UseGuards } from "@nestjs/common";
import { Link, User } from "@prisma/client";
import { JwtAuthGuard } from "src/auth/auth.guard";
import { PrismaService } from "src/services";

@Controller("/user")
export class UserController {
	constructor(private readonly prismaService: PrismaService) {}

	@UseGuards(JwtAuthGuard)
	@Get()
	async currentUser(@Request() req) {
		// return this.prismaService.user.findUnique({ where: { id } });
		return req.user;
	}
}
