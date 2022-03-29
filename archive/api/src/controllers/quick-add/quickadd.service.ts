import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/services";

@Injectable()
export class QuickAddService {
	constructor(private readonly prismaservice: PrismaService) {}

	async getAllLinks(id: number) {
		let x = await this.prismaservice.link.findMany({
			where: {
				ownerId: id,
			},
			select: {
				name: true,
				url: true,
				createdAt: true,
			},
		});
		return x;
	}

	async addLink(id: number, name: string, url: string) {
		let x = await this.prismaservice.link.create({
			data: {
				ownerId: id,
				name,
				url,
				source: "Browser",
			},
		});

		return x.id;
	}
}
