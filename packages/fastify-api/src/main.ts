import { NestFactory } from "@nestjs/core";
import { Module } from "@nestjs/common";
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
	imports: [],
	controllers: [AppController],
	providers: [AppService],
})
class AppModule {}

(async () => {
	const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
	await app.listen(3100);
	console.log(`Application is running on: ${await app.getUrl()}`);
})();
