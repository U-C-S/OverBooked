import { Controller, Get, Post, Query, Request, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/auth.guard";
import { UserService } from "./user.service";

@Controller("/user")
export class UserController {
	constructor(private readonly userService: UserService) {}

	@UseGuards(JwtAuthGuard)
	@Get("/profile")
	async currentUser(@Request() req) {
		return this.userService.findProfilebyId(req.user);
	}
}
