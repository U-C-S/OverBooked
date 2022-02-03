import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";

import { JWT_SECRET } from "src/constants";
import { PrismaService } from "src/services";
import { AuthController } from "./auth.controller";
import { JwtAuthGuard } from "./auth.guard";
import { AuthService } from "./auth.service";
import { AuthStrategy } from "./auth.strategy";

// maybe need to add prismaservice here
@Module({
	imports: [
		PassportModule,
		JwtModule.register({
			secret: JWT_SECRET,
			signOptions: { expiresIn: "1w" },
		}),
	],
	controllers: [AuthController],
	providers: [
		AuthService,
		AuthStrategy,
		PrismaService,
		{
			provide: APP_GUARD,
			useClass: JwtAuthGuard,
		},
	],
})
export default class AuthModule {}
