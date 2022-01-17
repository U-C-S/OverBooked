import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { UserRootDirectory, Link } from "@prisma/client";
import { PrismaService } from "src/services";

@Controller("/quickadd")
export class QuickAddController {
	constructor(private readonly prismaService: PrismaService) {}

	@Get()
	async getAllLinks(): Promise<Link[]> {
		let x = await this.prismaService.link.findMany();
		return x;
	}

	@Post("/add")
	async AddLink(@Query("name") name: string, @Query("url") url: string) {
		console.log(name, url);
		let x = await this.prismaService.link.create({
			data: {
				name,
				url,
				source: "Browser",
			},
		});

		return x.id;
	}
}
