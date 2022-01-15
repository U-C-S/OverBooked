import { NestFactory } from "@nestjs/core";
import { Module } from "@nestjs/common";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";
import fastifyHelmet from "fastify-helmet";

import { LinksController } from "./links/links.controller";

@Module({
	imports: [],
	controllers: [LinksController],
	providers: [],
	exports: [],
})
class AppModule {}

(async () => {
	const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());

	app.register(fastifyHelmet);
	app.enableCors();

	const config = new DocumentBuilder()
		.setTitle("Clink OpenAPI Server")
		.setVersion("0.1")
		.setLicense("MIT", "https://github.com/U-C-S/clink-node/blob/main/LICENSE")
		.build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup("API", app, document);

	await app.listen(3100);
	console.log(`Server running on: ${await app.getUrl()}`);
})();
