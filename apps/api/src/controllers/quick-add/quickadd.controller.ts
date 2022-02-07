import { Controller, Get, Post, Query, Request, UseGuards } from "@nestjs/common";
import { Link } from "@prisma/client";
import { JwtAuthGuard } from "src/auth/auth.guard";
import { PrismaService } from "src/services";

@Controller("/quickadd")
@UseGuards(JwtAuthGuard)
export class QuickAddController {
	constructor(private readonly prismaService: PrismaService) {}

	@Get()
	async getAllLinks(@Request() req): Promise<Link[]> {
		let x = await this.prismaService.link.findMany({
			where: {
				ownerId: req.user,
			},
		});
		return x;
	}

	@Post("/add")
	async AddLink(@Request() req, @Query("name") name: string, @Query("url") url: string) {
		console.log(name, url);
		let x = await this.prismaService.link.create({
			data: {
				ownerId: req.user,
				name,
				url,
				source: "Browser",
			},
		});

		return x.id;
	}
}
