import { Controller, Get } from "@nestjs/common";
import { Link } from "@prisma/client";

@Controller("links")
export class LinksController {
	@Get()
	getAllLinks(): string {
		return "Hello World!";
	}
}
