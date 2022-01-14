import { Controller, Get } from "@nestjs/common";

@Controller("links")
export class LinksController {
	@Get()
	getAllLinks(): string {
		return "Hello World!";
	}
}
