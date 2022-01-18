import { NestFactory } from "@nestjs/core";
import { Module } from "@nestjs/common";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";
import fastifyHelmet from "fastify-helmet";

import { QuickAddLinksModule } from "./controllers";
import { PrismaService } from "./services";

@Module({
	imports: [QuickAddLinksModule],
	controllers: [],
	providers: [PrismaService],
	exports: [],
})
class AppModule {}

(async () => {
	const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter(), {
		cors: true,
		logger: console,
	});

	app.get(PrismaService).enableShutdownHooks(app);

	await app.register(fastifyHelmet, {
		contentSecurityPolicy: {
			directives: {
				defaultSrc: [`'self'`],
				styleSrc: [`'self'`, `'unsafe-inline'`],
				imgSrc: [`'self'`, "data:", "validator.swagger.io"],
				scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
			},
		},
	});

	const config = new DocumentBuilder()
		.setTitle("Clink OpenAPI Server")
		.setVersion("0.1")
		.setLicense("MIT", "https://github.com/U-C-S/clink-node/blob/main/LICENSE")
		.build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup("api", app, document);

	await app.listen(3100);
	console.log(`Swagger running on: ${await app.getUrl()}/api`);
})();
