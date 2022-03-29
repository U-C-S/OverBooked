import { Controller, Get, Post, Query, Request, UseGuards } from "@nestjs/common";
import { Link } from "@prisma/client";
import { JwtAuthGuard } from "src/auth/auth.guard";
import { QuickAddService } from "./quickadd.service";

@Controller("/quickadd")
@UseGuards(JwtAuthGuard)
export class QuickAddController {
	constructor(private readonly prismaService: QuickAddService) {}

	@Get()
	async getAllLinks(@Request() req) {
		return this.prismaService.getAllLinks(req.user);
	}

	@Post("/add")
	async AddLink(@Request() req, @Query("name") name: string, @Query("url") url: string) {
		return this.prismaService.addLink(req.user, name, url);
	}
}
