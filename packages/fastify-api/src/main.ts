import { NestFactory } from "@nestjs/core";
import { Module } from "@nestjs/common";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";
import fastifyHelmet from "fastify-helmet";

import { QuickAddController } from "./controllers";
import { PrismaService } from "./services";

@Module({
	imports: [],
	controllers: [QuickAddController],
	providers: [PrismaService],
	exports: [],
})
class AppModule {}

(async () => {
	const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
	// const prismaService: PrismaService = app.get(PrismaService);
	// prismaService.enableShutdownHooks(app);

	app.register(fastifyHelmet);
	// app.enableCors();

	const config = new DocumentBuilder()
		.setTitle("Clink OpenAPI Server")
		.setVersion("0.1")
		.setLicense("MIT", "https://github.com/U-C-S/clink-node/blob/main/LICENSE")
		.build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup("api", app, document);

	await app.listen(3100);
	console.log(`Server running on: ${await app.getUrl()}`);
})();
