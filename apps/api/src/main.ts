import { NestFactory } from "@nestjs/core";
import { Module } from "@nestjs/common";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";
import fastifyHelmet from "fastify-helmet";

import { QuickAddLinksModule, UserModule } from "./controllers";
import { PrismaService } from "./services";
import AuthModule from "./auth";
import { CON_CONSTANTS, JWT_SECRET } from "./constants";
import fastifyJwt from "fastify-jwt";

@Module({
	imports: [QuickAddLinksModule, AuthModule, UserModule],
	controllers: [],
	providers: [],
	exports: [],
})
class AppModule {}

(async () => {
	const app = await NestFactory.create<NestFastifyApplication>(
		AppModule,
		new FastifyAdapter({ logger: true }),
		{ cors: true, logger: ["error", "warn"] }
	);

	app.get(PrismaService).enableShutdownHooks(app);

	await app.register(fastifyHelmet, CON_CONSTANTS.FASTIFY_HELMET_OPTIONS);
	await app.register(fastifyJwt, {
		secret: JWT_SECRET,
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
